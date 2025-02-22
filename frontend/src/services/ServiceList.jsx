import ServicesCard from "./ServicesCard";
import weatherImg from '../images/weather.png'
import guideImg from '../images/guide.png'
import customizationImg from '../images/customization.png'
import './service-card.css'
const ServiceList = () => {

    const serviceData = [
        {
            imgUrl : weatherImg,
            title : "Calculate Weather",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            imgUrl : guideImg,
            title : "Best Your Guide",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            imgUrl : customizationImg,
            title : "Customization",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ]

    return(
        <>
            {
                serviceData.map((item,index)=>{
                    return (
                        <div className="section2" key={index}>
                            <ServicesCard item= { item }/>
                        </div>
                    )
                })
            }
        </>
    );
};

export default ServiceList;