import Header from "./Header";
import WhyUs from "./why-us/WhyUs";
import Gallery from "../gallery/Gallery";
import Service from "./service/Service";
import {useEffect} from "react";
import ContactInformation from '../contact/ContactInformation';
import {Helmet} from "react-helmet";

const Home = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return(
        <>
            <Helmet>
                <title>Mechamosta - Mechanik Mobilny</title>
                <meta name="description" content="Mechanik Mobilny/Stacjonarny oferuje wiele usług na terenie Łodzi. Przyjedziemy pod twój domu i wykonamy usługi takie jak: wymiana klocków, wymiana oleju czy też polerowanie auta." />
            </Helmet>
            <Header />
            <WhyUs />
            <Service />
            <Gallery />
            <ContactInformation homepage={true} />
        </>
    )
}

export default Home;