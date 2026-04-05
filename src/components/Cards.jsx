import React from 'react'
import Finance from '../assets/earning-calculation_17144099.png'
import Weathora from '../assets/weather_831268.png'
import Score from '../assets/smartphone_4768671.png'
import Movie from '../assets/video-player.png'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white' id='cards'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img src={Finance} alt="UniBudget" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>UniBudget</h2>
                    <p className='text-center text-4xl font-bold'>Manage Your Money</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>Track Expenses</p>
                        <p className='py-2 border-b mx-8'>Set Goals</p>
                        <p className='py-2 border-b mx-8'>Check Local deals</p>
                    </div>
                    <Show when="signed-out">
                        <button className='bg-green-500 w-[200px] rounded-md font-medium my-3 mx-auto px-6 py-3 text-white'>
                            <SignInButton />
                        </button>
                    </Show>
                    <Show when="signed-in">
                        <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'><a href="https://unibudget.ct.ws" target='_blank' rel='noreferrer'>Start Budgetting</a></button>
                    </Show>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 '>
                    <img src={Weathora} alt="UniBudget" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Weathora</h2>
                    <p className='text-center text-4xl font-bold'>Check weather</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>Check weather by city</p>
                        <p className='py-2 border-b mx-8'>Check live weather map</p>
                        <p className='py-2 border-b mx-8'>Stay ahead of the weather, every day</p>
                    </div>
                    <Show when="signed-out">
                        <button className='bg-blue-700 w-[200px] rounded-md font-medium my-3 mx-auto px-6 py-3 text-white'>
                            <SignInButton />
                        </button>
                    </Show>
                    <Show when="signed-in">
                        <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'><a href="https://mohx953.github.io/mntlabs-weathora/" target='_blank' rel='noreferrer'>Check Weather</a></button>
                    </Show>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img src={Score} alt="UniBudget" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Mnt-LiveScore</h2>
                    <p className='text-center text-4xl font-bold'>Never miss a moment.</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>Live Match Scores</p>
                        <p className='py-2 border-b mx-8'>Real-Time Updates</p>
                        <p className='py-2 border-b mx-8'>Multiple Leagues</p>
                    </div>
                    <Show when="signed-out">
                        <button className='bg-red-700 w-[200px] rounded-md font-medium my-3 mx-auto px-6 py-3 text-white'>
                            <SignInButton />
                        </button>
                    </Show>
                    <Show when="signed-in">
                        <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'><a href="https://mohx953.github.io/mntlabs-livescore/live-score.html" target='_blank' rel='noreferrer'>View Live Scores</a></button>
                    </Show>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img src={Movie} alt="UniBudget" className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Mnt-Movies</h2>
                    <p className='text-center text-4xl font-bold'>Your watch starts here.</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>Movies & series discovery</p>
                        <p className='py-2 border-b mx-8'>Real-Time ratings</p>
                        <p className='py-2 border-b mx-8'>Trending across all genres</p>
                    </div>
                    <Show when="signed-out">
                        <button className='bg-blue-500 w-[200px] rounded-md font-medium my-3 mx-auto px-6 py-3 text-white'>
                            <SignInButton />
                        </button>

                    </Show>
                    <Show when="signed-in">
                        {/* <UserButton /> */}
                        <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'><a href="https://mntlabs-movies.vercel.app" target='_blank' rel='noreferrer'>Check Movies</a></button>
                    </Show>

                </div>
            </div>

        </div>
    )
}

export default Cards
