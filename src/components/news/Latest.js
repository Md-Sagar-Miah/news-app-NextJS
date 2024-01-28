import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';

const Latest = (props) => {
    const { Latest } = props;


    return (
        <div className='container mx-8 px-11 '>
            <h1 className=' py-2 block font-semibold text-red-600 text-4xl border-b-2 border-red-600 '>Latest</h1>

            <div className=" py-2 gap-4 grid grid-cols-12">

                {
                    Latest.map((item, keyword) => {
                        return (
                            <Card key={item} className="shadow-xl col-span-12 sm:col-span-4 h-[300px] border hover:border-2 border-red-600 ">
                                <CardHeader className=" bg-black bg-opacity-60 absolute z-10 top-1 flex-col !items-start">
                                    <Link href={`/details?id=${item['id']}`}><h4 className="text-red-500 font-medium text-3xl hover:text-white">{item['title']}</h4></Link>

                                    <p className="text-tiny text-orange-500 uppercase font-bold">{item['short_des']}</p>

                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src={item['img3']}
                                />

                            </Card>
                        )
                    })
                }

            </div>

        </div>
    )



}

export default Latest
