import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { signInUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        const userDatas = {
          email,
          lastSignInTime: loggedUser?.metadata?.lastSignInTime
        }

        fetch("https://bornokontho-server.vercel.app/users", {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(userDatas)
        })
          .then(res => res.json())
          .then(datas => console.log(datas));

        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <div className="min-h-screen flex bg-[#0f0e0c] text-[#f5f0e6] overflow-hidden">
      
      {/* --- LEFT SIDE: VISUAL PANEL (Hidden on Mobile) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-center px-20 bg-[#1c1a14] border-r border-[#c2a24a]/10"
      >
        {/* Background Watermark Letter */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <span className="text-[40rem] font-serif text-[#c2a24a] absolute -top-20 -left-20 italic">ব</span>
        </div>
        
        <div className="relative z-10">
          <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Welcome Back</span>
          <h1 className="text-6xl font-serif text-[#c2a24a] leading-tight mb-8">
            Continue Your <br /> Learning Path
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md italic">
            "Every script is a silent symphony of history. Step back into the world of Syloti Nagri."
          </p>
          
          <div className="mt-12 flex items-center gap-4 text-[#c2a24a]/60 text-sm font-bold tracking-widest uppercase">
            <div className="w-12 h-px bg-[#c2a24a]/30"></div>
            Nagripath Archive
          </div>
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Watermark */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <span className="text-[20rem] font-serif text-[#c2a24a]">ব</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-4xl font-serif text-[#c2a24a] mb-2 text-shadow-lg">Login</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-black">Access your sanctuary</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2a24a]/70 ml-1">Email Address</label>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-[#1c1a14] border border-[#c2a24a]/20 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:border-[#c2a24a] transition-all placeholder:text-gray-700"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#c2a24a] transition-colors" size={18} />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2a24a]/70">Password</label>
                <Link to="#" className="text-[9px] font-black uppercase tracking-widest text-gray-600 hover:text-[#c2a24a]">Forgot?</Link>
              </div>
              <div className="relative group">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#1c1a14] border border-[#c2a24a]/20 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:border-[#c2a24a] transition-all placeholder:text-gray-700"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#c2a24a] transition-colors" size={18} />
              </div>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#c2a24a] text-black font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#c2a24a]/10 hover:bg-white transition-all mt-4"
            >
              Sign In <LogIn size={16} />
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-[#c2a24a]/10"></div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Or Entry With</span>
              <div className="h-px flex-1 bg-[#c2a24a]/10"></div>
            </div>

            {/* Google Login */}
            <GoogleLogin />

            {/* Register Link */}
            <p className="text-center text-sm text-gray-500 font-light mt-8">
              New to Nagripath?{" "}
              <Link to="/signin" className="text-[#c2a24a] font-bold hover:underline underline-offset-4 decoration-[1px]">
                Create Account <ArrowRight size={12} className="inline ml-1" />
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}