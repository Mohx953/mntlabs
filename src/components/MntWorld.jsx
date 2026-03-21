import React from 'react'
import Technology from '../assets/webtechexperts-social-media-5187243.png'

const MntWorld = () => {
    return (
        <div className='w-full bg-white py-16 px-4' id='mntworld'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Technology} alt="technology"className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-500 uppercase font-bold' >Everything you need in one place</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Budget smarter. Live better. Score bigger.</h1>
                    <p>We build simple tools that solve real problems — so you can focus on what matters.</p>
                    <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white'><a href="#cards">GetStarted</a></button>
                </div>

            </div>

        </div>
    )
}

export default MntWorld
