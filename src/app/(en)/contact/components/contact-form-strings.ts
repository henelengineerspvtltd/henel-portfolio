/**
 * English source text for the client-side contact form. The server page translates
 * these with the phrasebook and passes the result to <ContactForm strings={…} />.
 */
export const REQUIREMENT_TYPES = [
  'Lightning Protection',
  'ESE Lightning Arrester',
  'Earthing',
  'Surge Protection',
  'Wind Energy',
  'Windmill Maintenance',
  'Solar Panel Installation',
  'Solar Maintenance',
  'Other',
];

export const CONTACT_FORM_STRINGS = [
  ...REQUIREMENT_TYPES,
  'Please enter your Full Name, Phone Number, and Email Address.',
  'Please enter a valid email address.',
  'Unable to send your request. Please try again.',
  'Enquiry Received',
  'Thank you, {name}. We have received your enquiry and will contact you shortly. For urgent matters, call us on {phone1} or {phone2}.',
  'Submit Another Enquiry',
  'Contact and quote request form',
  'Send Us an Enquiry',
  'Leave this field empty',
  'Full Name *',
  'Your name',
  'Company Name',
  'Your company',
  'Email Address *',
  'Phone Number *',
  'Requirement Type',
  '— Select requirement —',
  'Project Location',
  'City / District',
  'Building / Project Type',
  'e.g. Factory, Warehouse, Tower',
  'Additional Requirements',
  'Describe your requirement, site details, or any specific questions...',
  'Submitting...',
  'REQUEST A QUOTE',
  'We respond within 1–2 business days. For urgent enquiries, call {phone1} or {phone2}.',
] as const;

export type ContactFormStrings = Partial<Record<string, string>>;
