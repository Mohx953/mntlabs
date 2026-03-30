import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {

    const [nav, setnav] = useState(false)
const handleNav = () =>{
    setnav(!nav)
}

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-blue-500' >MNTLABS</h1>
            <ul className='flex hidden md:flex'>
                <li className='p-4'><a href="#">HOME</a></li>
                <li  className='p-4'><a href="https://unibudget.ct.ws" target='_blank' rel='noreferrer'>UNIBUDGET</a></li>
                <li className='p-4'><a href="https://mohx953.github.io/mntlabs-weathora/" target='_blank' rel='noreferrer'>WEATHORA</a></li>
                <li className='p-4'><a href="https://mohx953.github.io/mntlabs-livescore/live-score.html" target='_blank' rel='noreferrer'>MNTLIVESCORE</a></li>
                <li className='p-4'><a href="https://mntlabs-movies.vercel.app" target='_blank' rel='noreferrer'>MNTMOVIES</a></li>
                <li className='p-4'><a href="#footer">ABOUT</a></li>
                <li className='p-4'><a href="https://mntlabs-mahamule.wuaze.com/" target='_blank' rel='noreferrer'>CONTACT</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                
            </div>
            <div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] lg:w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-500'}>
                    <h1 className='w-full text-3xl font-bold text-blue-500 m-4' >MNTLABS</h1>
                    <ul className=' uppercase p-4'>
                        <li className='p-4 border-b border-gray-500'><a href="#">HOME</a></li>
                        <li className='p-4 border-b border-gray-500'><a href="https://unibudget.ct.ws" target='_blank' rel='noreferrer'>UNIBUDGET</a></li>
                        <li className='p-4 border-b border-gray-500'><a href="https://mohx953.github.io/mntlabs-weathora/" target='_blank' rel='noreferrer'>WEATHORA</a></li>
                        <li className='p-4 border-b border-gray-500'><a href="https://mohx953.github.io/mntlabs-livescore/live-score.html" target='_blank' rel='noreferrer'>MNTLIVESCORE</a></li>
                        <li className='p-4 border-b border-gray-500'><a href="https://mntlabs-movies.vercel.app" target='_blank' rel='noreferrer'>MNTMOVIES</a></li>
                        <li className='p-4 border-b border-gray-500'><a href="https://mntlabs-mahamule.wuaze.com/" target='_blank' rel='noreferrer'>ABOUT</a></li>
                        <li className='p-4'><a href="https://mntlabs-mahamule.wuaze.com/" target='_blank' rel='noreferrer'>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
