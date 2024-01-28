import React from 'react'
import PlainLayout from '@/components/master/PlainLayout';
import NewsDetails from '@/components/news/NewsDetails';

async function getData(id) {
    try {
        let data = (await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json())['data'];
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
            <NewsDetails data={data} />
        </PlainLayout>
    )
}

export default page
