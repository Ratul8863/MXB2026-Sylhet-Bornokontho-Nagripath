import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo/Logo";
import ScrollLink from "../../Custom/ScrollLink";

export default function Footer() {
  return (
    <footer className="bg-[#1c1a14] border-t border-[#3a3324] text-[#f5f0e6]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ================= Brand ================= */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
          <p className="text-sm text-[#cfc8b8] leading-relaxed">
            Preserving ancient letters, scripts, and linguistic heritage.
            Explore history, learn characters, and convert languages with ease.
          </p>
        </div>

        {/* ================= Quick Links ================= */}
        <div>
          <h3 className="font-serif text-lg text-[#c2a24a] mb-4 tracking-wide">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <ScrollLink to="/" className="hover:text-[#e0c46c] transition">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/show" className="hover:text-[#e0c46c] transition">
                Letters
              </ScrollLink>
            </li>
            <li>
             <ScrollLink to="/about" className="hover:text-[#e0c46c] transition">
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/converter" className="hover:text-[#e0c46c] transition">  
                Converter
              </ScrollLink>
            </li>
            <li>
             <ScrollLink to="/history" className="hover:text-[#e0c46c] transition">
                History
              </ScrollLink>
            </li>
            
           
          </ul>
        </div>

        {/* ================= Credits / Contact ================= */}
        <div>
          <h3 className="font-serif text-lg text-[#c2a24a] mb-4 tracking-wide">
            Credits
          </h3>
          <p className="text-sm text-[#cfc8b8]">
            Crafted with passion for language & history.
          </p>

          <p className="text-sm mt-3 text-[#cfc8b8]">
            © {new Date().getFullYear()} <span className="text-[#c2a24a]">Bornokontho</span>  
            <br />
            All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= Bottom Strip ================= */}
      <div className="text-center text-xs text-[#a79d86] py-4 border-t border-[#3a3324]">
       Website developed by Team Bornokontho
      </div>
    </footer>
  );
}
