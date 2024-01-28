import React from 'react'
import parse from 'html-react-parser';
import { Textarea, Button, User } from "@nextui-org/react";

async function getData(id) {
    let commentsData = (await (await fetch(`${process.env.HOST}/api/comments/news?postId=${id}`)).json())['data']
    return commentsData;
}

const handleSubmit = () => {
}

const NewsDetails = async ({ data }) => {
    const commentsData = await getData(data['id']);
    return (
        <div className='container mx-8 px-11 mt-5'>
            <h1 className=' text-4xl my-5 bg-red-600 p-3 font-bold '>{data['title']}</h1>
            <img className='my-5 w-full h-96' src={data['img1']} alt="Image" />
            <h2 className=' text-2xl font-semibold bg-yellow-200 p-3'>{data['short_des']}</h2>
            <p className=' text-pretty mt-8'>{parse(data['long_des'])}</p>

            <div className='grid grid-cols-3  gap-5 my-5'>
                <img className=' max-h-80 w-full' src={data['img2']} alt="Image" />
                <img className=' max-h-80 w-full' src={data['img3']} alt="Image" />
                <img className=' max-h-80 w-full' src={data['img4']} alt="Image" />
            </div>

            <div className=''>
                <label className=' font-semibold text-2xl py-5 '>Leave a comment hare:</label>
                <Textarea
                    placeholder="Enter your comment"
                    className=" w-full my-5"
                />
                <Button className=' w-96 gr items-center' onClick={handleSubmit()} color="danger">
                    Submit
                </Button>
            </div>


            {
                commentsData.map((item, index) => {
                    return (
                        <div key={index} className='border border-danger-500 p-8 mt-5 rounded-lg shadow-2xl'>
                            <User
                                name={`${item.users['firstName']} ${item.users['lastName']}`}
                                avatarProps={{
                                    src: "/user-profile.png"
                                }}
                            />


                            <p className=' p-5 rounded-sm'>{item['descriptions']}</p>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default NewsDetails
