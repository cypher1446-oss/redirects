'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Simulate backend processing
  console.log('New OpinionInsights contact form submission:', values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // A real app would:
  // 1. Store the inquiry in a database (e.g., Firestore)
  // 2. Trigger an email notification
  
  // Don't redirect for on-page forms, the UI will show a toast.
  // The dedicated contact page form also shows a toast instead of redirecting.
  // redirect('/contact/thank-you');
}
