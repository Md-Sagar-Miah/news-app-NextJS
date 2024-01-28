
import Footer from "./Footer";
import Menu from "./Menu";
import { Toaster } from "react-hot-toast";

async function getData() {
    let socials = (await (await fetch(`${process.env.HOST}/api/socials`)).json())['data']
    let categories = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return { socials: socials, categories: categories }

}

const PlainLayout = async (props) => {
    const { socials, categories } = await getData()

    return (
        <div className="">
            <Menu categories={categories} />
            {props.children}
            <Footer socials={socials} />
            <Toaster position="bottom-center" />

        </div>
    );
};

export default PlainLayout
