'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = ({ categories }) => {
    const [keyword, setKeyword] = useState("");



    return (
        <section className='py-2 shadow-xl pb-5'>
            <div className='container mx-8 xl:mx-auto max-w-6xl'>
                <div className='flex justify-between'>
                    <Link href={'/'}><div className=' font-extrabold text-4xl py-0'>
                        SA.<span className=' text-red-600 '>NEWS</span>
                    </div></Link>
                    <div className=' grid grid-flow-col  '>
                        <div className='px-3 py-2 mt-1 '>
                            <Link href='/' className='border-2 border-red-600 hover:bg-red-600 hover:text-white p-2 ms-1 rounded-md' >Login</Link>
                            <Link href='/' className='border-2 border-red-600 hover:bg-red-600 hover:text-white p-2 ms-1 rounded-md' >Register</Link>
                        </div>
                        <input onChange={(e) => { setKeyword(e.target.value) }} value={keyword} type="search" name="searc" id="searc" className='px-2 py-2 w-60 rounded-md border-2 border-red-600 active:ring-2' />
                        <Link href={keyword === "" ? ("/") : (`/search?keyword=${keyword}`)} className='border-2 border-red-600 hover:bg-red-600 hover:text-white p-2 ms-1 rounded-md' >Search</Link>
                    </div>
                </div>
                <div className='flex flex-nowrap justify-between pt-3'>
                    {

                        categories.map((item, index) => {
                            return (
                                <Link key={index} className={` border box-border text-sm font-semibold hover:text-red-600 hover:bg-white  px-5 py-2 `} href={`/category?id=${item['id']}`}>{item['name']}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )


}

export default Menu
