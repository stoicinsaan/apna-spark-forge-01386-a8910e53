import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
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
                Refund & 7-Day Trial Policy
              </h1>
              <p className="text-center text-sm mb-8">
                <strong>Last Updated:</strong> January 15, 2026
                <br />
                <strong>Effective Date:</strong> January 15, 2026
              </p>

              <h2>1. Our Commitment</h2>
              <p>
                At Apna Growth Media, we are committed to delivering exceptional digital marketing 
                services that drive real results for your business. We understand that choosing a 
                marketing partner is a significant decision, which is why we offer a transparent 
                refund policy and a 7-day trial period to ensure your complete satisfaction.
              </p>

              <h2>2. 7-Day Free Trial</h2>
              <h3>a. Trial Overview</h3>
              <p>
                We offer a <strong>7-day free trial</strong> on select service packages to help you 
                experience our work quality before committing. This allows you to evaluate our 
                approach, communication, and initial deliverables risk-free.
              </p>
              
              <h3>b. What's Included in the Trial</h3>
              <ul>
                <li>Initial consultation and strategy discussion</li>
                <li>Preliminary audit of your current digital presence</li>
                <li>Sample content or strategy document (depending on service)</li>
                <li>Direct communication with your dedicated account manager</li>
                <li>Basic setup and onboarding for the selected service</li>
              </ul>

              <h3>c. Trial Eligibility</h3>
              <ul>
                <li>Available for new clients only</li>
                <li>One trial per business/individual</li>
                <li>Applicable to monthly subscription packages</li>
                <li>Not applicable to one-time project services (websites, video production)</li>
              </ul>

              <h3>d. After the Trial</h3>
              <p>
                At the end of your 7-day trial, you may choose to:
              </p>
              <ul>
                <li><strong>Continue:</strong> Your subscription will begin, and the first payment will be processed.</li>
                <li><strong>Cancel:</strong> Simply notify us before the trial ends – no charges, no questions asked.</li>
                <li><strong>Upgrade/Modify:</strong> Switch to a different package that better suits your needs.</li>
              </ul>

              <h2>3. Refund Policy</h2>
              <h3>a. Monthly Subscription Services</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-border p-2 text-left">Timeframe</th>
                    <th className="border border-border p-2 text-left">Refund Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">Within 7 days of payment</td>
                    <td className="border border-border p-2">Full refund (100%)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">8-15 days after payment</td>
                    <td className="border border-border p-2">50% refund</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">After 15 days</td>
                    <td className="border border-border p-2">No refund (service credits may apply)</td>
                  </tr>
                </tbody>
              </table>

              <h3>b. Project-Based Services</h3>
              <p>For one-time projects (websites, branding, video production):</p>
              <ul>
                <li><strong>Before work begins:</strong> Full refund minus 10% administrative fee</li>
                <li><strong>Work in progress:</strong> Pro-rata refund based on completed milestones</li>
                <li><strong>After delivery:</strong> No refund (revisions available as per agreement)</li>
              </ul>

              <h3>c. Non-Refundable Items</h3>
              <p>The following are not eligible for refunds:</p>
              <ul>
                <li>Third-party costs (ad spend, software licenses, stock images)</li>
                <li>Domain registration and hosting fees</li>
                <li>Rush or priority service fees</li>
                <li>Custom development work already deployed</li>
                <li>Services completed as per approved specifications</li>
              </ul>

              <h2>4. How to Request a Refund</h2>
              <ol>
                <li>
                  <strong>Contact Us:</strong> Email us at <a href="mailto:apnagrowthmedia@gmail.com" className="text-primary">apnagrowthmedia@gmail.com</a> or 
                  call <a href="tel:9877830757" className="text-primary">+91 98778 30757</a>
                </li>
                <li>
                  <strong>Provide Details:</strong> Include your name, service purchased, payment date, and reason for refund request.
                </li>
                <li>
                  <strong>Review Process:</strong> We will review your request within 2-3 business days.
                </li>
                <li>
                  <strong>Resolution:</strong> If approved, refunds will be processed within 7-10 business days to the original payment method.
                </li>
              </ol>

              <h2>5. Service Guarantees</h2>
              <p>While marketing results cannot be guaranteed, we commit to:</p>
              <ul>
                <li><strong>Quality Assurance:</strong> Professional, high-quality deliverables</li>
                <li><strong>Timely Delivery:</strong> Meeting agreed-upon deadlines</li>
                <li><strong>Transparent Reporting:</strong> Regular performance reports and updates</li>
                <li><strong>Responsive Support:</strong> Quick response to queries and concerns</li>
                <li><strong>Revision Rounds:</strong> Multiple revision opportunities as per package</li>
              </ul>

              <h2>6. Dispute Resolution</h2>
              <p>
                If you are unsatisfied with a refund decision, you may escalate the matter by:
              </p>
              <ul>
                <li>Requesting a review from our senior management</li>
                <li>Providing additional documentation supporting your claim</li>
                <li>Suggesting an alternative resolution (service credits, extended support)</li>
              </ul>
              <p>
                We are committed to resolving all disputes fairly and maintaining positive 
                relationships with our clients.
              </p>

              <h2>7. Cancellation Policy</h2>
              <h3>a. Monthly Services</h3>
              <ul>
                <li>Cancel anytime with 15 days written notice before the next billing cycle</li>
                <li>Services continue until the end of the paid period</li>
                <li>No long-term contracts – you're never locked in</li>
              </ul>

              <h3>b. Project Services</h3>
              <ul>
                <li>Cancellation before project start: Full refund minus administrative fee</li>
                <li>Cancellation during project: Payment for completed work required</li>
                <li>All materials created become available upon payment settlement</li>
              </ul>

              <h2>8. Contact Information</h2>
              <p>
                For any questions regarding this policy or to initiate a refund request:
              </p>
              <ul>
                <li><strong>Email:</strong> apnagrowthmedia@gmail.com</li>
                <li><strong>Phone:</strong> +91 98778 30757 / +91 82186 97384</li>
                <li><strong>WhatsApp:</strong> +91 98778 30757</li>
                <li><strong>Address:</strong> Bijnor, Uttar Pradesh, India</li>
              </ul>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
                <h3 className="text-primary-foreground mt-0">Our Promise</h3>
                <p className="mb-0">
                  We believe in building long-term partnerships based on trust and results. 
                  If you're ever unsatisfied with our services, we'll work with you to make it right. 
                  Your success is our success.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy;