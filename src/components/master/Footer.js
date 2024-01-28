import Link from 'next/link';
import React from 'react'

const Footer = (props) => {
    const socials = props.socials;
    return (
        <footer className=" bg-gray-900 ">
            <div>
                <div className='mt-8 py-8'>
                    <div className='flex space-x-5  justify-center	'>
                        <Link className=' w-16 h-16 hover:border-2 hover:rounded-xl hover:border-white ' href={`${socials[0]['facebook']}`}><img src="/facebook.png" alt="facebook" /></Link>
                        <Link className=' w-16 h-16 hover:border-2 hover:rounded-xl hover:border-white ' href={`${socials[0]['youtube']}`}><img src="/youtube.png" alt="youtube" /></Link>
                        <Link className=' w-16 h-16 hover:border-2 hover:rounded-xl hover:border-white ' href={`${socials[0]['twitter']}`}><img src="/twitter.png" alt="twitter" /></Link>
                        <Link className=' w-16 h-16 hover:border-2 hover:rounded-xl hover:border-white ' href={`${socials[0]['linkedin']}`}><img src="/linkedin.png" alt="linkedin" /></Link>
                    </div>
                    <div className=' text-white space-x-8 mt-4 text-center '>
                        <Link className='hover:text-red-600 font-semibold text-2xl' href={`/`}>Home</Link>
                        <Link className='hover:text-red-600 font-semibold text-2xl' href={`/`}>News</Link>
                        <Link className='hover:text-red-600 font-semibold text-2xl' href={`/`}>Contact Us</Link>
                        <Link className='hover:text-red-600 font-semibold text-2xl' href={`/`}>About Us</Link>
                        <Link className='hover:text-red-600 font-semibold text-2xl' href={`/`}>Our Team</Link>
                    </div>
                </div>
                <div className=' bg-black text-center text-white py-4'>
                    <p>Copyright &copy; : Developed by SAGAR</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
