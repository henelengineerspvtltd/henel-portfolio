import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      company,
      requirementType,
      projectLocation,
      buildingType,
      message,
    } = body ?? {};

    // Validate required fields
    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        {
          error:
            'Full Name, Phone Number, and Email Address are required.',
        },
        { status: 400 }
      );
    }

    // Send the form data to FormSubmit
    const response = await fetch(
      'https://formsubmit.co/ajax/henelkkla@gmail.com',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Quote Request from ${name.trim()}`,
          _captcha: 'false',
          _replyto: email.trim(),

          'Full Name': name.trim(),
          'Phone Number': phone.trim(),
          'Email Address': email.trim(),

          Company: company?.trim() || '',
          'Requirement Type': requirementType || '',
          'Project Location': projectLocation?.trim() || '',
          'Building / Project Type': buildingType?.trim() || '',
          'Additional Requirements': message?.trim() || '',
        }),
      }
    );

    // Try to read FormSubmit's response
    const result = await response.json().catch(() => null);

    // FormSubmit returns success when the submission is accepted
    const success =
      result?.success === true ||
      result?.success === 'true';

    if (!response.ok || !success) {
      console.error('FormSubmit error:', {
        status: response.status,
        result,
      });

      return NextResponse.json(
        {
          error:
            result?.message ||
            result?.error ||
            'Unable to send the request. Please try again.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Unable to send the request. Please try again.',
      },
      { status: 500 }
    );
  }
}
