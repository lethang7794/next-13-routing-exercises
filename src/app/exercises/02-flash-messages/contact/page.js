'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider/ToastProvider';

function ContactPage() {
  const { createToast } = useContext(ToastContext);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push('/exercises/02-flash-messages');

    createToast("Your message was received. We'l get back to you soon!", 'success');
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' required={true} />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
