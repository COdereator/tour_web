
import './service-card.css'

const ServicesCard = ({item}) =>{

    const {imgUrl , title , desc } = item;

    return(
        <div className='service_item'>
            <div className="service_img">
                <img src={imgUrl} height={30} width={30} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};
    
export default ServicesCard;