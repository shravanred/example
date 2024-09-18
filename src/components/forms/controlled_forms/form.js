import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react';

export default function Form() {
    const [username, setusername]=useState("");
    const [error, updateError]=useState(false);
    const [password, setPassword]=useState("");
    const [passerror, setpasserror]=useState(false);
    const [remember, setRemember]=useState("");
    const [serverError, setserverError]=useState(false);

    const usernameHandler=(event)=>{
    const inputusername=event.target.value;
    console.log(inputusername)
    setusername(inputusername)

    const userenteredvalue=(name)=>{
     let  isvalid=false
      if ((inputusername.length) >15){
        isvalid=false;
      }
      else{
        isvalid=true;
      }

     return isvalid; 
     }
      

    if (userenteredvalue(inputusername)){
      updateError(false)
    }
    else{
      updateError(true)
    }
   
    };

    const passwordHandler=(event)=>{
      const inputPassword=event.target.value;
       setPassword(inputPassword)

       const passwordvalidation=(passwd)=>{

        return passwd.length < 10? false:true;
       }

       if (passwordvalidation(inputPassword)){
        setpasserror(false)
       }
       else{
        setpasserror(true)
       }
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
            if (!error && !passerror){
              fetchData(username,password)
            }
    }
    const fetchData=(username,password)=>{
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            
            username: username,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
          }),
        })
        .then(res => res.json())
        .then((response)=>{console.log(response)
          if (response.message){
            setserverError(response.message)
          }
          else{
            setserverError(false)
          }
          });
    }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={username}
                  onChange={usernameHandler}
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {
                   error && <span>enter shorter email</span>
                  }
              
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={passwordHandler}
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {
                passerror && <span>password is length is short</span>
                  }
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  value={remember}
                  // onChange={}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
               
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
             
            </div>
                  
            {
              serverError && <span>{serverError}</span>
            } 
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
              

          </form>
        </div>
      </div>
    </>
  )
}