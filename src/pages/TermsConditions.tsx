import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-background text-foreground flex justify-center">
        <div className="max-w-4xl w-full px-6 py-10 bg-card rounded-lg shadow-lg relative overflow-hidden animate-fade-in">
          {/* Animated glowing border */}
          <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
            <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-sm animate-spin-slow"></div>
          </div>
          
          {/* Content wrapper with background */}
          <div className="relative bg-card rounded-lg p-6 z-10">
            <article className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <h1 className="text-primary-foreground text-center mb-8">
                Terms & Conditions
              </h1>
              <p className="text-center text-sm mb-8">
                <strong>Last Updated:</strong> January 15, 2026
                <br />
                <strong>Effective Date:</strong> January 15, 2026
              </p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Apna Growth Media ("we," "our," "us"). These Terms and Conditions 
                govern your use of our website, services, and any related offerings. By accessing 
                or using our services, you agree to be bound by these terms. If you disagree with 
                any part of these terms, please do not use our services.
              </p>

              <h2>2. Definitions</h2>
              <ul>
                <li><strong>"Client"</strong> refers to any individual or business entity that engages our services.</li>
                <li><strong>"Services"</strong> refers to digital marketing, SEO, social media management, web design, video production, and related services offered by Apna Growth Media.</li>
                <li><strong>"Deliverables"</strong> refers to any work product, reports, content, or materials created as part of our services.</li>
                <li><strong>"Agreement"</strong> refers to these Terms and Conditions along with any service-specific contracts.</li>
              </ul>

              <h2>3. Services Offered</h2>
              <p>Apna Growth Media provides the following services:</p>
              <ul>
                <li>Social Media Marketing & Management</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Google Ads & Meta Ads Management</li>
                <li>Website Design & Development</li>
                <li>Video Production & Photography</li>
                <li>Email & WhatsApp Marketing</li>
                <li>Brand Strategy & Consulting</li>
              </ul>
              <p>
                The specific scope of services for each client will be outlined in a separate 
                service agreement or proposal document.
              </p>

              <h2>4. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information required for service delivery.</li>
                <li>Grant necessary access to accounts, platforms, and tools as required.</li>
                <li>Respond to communications and approval requests in a timely manner.</li>
                <li>Ensure all content and materials provided are legally owned or licensed.</li>
                <li>Make payments according to the agreed schedule.</li>
                <li>Not engage in any activity that may harm our reputation or operations.</li>
              </ul>

              <h2>5. Payment Terms</h2>
              <ul>
                <li><strong>Payment Schedule:</strong> Payments are due as specified in your service agreement (monthly, quarterly, or project-based).</li>
                <li><strong>Late Payments:</strong> A late fee of 2% per month may be applied to overdue payments.</li>
                <li><strong>Payment Methods:</strong> We accept UPI, bank transfer, and other methods as agreed.</li>
                <li><strong>Currency:</strong> All prices are in Indian Rupees (INR) unless otherwise specified.</li>
                <li><strong>Taxes:</strong> Prices are exclusive of GST (18%) which will be added to invoices.</li>
              </ul>

              <h2>6. Service Delivery</h2>
              <ul>
                <li>Services will commence upon receipt of the initial payment and required materials.</li>
                <li>Timelines are estimates and may vary based on client responsiveness and project complexity.</li>
                <li>We reserve the right to pause services if payments are overdue or client cooperation is lacking.</li>
                <li>Results from marketing services are influenced by many factors and cannot be guaranteed.</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <h3>a. Client Materials</h3>
              <p>
                You retain ownership of all materials you provide to us. By providing materials, 
                you grant us a license to use them for service delivery purposes.
              </p>
              <h3>b. Deliverables</h3>
              <p>
                Upon full payment, you will own the rights to deliverables created specifically 
                for you. However, we retain the right to:
              </p>
              <ul>
                <li>Use deliverables in our portfolio and marketing materials.</li>
                <li>Retain ownership of any pre-existing materials, templates, or tools used.</li>
                <li>Use anonymized data and learnings for improvement of our services.</li>
              </ul>

              <h2>8. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or sensitive 
                information shared during the engagement. This includes business strategies, 
                customer data, financial information, and trade secrets.
              </p>

              <h2>9. Limitation of Liability</h2>
              <ul>
                <li>Our total liability shall not exceed the fees paid by you in the 3 months preceding the claim.</li>
                <li>We are not liable for indirect, incidental, or consequential damages.</li>
                <li>We are not responsible for third-party platform changes, algorithm updates, or policy modifications.</li>
                <li>Marketing results are not guaranteed and depend on various external factors.</li>
              </ul>

              <h2>10. Termination</h2>
              <ul>
                <li><strong>By Client:</strong> You may terminate services with 30 days written notice. Fees for services rendered will be due.</li>
                <li><strong>By Us:</strong> We may terminate for non-payment, breach of terms, or if continuing would harm our reputation.</li>
                <li><strong>Effect:</strong> Upon termination, access to accounts and materials will be transferred within 14 days of final payment.</li>
              </ul>

              <h2>11. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms shall first be attempted to be resolved 
                through good-faith negotiation. If unsuccessful, disputes shall be settled through 
                arbitration in Bijnor, India, under the Arbitration and Conciliation Act, 1996.
              </p>

              <h2>12. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                upon posting to our website. Continued use of services after modifications 
                constitutes acceptance of the updated terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any legal proceedings 
                shall be conducted in the courts of Bijnor, Uttar Pradesh.
              </p>

              <h2>14. Contact Us</h2>
              <p>
                For questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> apnagrowthmedia@gmail.com</li>
                <li><strong>Phone:</strong> +91 98778 30757 / +91 82186 97384</li>
                <li><strong>Address:</strong> Bijnor, Uttar Pradesh, India</li>
              </ul>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;