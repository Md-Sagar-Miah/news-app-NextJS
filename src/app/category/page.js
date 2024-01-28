

import PlainLayout from '@/components/master/PlainLayout'
import React from 'react'
import { Card, CardHeader, CardFooter, Image, } from "@nextui-org/react";
import Link from 'next/link';

export async function generateMetadata() {

    return {
        title: "Category Page",
        description: "news aplication with popuer ,search,latest and new secton",
        keywords: "News,Search,Populer,Latest,NeW"

    }
}

async function getData(id) {
    try {
        let data = (await (await fetch(`${process.env.HOST}/api/news/category?catId=${id}`)).json())['data'];
        if (data != undefined) {
            return data;

        } else {
            throw new Error;
        }
    } catch (error) {
        return [];
    }

}

const page = async ({ searchParams }) => {
    const id = searchParams.id
    const data = await getData(id);
    return (
        <PlainLayout>
            <div className='container mx-8 px-11 mt-5 '>
                <div className='grid grid-cols-3 gap-6 mt-10'>

                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='hover:scale-105 transition-all ease-in'>

                                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 border border-blue-700">
                                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                            <p className="text-tiny text-white uppercase font-bold">News</p>
                                        </CardHeader>
                                        <Image
                                            removeWrapper
                                            alt="Card example background"
                                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                            src={`${item['img3']}`}
                                        />
                                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                            <div>
                                                <h1 className="text-black text-2xl text-wrap">{item['title']}</h1>

                                            </div>
                                            <Link href={`/details?id=${item['id']}`} className=" border-2 border-blue-700 p-2 text-nowrap rounded-lg hover:bg-blue-700 hover:bg-opacity-70 hover:text-white" color="primary" radius="full" size="sm">
                                                Read more
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </PlainLayout>
    )
}

export default page
