// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardHeader, CardContent } from './card';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { MailCheck } from 'lucide-react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mpwazbpq');

  if (state.succeeded) {
    return (
      <Card className="shadow-lg shadow-primary border-primary">
        <CardHeader className="flex-row justify-center font-bold text-primary-foreground">
          Thank You!
          <MailCheck className="ml-1" />
        </CardHeader>
        <CardContent>We will be hearing from us soon!</CardContent>
      </Card>
    );
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        className="max-w-lg flex-1"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="max-w-lg flex-1"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Textarea
        id="message"
        name="message"
        placeholder="Message"
        className="max-w-lg flex-1"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button id="submitButton" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
