# Contact form email setup

The contact form now requires:
- Full Name
- Phone Number
- Email Address

It submits to `/api/contact`, which forwards the enquiry to `henelkkla@gmail.com` using FormSubmit.

On the first real submission, FormSubmit may send an activation/confirmation email to `henelkkla@gmail.com`. Confirm it once. Do not add SMTP passwords to the project.
