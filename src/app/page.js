import PlainLayout from "@/components/master/PlainLayout";
import Hero from "@/components/news/Hero";
import Latest from "@/components/news/Latest";
import Populer from "@/components/news/Populer";

async function getData() {
  let Slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json())['data']
  let Featured = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
  let Popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
  let Latest = (await (await fetch(`${process.env.HOST}/api/news/type?type=latest`)).json())['data']
  return { Slider: Slider, Featured: Featured, Popular: Popular, Latest: Latest }
}


export default async function Home() {
  const data = await getData();
  return (
    <PlainLayout>
      <Hero slider={data.Slider} />
      <Latest Latest={data.Latest} />
      <Populer Popular={data.Popular} />

    </PlainLayout>
  );
}
