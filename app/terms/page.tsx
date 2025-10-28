import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-block text-primary hover:underline mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website and our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Company Information</h2>
              <p>
                These Terms of Service are governed by TGN Media LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              </p>
              <p className="mt-2">
                <strong>TGN Media LLC</strong><br />
                1309 Coffeen Avenue STE 1200<br />
                Sheridan Wyoming 82801<br />
                United States of America<br />
                Email: <a href="mailto:info@tgn-media.com" className="text-primary hover:underline">info@tgn-media.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Services Description</h2>
              <p>
                We provide consultation, strategy, and coaching services to help social media agencies scale their businesses using data-driven systems and proven frameworks. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Strategic agency scaling consultation sessions</li>
                <li>Data-driven system implementation</li>
                <li>Client acquisition and retention strategies</li>
                <li>Revenue optimization and pricing strategies</li>
                <li>Team management and operational systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Obligations</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not share confidential information with unauthorized parties</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing. We reserve the right to change our pricing at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Guarantee and Disclaimer</h2>
              <p>
                We offer a guarantee as outlined on our website: If you don't add at least $20,000 in monthly recurring revenue within 90 days, we'll wire you $7,500 straight to your bank account. However, results may vary based on individual circumstances, effort, market conditions, and implementation of our systems. We do not guarantee specific financial outcomes beyond our stated guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All content, materials, and intellectual property on this website are owned by TGN Media LLC or its licensors. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Confidentiality</h2>
              <p>
                Any information shared during our consultations or as part of our services is confidential. We will not disclose your information to third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TGN Media LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless TGN Media LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to us or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of Wyoming, United States of America, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Sheridan, Wyoming.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>TGN Media LLC</strong><br />
                1309 Coffeen Avenue STE 1200<br />
                Sheridan Wyoming 82801<br />
                United States of America<br />
                Email: <a href="mailto:info@tgn-media.com" className="text-primary hover:underline">info@tgn-media.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
