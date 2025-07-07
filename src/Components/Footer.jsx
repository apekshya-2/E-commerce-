import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            
            E-<span className="text-red-500">Shop</span>

            <h3 className="text-lg font-semibold mb-2 text-white">Powering Your World with the Best in Electronics.</h3>
            <h3 className="text-lg font-semibold mb-2 text-white">Balkot,Bhaktapur,Napal</h3>
             <h3 className="text-lg font-semibold mb-2 text-white">Email: e.shop@gmail.com</h3>
            <h3 className="text-lg font-semibold mb-2 text-white">Phone: +977 9843520317</h3>
            

          </h2>
        </div>
        <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Customer Service</h3>
          
          <a href="#" className="block hover:text-white transition">Contact Us</a>
          <a href="#" className="block hover:text-white transition">Shipping & Returns</a>
          <a href="#" className="block hover:text-white transition">FAQs</a>
          <a href="#" className="block hover:text-white transition">Order Tracking</a>
                    <a href="#" className="block hover:text-white transition">Size Guide</a>

        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/" className="hover:text-white transition-colors duration-200">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-white transition-colors duration-200">
              <FaLinkedin size={22} />
            </a>
            <a href="https://instagram.com/" className="hover:text-white transition-colors duration-200">
              <FaInstagram size={22} />
            </a>
            <a href="https://github.com/" className="hover:text-white transition-colors duration-200">
              <FaGithub size={22} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Legal</h3>
          <a href="#" className="block hover:text-white transition">Terms of Service</a>
          <a href="#" className="block hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
      <hr className="border-gray-600 my-6" />
      <p className="text-center text-sm text-gray-400 pb-4">
        &copy; 2024 E-Shop. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
