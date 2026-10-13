# Contact form email setup

The contact form requires:
- Full Name
- Phone Number
- Email Address

It submits directly from the browser to FormSubmit (`https://formsubmit.co/ajax/henelkkla@gmail.com`),
which forwards the enquiry to `henelkkla@gmail.com`. There is no server API route.

Spam protection:
- A hidden honeypot field (`_honey`) — bots that fill it are ignored (FormSubmit also discards them).
- Length limits on every field and an email format check.

On the first real submission, FormSubmit may send an activation/confirmation email to
`henelkkla@gmail.com`. Confirm it once. Do not add SMTP passwords to the project.

Optional hardening: after activation, FormSubmit shows a random alias for your address
(e.g. `https://formsubmit.co/ajax/abc123...`). Replacing the email in
`src/app/contact/components/ContactForm.tsx` with that alias hides the address from bots
that scrape the site's JavaScript.
