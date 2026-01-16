import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { Mail, Lock, UserPlus, ArrowRight } from "lucide-react";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createuser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userdata } = Object.fromEntries(formData.entries());

    createuser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        const userData = {
          email: loggedUser.email,
          ...userdata,
          creationTime: loggedUser?.metadata?.creationTime,
          lastSignInTime: loggedUser?.metadata?.lastSignInTime,
          role: "user", // Default role
        };

        fetch("https://bornokontho-server.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((datas) => console.log(datas));

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex bg-[#0f0e0c] text-[#f5f0e6] overflow-hidden">
      
      {/* --- LEFT SIDE: VISUAL PANEL (Hidden on Mobile) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-center px-20 bg-[#1c1a14] border-r border-[#c2a24a]/10"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <span className="text-[40rem] font-serif text-[#c2a24a] absolute -top-20 -left-20">স</span>
        </div>
        
        <div className="relative z-10">
          <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Join the Revival</span>
          <h1 className="text-6xl font-serif text-[#c2a24a] leading-tight mb-8">
            Create Your <br /> Digital Legacy
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md italic">
            "By joining Bornokontho, you contribute to the preservation of the Sylheti Nagri script for future generations."
          </p>
          
          <div className="mt-12 flex items-center gap-4 text-[#c2a24a]/60 text-sm font-bold tracking-widest uppercase">
            <div className="w-12 h-px bg-[#c2a24a]/30"></div>
            Nagri Path Community
          </div>
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: REGISTER FORM --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Background Letter */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <span className="text-[20rem] font-serif text-[#c2a24a]">ꠘ</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-4xl font-serif text-[#c2a24a] mb-2">Sign Up</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-black">Begin your journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2a24a]/70 ml-1">Full Name</label>
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#1c1a14] border border-[#c2a24a]/20 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:border-[#c2a24a] transition-all"
                />
                <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#c2a24a] transition-colors" size={18} />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2a24a]/70 ml-1">Email Address</label>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-[#1c1a14] border border-[#c2a24a]/20 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:border-[#c2a24a] transition-all"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#c2a24a] transition-colors" size={18} />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2a24a]/70 ml-1">Secure Password</label>
              <div className="relative group">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#1c1a14] border border-[#c2a24a]/20 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:border-[#c2a24a] transition-all"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#c2a24a] transition-colors" size={18} />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#c2a24a] text-black font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#c2a24a]/10 hover:bg-white transition-all"
            >
              Register Account <ArrowRight size={16} />
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-[#c2a24a]/10"></div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Or Continue With</span>
              <div className="h-px flex-1 bg-[#c2a24a]/10"></div>
            </div>

            {/* Google Login Component */}
            <GoogleLogin />

            {/* Footer Link */}
            <p className="text-center text-sm text-gray-500 font-light mt-8">
              Already a member?{" "}
              <Link to="/login" className="text-[#c2a24a] font-bold hover:underline underline-offset-4">
                Log In Here
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}