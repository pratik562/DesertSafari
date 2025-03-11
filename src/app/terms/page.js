'use client';

const TermsAndConditions = () => {
  return (
    <div id='terms' className="container mx-auto px-4 py-10 text-secondary">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Krishna Clinic. These Terms & Conditions govern your use of our website and services.
          By accessing our site, you agree to comply with these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Medical Disclaimer</h2>
        <p>
          The information provided on this website is for informational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare provider before making any medical decisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Appointments & Cancellations</h2>
        <p>
          - Patients must provide accurate information when booking an appointment.<br/>
          - Cancellations should be made at least 24 hours in advance.<br/>
          - We reserve the right to reschedule or cancel appointments if necessary.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Payment & Insurance</h2>
        <p>
          - Payment is due at the time of service unless otherwise agreed.<br/>
          - We accept major insurance providers. Patients are responsible for verifying coverage.
        </p>
      </section>

      {/* <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</Link> for details on how we handle your data.
        </p>
      </section> */}

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Website Use</h2>
        <p>
          - You agree to use our website only for lawful purposes.<br/>
          - Unauthorized access or misuse of content is strictly prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
        <p>
          If you have any questions regarding these terms, please contact us at:
          <br/>
          <strong>Email:</strong> contact@[clinicname].com
          <br/>
          <strong>Phone:</strong> +1 123 456 7890
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
