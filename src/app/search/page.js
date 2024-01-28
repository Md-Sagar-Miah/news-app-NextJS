import PlainLayout from '@/components/master/PlainLayout';
import React from 'react';
import NewsList from '@/components/news/NewsList'


export async function generateMetadata() {

    return {
        title: "News Search Page",
        description: "news aplication with popuer ,search,latest and new secton",
        keywords: "News,Search,Populer,Latest,NeW"

    }
}
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
