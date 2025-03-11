"use client";

import { NavBar } from "@/components";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AboutUs,
  ContactUs,
  CustomerReview,
  Footer,
  Home,
  NewsLetter,
  Services,
  TermsAndConditions,
} from "@/section";

const Page = () => {
  return (
    <main className="relative bg-white">
      <NavBar />
      <div className="">
      {/* <div className="screen-max-width "> */}
        <section>
          <Home />
        </section>
        <section className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-md">
          <Services />
        </section>
        <section className="mx-5">
          <AboutUs />
        </section>
        <section>
         <CustomerReview/>
        </section>
        <section className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-md my-5">
          <ContactUs />
        </section>
      </div>
        <section className="bg-black padding-t pb-8">
          <Footer />
        </section>
        <WhatsAppButton />
    </main>
  );
};

export default Page;
 