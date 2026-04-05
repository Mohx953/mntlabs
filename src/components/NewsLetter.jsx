import React from 'react'


const NewsLetter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Be the first to know when we drop</h1>
                    <p>drop your email and we'll handle the rest.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <form action="https://api.web3forms.com/submit" method="post">
                        <input type="hidden" name="access_key" value="f11ff583-7826-4ee9-82e0-967bfc319951"/>
                        <input type="email" name='email' placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white ml-4' >Notify Me</button>
                        </form>
                    </div>

                <p>No spam, ever. Unsubscribe anytime. Read our <span className='text-blue-500'>Privacy Policy</span></p>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter
