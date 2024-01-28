import PlainLayout from '@/components/master/PlainLayout';
import React from 'react';
import NewsList from '@/components/news/NewsList'

async function getData(keyword) {
    let data = (await (await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    return data;
}

const page = async (props) => {
    let keyword = props.searchParams['keyword'];
    const data = await getData(keyword);

    return (
        <PlainLayout>
            <NewsList data={data} />

        </PlainLayout>
    )
}

export default page
