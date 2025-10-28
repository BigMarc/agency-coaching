import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-block text-primary hover:underline mb-8">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                TGN Media LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Contact Information</h2>
              <p>
                <strong>TGN Media LLC</strong><br />
                1309 Coffeen Avenue STE 1200<br />
                Sheridan Wyoming 82801<br />
                United States of America<br />
                Email: <a href="mailto:info@tgn-media.com" className="text-primary hover:underline">info@tgn-media.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information We Collect</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Personal Information</h3>
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Register for a consultation or strategy call</li>
                <li>Contact us via email or through our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Use our services or participate in our programs</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data and pages visited</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain our services</li>
                <li>Schedule and conduct consultation calls</li>
                <li>Send you marketing and promotional communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Disclosure of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service providers and business partners who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business successors in the event of a merger or acquisition</li>
              </ul>
              <p className="mt-2">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at <a href="mailto:info@tgn-media.com" className="text-primary hover:underline">info@tgn-media.com</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
