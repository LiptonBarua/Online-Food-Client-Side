import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const AddProductCard = () => {
  const { users, serviceLoad, userProfile, cardRefetch} = useContext(ShareContext);
  console.log(userProfile[0]?.image)
  const { user } = useContext(AuthContext);


  const date = new Date()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const details = form.details.value;
    const price = parseInt(form.price.value);
    const img = form.img.value;
    const userName = user?.displayName

    const service = {
      title,
      details,
      price,
      img,
      date,
      phote: userProfile[0]?.image,
      email: user?.email,
      userName
    };


    fetch("https://assiament-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        alert('Product Add Successfully')
        serviceLoad();
        cardRefetch()
        form.reset();
      })

  }
  return (
    <div>
      <section className="py-10">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="flex it lg:col-span-2 hidden md:flex">
              <div className="flex items-center">
                <iframe width="500" height="350" src="https://www.youtube.com/embed/OZzoAw9QHXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>


            </div>

            <div className="rounded-lg p-4 lg:col-span-3 lg:p-12">
              <h1 className='mb-5 font-bold text-2xl'>Add Product</h1>
              <form onSubmit={handleSubmit} action="" className="space-y-4">
                <div>
                  <label className="sr-only text" for="name">Name</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Photo URL"
                    type="text"
                    name="img"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">Email</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="Product Name"
                      type="text"
                      name="title"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="Price"
                      type="number"
                      name="price"
                    />
                  </div>
                </div>



                <div>
                  <label className="sr-only" for="message">Message</label>

                  <textarea
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Text..."
                    rows="8"
                    name='details'
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button type="submit" className="inline-block w-full rounded-lg bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] px-5 py-3 font-medium text-white sm:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AddProductCard;