import Layout from "../../layout";
import Hero from './hero';
import Portofolio from "./portofolio";

const LayoutHomepage = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <Portofolio />
            </Layout>
        </div>
    )
}

export default LayoutHomepage;
