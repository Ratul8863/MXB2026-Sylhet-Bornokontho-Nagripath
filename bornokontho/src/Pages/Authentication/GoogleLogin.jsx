import React from 'react'
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';

function GoogleLogin() {
    const {googleSignIn} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleClick =() =>{
        googleSignIn().then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);        
              const userData = {
                email : loggedUser.email,
                name : loggedUser.displayName,
                creationTime : loggedUser?.metadata?.creationTime,
                lastSignInTime : loggedUser?.metadata?.lastSignInTime
            }
               fetch("https://bornokontho-server.vercel.app/users", {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(userData)
                }).then(res=> res.json()).then(datas => console.log(datas));

                 navigate(from, {replace: true});
        }).catch(error=>{
            console.log(error.message);
            })
    }
  return (
    <div> 
        
         <button onClick={handleClick} className="btn btn-outline w-full flex items-center gap-2">
            <FcGoogle size={20} />
            Continue with Google
          </button>
          
           </div>
  )
}

export default GoogleLogin