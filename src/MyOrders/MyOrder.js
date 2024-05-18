import React from 'react'

export default function MyOrder() {
  return (
    <div>
        <section class="top-headers max-w-[100%] mx-28  xsm:mx-0">
                    <div class="top-headers  py-7">
                        <h1 class="hidden sm:block text-lg "><b>My Orders</b></h1>
                        <p class="hidden sm:block">View your order History or check the status of a recent order.</p>
                    </div>
                    <div className='laced-orders text-center'>
                        <h3>You haven't placed any orders yet.</h3>
                        <div className="Browsings text-center">
                            <a href="">Start Browsing</a>
                        </div>
                    </div>
                </section>
    </div>
  )
}
