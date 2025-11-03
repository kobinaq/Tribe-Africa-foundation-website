import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { getContent } from '@/lib/data';

export default function Footer() {
  const content = getContent();
  const { footer, contact } = content;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Tribe Africa Foundation"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.link}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <FaPhone className="text-primary-400" />
                <a href={`tel:${contact.info.phone}`} className="hover:text-primary-400">
                  {contact.info.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaWhatsapp className="text-primary-400" />
                <a href={`https://wa.me/${contact.info.whatsapp.replace(/\+/g, '')}`} className="hover:text-primary-400">
                  {contact.info.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaEnvelope className="text-primary-400" />
                <a href={`mailto:${contact.info.email}`} className="hover:text-primary-400">
                  {contact.info.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={footer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
