import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - emails will not be sent");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email not sent - SENDGRID_API_KEY not configured');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function formatContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { subject: string; text: string; html: string } {
  const subject = `Contact Form: ${formData.subject}`;
  
  const text = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `.trim();

  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
    <p><strong>Subject:</strong> ${formData.subject}</p>
  </div>
  
  <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
    <h3 style="margin-top: 0;">Message:</h3>
    <p style="white-space: pre-wrap;">${formData.message}</p>
  </div>
</div>
  `.trim();

  return { subject, text, html };
}