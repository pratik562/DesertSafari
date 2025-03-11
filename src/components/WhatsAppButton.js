'use client';

import { whatsapp } from '@/assests';
import { company } from '@/utils/dummyData';

import Image from 'next/image';

const WhatsAppButton = () => {

  return (
    <a 
      href={`https://wa.me/${company?.phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
    >
      <Image 
        src={whatsapp} 
        alt="WhatsApp" 
        width={50} 
        height={50} 
      />
    </a>
  );
};

export default WhatsAppButton;
