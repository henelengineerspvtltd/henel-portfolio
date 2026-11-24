'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/components/LeadTracking';
import { REQUIREMENT_TYPES, type ContactFormStrings } from './contact-form-strings';

const phoneLink = (tel: string, label: string) => (
  <a href={`tel:${tel}`} className="text-accent font-700">
    {label}
  </a>
);

/** Renders a translated sentence, swapping {placeholders} for React nodes. */
function fill(template: string, parts: Record<string, React.ReactNode>) {
  return template.split(/(\{\w+\})/).map((piece, i) => {
    const m = piece.match(/^\{(\w+)\}$/);
    return <React.Fragment key={i}>{m && m[1] in parts ? parts[m[1]] : piece}</React.Fragment>;
  });
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  requirementType: string;
  projectLocation: string;
  buildingType: string;
  message: string;
  company: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  requirementType: '',
  projectLocation: '',
  buildingType: '',
  message: '',
  company: '',
};

export default function ContactForm({ strings = {} }: { strings?: ContactFormStrings }) {
  const _ = (text: string) => strings[text] ?? text;
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Honeypot: hidden from people, usually filled by spam bots. FormSubmit discards
  // submissions where `_honey` is set; we also skip sending entirely.
  const [honey, setHoney] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError(
        _('Please enter your Full Name, Phone Number, and Email Address.')
      );
      return;
    }

    if (honey) {
      setSubmitted(true);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError(_('Please enter a valid email address.'));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/henelkkla@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Quote Request from ${form.name.trim()}`,
            _captcha: 'false',
            _honey: honey,
            _replyto: form.email.trim(),

            'Full Name': form.name.trim(),
            'Phone Number': form.phone.trim(),
            'Email Address': form.email.trim(),
            Company: form.company.trim(),
            'Requirement Type': form.requirementType,
            'Project Location': form.projectLocation.trim(),
            'Building / Project Type': form.buildingType.trim(),
            'Additional Requirements': form.message.trim(),
          }),
        }
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            result.error ||
            _('Unable to send your request. Please try again.')
        );
      }

      trackEvent('generate_lead', {
        form_name: 'quote_request',
        requirement_type: form.requirementType,
        page_path: window.location.pathname,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);

      setError(
        err instanceof Error
          ? err.message
          : _('Unable to send your request. Please try again.')
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 text-center flex flex-col items-center gap-5">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#2D7A2D' }}
        >
          <Icon
            name="CheckIcon"
            size={32}
            variant="solid"
            className="text-white"
          />
        </div>

        <div>
          <h2 className="text-lg font-800 text-foreground mb-2">
            {_("Enquiry Received")}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {fill(_('Thank you, {name}. We have received your enquiry and will contact you shortly. For urgent matters, call us on {phone1} or {phone2}.'), {
              name: <strong>{form.name}</strong>,
              phone1: phoneLink('+919443282312', '+91 94432 82312'),
              phone2: phoneLink('+919443692711', '+91 94436 92711'),
            })}
          </p>
        </div>

        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
            setError('');
          }}
          className="btn-outline-dark text-xs"
        >
          {_("Submit Another Enquiry")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-card border border-border rounded-xl p-8"
      aria-label={_('Contact and quote request form')}
    >
      <h2 className="text-base font-800 text-foreground mb-6">
        {_("Send Us an Enquiry")}
      </h2>

      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">{_('Leave this field empty')}</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="name">
            {_("Full Name *")}
          </label>

          <input
            id="name"
            name="name"
            maxLength={100}
            autoComplete="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="form-input"
            placeholder={_("Your name")}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="company">
            {_("Company Name")}
          </label>

          <input
            id="company"
            name="company"
            maxLength={120}
            autoComplete="organization"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="form-input"
            placeholder={_("Your company")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="email">
            {_("Email Address *")}
          </label>

          <input
            id="email"
            name="email"
            maxLength={150}
            autoComplete="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="form-input"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="phone">
            {_("Phone Number *")}
          </label>

          <input
            id="phone"
            name="phone"
            maxLength={20}
            autoComplete="tel"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="form-label" htmlFor="requirementType">
          {_("Requirement Type")}
        </label>

        <select
          id="requirementType"
          name="requirementType"
          value={form.requirementType}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">{_('— Select requirement —')}</option>

          {REQUIREMENT_TYPES.map((r) => (
            <option key={r} value={r}>
              {_(r)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="projectLocation">
            {_("Project Location")}
          </label>

          <input
            id="projectLocation"
            name="projectLocation"
            maxLength={150}
            type="text"
            value={form.projectLocation}
            onChange={handleChange}
            className="form-input"
            placeholder={_("City / District")}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="buildingType">
            {_("Building / Project Type")}
          </label>

          <input
            id="buildingType"
            name="buildingType"
            maxLength={120}
            type="text"
            value={form.buildingType}
            onChange={handleChange}
            className="form-input"
            placeholder={_("e.g. Factory, Warehouse, Tower")}
          />
        </div>
      </div>

      <div className="mb-7">
        <label className="form-label" htmlFor="message">
          {_("Additional Requirements")}
        </label>

        <textarea
          id="message"
          name="message"
          maxLength={3000}
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="form-input resize-none"
          placeholder={_("Describe your requirement, site details, or any specific questions...")}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Icon
              name="ArrowPathIcon"
              size={18}
              variant="outline"
              className="animate-spin"
            />
            {_("Submitting...")}
          </>
        ) : (
          <>
            <Icon
              name="PaperAirplaneIcon"
              size={18}
              variant="solid"
            />
            {_("REQUEST A QUOTE")}
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        {fill(_('We respond within 1–2 business days. For urgent enquiries, call {phone1} or {phone2}.'), {
          phone1: phoneLink('+919443282312', '+91 94432 82312'),
          phone2: phoneLink('+919443692711', '+91 94436 92711'),
        })}
      </p>
    </form>
  );
}
