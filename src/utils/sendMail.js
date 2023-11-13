import {Navigate} from "react-router-dom";
import CarConfig from "../config/CarConfig";

const sendMail = async () => {
    const getCarStorage = JSON.parse(localStorage.getItem('car'))
    const basicStorage = JSON.parse(localStorage.getItem('basicInformation'))
    const detailsInformation = JSON.parse(localStorage.getItem('detailsInformation'))
    const fuelType = CarConfig.fuel_type
    const transmission  = CarConfig.transmission
    const drive  = CarConfig.drive
    let data = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        make: '',
        model: '',
        drive: '',
        transmission: '',
        year: '',
        placeService: '',
        typeService: '',
        services: [],
    }
    if(getCarStorage !== null && basicStorage !== null){
        data = {
            name: basicStorage.name,
            surname: basicStorage.surname,
            phone: basicStorage.phone,
            email: basicStorage.email,
            make: getCarStorage.make,
            model: getCarStorage.model,
            drive: drive[getCarStorage.drive],
            transmission: transmission[getCarStorage.transmission],
            year: getCarStorage.year,
            fuel_type: fuelType[getCarStorage.fuel_type],
            placeService: detailsInformation.place,
            address: detailsInformation.address,
            typeService: detailsInformation.service,
            services: detailsInformation.mechanic,
            ownItems: detailsInformation.ownItems
        }
    }
    const formData = new FormData
    for(const prop in data){
        formData.append(prop, data[prop])
    }
    const request = await fetch('https://mechamosta.pl/contact.php', {
        method: 'POST',
        body: formData
    });
    return request.status;
}

export default sendMail;