import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Agency Scaling Pro</h3>
            <p className="text-sm leading-relaxed">
              Helping social media agencies scale from struggling startups to multi-million dollar businesses using data-driven systems.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-white transition">
                  Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>TGN Media LLC</p>
              <p>1309 Coffeen Avenue STE 1200</p>
              <p>Sheridan Wyoming 82801</p>
              <p>United States of America</p>
              <p className="mt-3">
                <a href="mailto:info@tgn-media.com" className="hover:text-white transition">
                  info@tgn-media.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {currentYear} TGN Media LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
