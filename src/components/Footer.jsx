import React from 'react'
import{
    FaFacebookSquare,
    FaGithubSquare,
    FaWhatsappSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id='footer'>
      <div>
        <h1 className='w-full text-3xl font-bold text-blue-500'>MntLabs</h1>
        <p className='py-4'>MNT Labs is a small indie tech studio building practical tools for everyday life. From managing your finances to tracking the weather and following live scores, we create apps that are simple, fast, and built with purpose</p>
        <div className='flex justify-between md:w-[75%] my-6'>
           <a href="https://www.facebook.com/profile.php?id=61578642025847" target='blank_'> <FaFacebookSquare size={30}/></a>
            <a href="https:wa.me/26879727921" target="_blank"><FaWhatsappSquare size={30}/></a>
            <a href="https://github.com/Mohx953" target='blank_'><FaGithubSquare size={30}/></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>MntLabs Softwares</h6>
            <ul>
                <li className='py-2 text-sm'><a href="https://unibudget.ct.ws" target='blank_'>UniBudget</a></li>
                <li className='py-2 text-sm'><a href="https://mohx953.github.io/mntlabs-weathora/" target='blank_'>Weathora</a></li>
                <li className='py-2 text-sm'><a href="https://mohx953.github.io/mntlabs-livescore/live-score.html">MntLiveScore</a></li>
                {/* <li></li> */}
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'><a href="https://mntlabs-mahamule.wuaze.com/" target='blank_'>Developer Site</a></li>
                
                {/* <li></li> */}
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'><a href="https://mntlabs-mahamule.wuaze.com/" target='blank_'>About</a></li>
                <li className='py-2 text-sm'><a href="https://mntlabs-mahamule.wuaze.com/" target='blank_'>Contact</a></li>
                
                {/* <li></li> */}
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
