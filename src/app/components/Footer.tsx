import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-purple-700 py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center  space-x-6 text-2xl mb-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61555901770960"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://x.com/Zainab345690"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/zainabqureshi09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            <FaGithub />
          </Link>
          <Link
            href="mailto:zainab.cyber.dev@gmail.com"
            className="text-purple-700 hover:text-purple-500"
          >
            <FaEnvelope />
          </Link>
        </div>

        {/* Footer Content */}
        <div className="text-center text-sm font-medium mb-4">
          <p>Made by Zainab Ayaz❤️ using Next.js, Tailwind CSS and framer motion</p>
          <p className="mt-2">
            Feel free to reach out: {' '}
            <Link
              href="mailto:zainab.cyber.dev@gmail.com"
              className=" hover:text-red-800"
            >
             zainab.cyber.dev@gmail.com
            </Link>
          </p>
        </div>

        {/* Rights Reserved */}
        <div className="text-center text-sm font-light">
          <p>© {new Date().getFullYear()} Zainab Ayaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
