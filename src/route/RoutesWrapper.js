import {Routes, Route} from 'react-router-dom';
import Layout from "../components/Layout";
import Home from "../components/home/Home";
import AboutUs from "../components/about-us/AboutUs";
import Service from "../components/service/Service";
import ChooseService from "../components/service/ChooseService";
import Contact from "../components/contact/Contact";
import SendStatus from "../components/contact/SendStatus";
import NoMatch from '../components/no-match/NoMatch';
import Gallery from '../components/gallery/Gallery';
const RoutesWrapper = () => {

    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="o-nas" element={<AboutUs />} />
                <Route path="uslugi" element={<Service />} />
                <Route path="uslugi/:id" element={<ChooseService />} />
                <Route path="kontakt" element={<Contact />} />
                <Route path="kontakt/:id" element={<SendStatus />} />
                <Route path="galeria" element={<Gallery />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )

}
export default RoutesWrapper