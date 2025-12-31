import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      You have received a new message from your website contact form.
    </p>
    <h2>Sender Details:</h2>
    <ul>
      <li>
        <strong>Name:</strong> {firstName} {lastName}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      {phone && (
        <li>
          <strong>Phone:</strong> {phone}
        </li>
      )}
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
