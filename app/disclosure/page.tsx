import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-block text-primary hover:underline mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 mb-8">Disclosure & Disclaimer</h1>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Earnings Disclaimer</h2>
              <p className="font-semibold text-lg mb-2">
                Individual results may vary. Any statements made on our website, in marketing materials, or during consultations regarding income, revenue, or success are based on individual results and are not guaranteed.
              </p>
              <p className="mt-2">
                The testimonials and examples presented on our website are exceptional results and do not represent typical results. Past performance is not indicative of future results. Your success depends on your individual effort, business experience, resources, market conditions, and other factors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Guarantee of Results</h2>
              <p>
                While we provide strategic guidance, tools, and support to help you achieve your goals, we cannot and do not guarantee that you will achieve any specific results from the use of our services. Success in business requires hard work, dedication, and the ability to adapt to changing market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Testimonials Disclaimer</h2>
              <p>
                The testimonials, reviews, and success stories on our website are provided by real agency owners and reflect their individual experiences with our agency scaling systems. These testimonials are not necessarily representative of all clients and do not guarantee similar results for others.
              </p>
              <p className="mt-2">
                We have not independently verified all claims made in testimonials. Results may vary based on individual circumstances, effort, market conditions, and other factors specific to each agency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Our Guarantee</h2>
              <p>
                Our money-back guarantee is subject to specific terms and conditions as outlined on our website. To qualify for the guarantee (if you don't add at least $20,000 in monthly recurring revenue within 90 days, we'll wire you $7,500), clients must:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Follow our agency scaling program guidelines and implement the data-driven systems provided</li>
                <li>Complete all required steps and deliverables within the specified timeframe</li>
                <li>Provide documented proof of implementation efforts and revenue tracking</li>
                <li>Meet all other conditions specified in the service agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Investment & Risk</h2>
              <p>
                Any investment in our services involves risk. There is no assurance that you will earn any money or achieve any particular level of success. You should only invest money that you can afford to lose. We strongly recommend consulting with a qualified financial advisor before making any business or investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Affiliate & Partnership Disclosure</h2>
              <p>
                We may have affiliate relationships with companies whose products or services we recommend. If you purchase products or services through our affiliate links, we may receive compensation. This does not affect the price you pay and helps us continue providing valuable content and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Professional Advice</h2>
              <p>
                The information provided on our website and through our services is for educational and informational purposes only. It does not constitute professional financial, legal, tax, or accounting advice. We recommend consulting with qualified professionals in these fields before making important business or financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. FTC Compliance</h2>
              <p>
                In accordance with Federal Trade Commission (FTC) guidelines, we disclose that:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>We may receive compensation from partners mentioned on our website</li>
                <li>Testimonials reflect individual experiences and may not be typical</li>
                <li>Any material connection between us and affiliate partners is disclosed</li>
                <li>All claims made about earnings or results are based on individual experiences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. No Legal Partnership</h2>
              <p>
                Nothing in our services creates a legal partnership, joint venture, employment, or agency relationship between you and TGN Media LLC. You are an independent contractor and are solely responsible for your business decisions and results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TGN Media LLC, its officers, directors, employees, and agents shall not be liable for any damages arising out of or related to your use of our services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Loss of revenue, profits, or business opportunities</li>
                <li>Business interruption or loss of data</li>
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Any failure to achieve expected results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Forward-Looking Statements</h2>
              <p>
                Statements on our website about potential earnings, market opportunities, or future results are forward-looking statements. These statements are based on assumptions and are subject to risks, uncertainties, and other factors that could cause actual results to differ materially.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to Disclosure</h2>
              <p>
                We reserve the right to update this Disclosure at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated Disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about this Disclosure, please contact us at:
              </p>
              <p className="mt-2">
                <strong>TGN Media LLC</strong><br />
                1309 Coffeen Avenue STE 1200<br />
                Sheridan Wyoming 82801<br />
                United States of America<br />
                Email: <a href="mailto:info@tgn-media.com" className="text-primary hover:underline">info@tgn-media.com</a>
              </p>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">Important Notice:</p>
              <p className="text-gray-700">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Disclosure. If you do not agree with any part of this Disclosure, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
