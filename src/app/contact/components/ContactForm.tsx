'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

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

const requirementTypes = [
  'Lightning Protection',
  'ESE Lightning Arrester',
  'Earthing',
  'Surge Protection',
  'Wind Energy',
  'Windmill Maintenance',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        'Please enter your Full Name, Phone Number, and Email Address.'
      );
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
            'Unable to send your request. Please try again.'
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to send your request. Please try again.'
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
          <h3 className="text-lg font-800 text-foreground mb-2">
            Enquiry Received
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Thank you, <strong>{form.name}</strong>. We have received your
            enquiry and will contact you shortly. For urgent matters, call us
            on{' '}
            <a
              href="tel:+919443282312"
              className="text-accent font-700"
            >
              +91 94432 82312
            </a>{' '}
            or{' '}
            <a
              href="tel:+919443692711"
              className="text-accent font-700"
            >
              +91 94436 92711
            </a>
            .
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
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-8"
      aria-label="Contact and quote request form"
    >
      <h3 className="text-base font-800 text-foreground mb-6">
        Send Us an Enquiry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="name">
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="company">
            Company Name
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="form-input"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="email">
            Email Address *
          </label>

          <input
            id="email"
            name="email"
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
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
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
          Requirement Type
        </label>

        <select
          id="requirementType"
          name="requirementType"
          value={form.requirementType}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">— Select requirement —</option>

          {requirementTypes.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="form-label" htmlFor="projectLocation">
            Project Location
          </label>

          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            value={form.projectLocation}
            onChange={handleChange}
            className="form-input"
            placeholder="City / District"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="buildingType">
            Building / Project Type
          </label>

          <input
            id="buildingType"
            name="buildingType"
            type="text"
            value={form.buildingType}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g. Factory, Warehouse, Tower"
          />
        </div>
      </div>

      <div className="mb-7">
        <label className="form-label" htmlFor="message">
          Additional Requirements
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="form-input resize-none"
          placeholder="Describe your requirement, site details, or any specific questions..."
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
            Submitting...
          </>
        ) : (
          <>
            <Icon
              name="PaperAirplaneIcon"
              size={18}
              variant="solid"
            />
            REQUEST A QUOTE
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        We respond within 1–2 business days. For urgent enquiries, call{' '}
        <a
          href="tel:+919443282312"
          className="text-accent font-700"
        >
          +91 94432 82312
        </a>{' '}
        or{' '}
        <a
          href="tel:+919443692711"
          className="text-accent font-700"
        >
          +91 94436 92711
        </a>
        .
      </p>
    </form>
  );
}
