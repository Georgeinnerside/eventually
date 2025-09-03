import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-800 via-purple-800 to-pink-950 bg-clip-text text-transparent mb-4">
            EvenTually
          </h3>
          <p className="text-sm mb-4">
            Creating unforgettable moments at our premier event center. Where
            dreams come to life and memories are made.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Events</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Wedding Receptions</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Conferences</li>
            <li>Social Gatherings</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" />
              123 Grand Avenue, City Center, NY 10001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-500" />
              info@grandeurevents.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © 2024 Grandeur Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
