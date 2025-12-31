import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'JLG Solutions <onboarding@resend.dev>',
      to: ['jlgsolutions25@gmail.com'],
      subject: 'New message from your website contact form',
      react: EmailTemplate({ firstName, lastName, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
