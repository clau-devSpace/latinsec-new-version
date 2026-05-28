"use client";

import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import  CVForm  from '@/components/CVForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const ContactRRHH = () => {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <WhatsAppButton />
      <div className="max-w-5xl mx-auto px-5">
        <CVForm />
      </div>
    </section>
  );
};

export default ContactRRHH;
