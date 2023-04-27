import { AuthContext } from '@/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';


const Register = () => {
    const {user, createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmaii, setCreatedUserEmail] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router=useRouter()


    const date=new Date();


  
 const googleProvider =new GoogleAuthProvider()

    const handleGoogleSingUp = () => {
        googleSignIn(googleProvider)
            .then(result=>{
                const users=result.user;
                // saveUser(user?.displayName, user?.email);
                router.replace('/')
                alert('User Created Successfully')

               
            })
    }

    const handleSingUp = (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const uri = `https://api.imgbb.com/1/upload?expiration?=600&key=d0ee0f160648d3906c64599f51fb220b`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData)
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                           alert('User Created Successfully')
                           router.replace('/')
                            const userInfo = {
                                displayName: data.name,
                                email: data.email,
                                image: imageData.data.uri
                            }
                            console.log(userInfo)
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.email, imageData.data.url);
                                })

                                .catch((error) => console.error(error))

                        })
                        .catch(error=>{
                            setSignUpError(error.message)
                        })
                }


         

                const saveUser = (name, email, image) => {
                    const user = { name, email, image, date};
                    fetch('https://assiament-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
            
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setCreatedUserEmail(email);
                            console.log(data)
                        })
                }
            })
    }
    return (
        <section>
            <div className='py-24'>
                <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-md bg-gradient-to-r from-[#401a14] via-[#340505] to-[#cd450a] rounded-lg shadow-lg  lg:max-w-4xl">
                    <div className="hidden bg-no-repeat bg-cover pr-28 lg:block lg:w-1/2" style={{ backgroundImage: `url(https://media.istockphoto.com/id/533712416/photo/cheeseburger-with-drink-of-cola-and-french-fries-red-spotlight.jpg?s=612x612&w=0&k=20&c=L5CCSzIVNwMVocrdqeYhuJtEJhBQy_krZ9v29KNMaAQ=)` }}></div>

                    <div className="w-full px-6 md:px-8 lg:w-1/2">
                        <div className="w-full max-w-sm p-6 m-auto mx-auto ">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-12" src="https://i.ibb.co/wBWmdgV/Navy-Blue-Minimalist-Text-Logo-removebg-preview.png" alt="" />
                            </div>

                            <form onSubmit={handleSubmit(handleSingUp)} className="mt-6">


                                <div className="form-control w-full">
                                    <label for="username" className="block text-sm text-white dark:text-gray-200">Username</label>
                                    <input placeholder='' type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full" />
                                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                </div>

                                <div className="form-control w-full my-3">
                                <label for="email" className="block text-sm text-white dark:text-gray-200">Profile Photo</label>
                                    <input placeholder='' type="file"{...register("image", { required: "Image is required" })} className="input input-bordered w-full" />
                                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                                </div>

                                <div className="form-control w-full mt-3">
                                    <label for="email" className="block text-sm text-white dark:text-gray-200">Email</label>
                                    <input placeholder='' type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full mt-3">
                                    <label for="email" className="block text-sm text-white dark:text-gray-200">Password</label>
                                    <input placeholder='' type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full" />
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>

                                <div className="mt-6">
                                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#610b0b] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b  lg:w-1/5"></span>

                                <a href="#" className="text-xs text-center text-white uppercase dark:text-gray-400 hover:underline">
                                    or Sign Up with Social Media
                                </a>

                                <span className="w-1/5 border-b  lg:w-1/5"></span>
                            </div>

                            <div className="flex items-center mt-6 -mx-2">
                                <button onClick={handleGoogleSingUp} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-[#610b0b] rounded-lg hover:bg-[#440a0a] focus:bg-[#440a0a] focus:outline-none">
                                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>

                                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                                </button>

                                <a href="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>

                            <Link href='/Login'><p className="mt-8 text-sm font-light text-center text-[#bdb2b2]"> Already have an account? <span className="font-medium text-[#fe8443] hover:underline">Sign In</span></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;