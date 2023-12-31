import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../page/provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [confirms, setConfirms] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    
    const onSubmit = data =>{
        signIn(data.email,data.password)
        .then(result =>{
          const logUser = result.user;
          reset();
          toast('Login SuccessFull');
          navigate(from,{replace:true})
        })
        .error(error =>{
            toast.error(error.message)
        })
    }

    return (

        <div className="pt-60 mb-24">
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/QkHFkQR/seo-optimization-3d-render-cartoon-illustration-107791-16996-1.jpg" alt="" />
            </div>
            <div style={{ marginTop: '-800px', width: '600px',height:'700px' }} className="login absolute inset-x-0 flex items-center justify-center mx-auto pb-20 pt-10 px-20">
                <div>
                    <div className='ml-8'>
                        <h1 className='text-4xl font-bold'>Login Now!</h1>
                        <p className='text-xl'>You can login with you social account below</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input rounded-none  border border-gray-300 focus:border-rose-600 w-full"
                            />
                            {errors.name && <span className="text-red-600 text-start">required</span>}
                        </div>
                        <div className="form-control">
                          
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="email"
                                className="input input-bordered mt-5 rounded-none w-full"
                            />
                            {errors.email && <span className="text-red-600 text-start">required</span>}
                        </div>

                        <div className="form-control">
                           
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered mt-5  rounded-none w-full"
                            />
                            {errors.photoURL && (
                                <span className="text-red-600 text-start">required</span>
                            )}
                        </div>
                        <div className="form-control">
                            
                            <div className="flex items-center justify-between">
                                <input
                                    type={show ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered  mt-5 rounded-none w-full"
                                />
                                <span
                                    className="absolute  p-2 cursor-pointer mt-5"
                                    onClick={() => setShow(!show)}
                                    style={{ marginLeft: '500px' }}
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password?.type === "required" && (
                                <p className="text-red-600 text-start">required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one Uppercase one lower case, one number
                                    and one special character.
                                </p>
                            )}
                        </div>
                     
                        <div className="form-control mt-6 -mb-20">
                            <input style={{ width: '540px', }}
                                className="signUp btn text-white"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <div className="">
                        <p className="mt-14 ml-9">
                            An have an account! Please Sign Up
                            <Link to="/signup" className="hover:underline text-blue-500 ml-2">
                                SignUp
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;