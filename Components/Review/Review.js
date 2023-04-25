import { AuthContext } from "@/AuthProvider/AuthProvider";
import ReviewDetails from "./ReviewDatails";
import { useContext } from "react";
import { ShareContext } from "@/ShareProvider/ShareProvider";


const Review = () => {
    const {user} = useContext(AuthContext);
    const{review,  setReview}=useContext(ShareContext)

    console.log(review)

 

        const handleDelete=id=>{
          const procced = window.confirm('Are you sure, you want to cancel this order');
          if(procced){
           fetch(`https://assiament-server.vercel.app/myReview/${id}`,{
               method: 'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
               if(data.deletedCount){
                alert('deleted successfully');
                const remaining =review.filter(ods=>ods._id!==id);
               setReview(remaining);
               }
           })
          }
      }
    return (
<div className="py-6 sm:py-8 lg:py-24">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl xl:mb-12">Customer Reviews</h2>

    <div className="mb-4 flex items-center justify-between border-t border-b py-4">
      <div className="flex flex-col gap-0.5">
        <span className="block font-bold">Total</span>


        

        <span className="block text-sm text-gray-500">Bases on {review?.length} reviews</span>
      </div>

      <a href="#testimonail" className="inline-block rounded-lg border bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Write a review</a>
    </div>

<div className="gap-6">
{
  review.map(review=><ReviewDetails key={review._id} review={review} handleDelete={handleDelete}></ReviewDetails>)
}
</div>
  </div>
</div>
       );
};

export default Review;