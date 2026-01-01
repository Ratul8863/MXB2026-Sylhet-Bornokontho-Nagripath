import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";


export default function Login() {
const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {signInUser} = useAuth();

    const handleSubmit = (e) => { 
        e.preventDefault();

        // Handle form submission logic headers
        const form = e.target;
        const formData = new FormData(form);
        const {email,password,...userdata} = Object.fromEntries(formData.entries());

        console.log("Form Data Submitted: ", userdata);
        console.log("Form Data Submitted: ", form.email.value);
signInUser(email, password).then(result=>{
    const loggedUser = result.user;
    console.log(loggedUser);    
console.log(email);
    const userDatas = {
       email,
        lastSignInTime : loggedUser?.metadata?.lastSignInTime
    }

    fetch("https://bornokontho-server.vercel.app//users", {
    method : 'PATCH',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(userDatas)

    }).then(res=> res.json()).then(datas => console.log(datas));

    navigate(from, {replace: true});

}).catch(error=>{
    console.log(error.message);
    })
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl"
      >
        <div className="card-body">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-primary">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500">
            Sign in to continue
          </p>

          {/* Email */}
         <form action="" onSubmit={handleSubmit} className="">
             <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
                name="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
            />
          </div>

          {/* Login button */}
          <button className="btn btn-primary w-full mt-5">
            Log In
          </button>

          {/* Divider */}
          <div className="divider text-sm">OR</div>

          {/* Google login */}
        
<GoogleLogin></GoogleLogin>
          {/* Footer */}
          <p className="text-center text-sm mt-4 text-gray-500">
            Don’t have an account?{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
         </form>
        </div>
      </motion.div>
    </div>
  );
}
