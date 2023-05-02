import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const MyProfileModal = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const{user}=useContext(AuthContext);
    const{profileFetch}=useContext(ShareContext);

    const handleProfile=(data)=>{
     const image=data?.image[0];

     const formData=new FormData();
      formData.append('image', image)
      const uri = `https://api.imgbb.com/1/upload?expiration?=600&key=d0ee0f160648d3906c64599f51fb220b`
       fetch(uri, {
        method: 'POST',
        body: formData
       })
       .then(res=>res.json())
       .then(imageData=>{
        if(imageData.success){
            const editProfile={
                name:data?.username,
                email:data?.email,
                image:imageData.data.url,
                position:data?.position,
                education:data?.education
            }
            fetch(`https://assiament-server.vercel.app/profile?email=${user?.email}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(editProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('profile edit successfully')
                profileFetch()
                reset()
               
            })
        }
       })
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit</h3>
                    <form onSubmit={handleSubmit(handleProfile)} action="">
                        <div className="form-control w-full my-4">
                           
                            <input placeholder='Username' type="text" {...register("username", { required: "Name is required" })} className="input input-bordered w-full" />
                            {errors.username && <p className='text-red-600'>{errors.username?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                           
                            <input placeholder='' type="file" {...register("image", { required: "Image is required" })} className="input input-bordered w-full" />
                            {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                        <div className="form-control w-full my-4">
                           
                            <input placeholder='Email Id' type="email" defaultValue={user?.email} readOnly {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                           
                            <input placeholder='Position' type="text" {...register("position", { required: "Position is required" })} className="input input-bordered w-full" />
                            {errors.position && <p className='text-red-600'>{errors.position?.message}</p>}
                        </div>
                        <div className="form-control w-full my-4">
                           
                            <input placeholder='About' type="text" {...register("education", { required: "Education is required" })} className="input input-bordered w-full" />
                            {errors.education && <p className='text-red-600'>{errors.education?.message}</p>}
                        </div>
                       <div className='flex justify-center'>
                       {/* <button><label htmlFor="profile-modal" className="bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] btn btn-sm w-96">Submit</label></button> */}
                       <button type='submit' className="bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] text-white  dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black font-bold py-2 w-full"><label htmlFor="profile-modal">Submit</label></button>
                       </div>
                    </form>
              
                </div>
            </div>
        </div>
    );
};

export default MyProfileModal;