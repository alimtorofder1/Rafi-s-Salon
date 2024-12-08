
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';


const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data); // ডেটা সেট করা হচ্ছে

      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

    return (
      <div>
        <div className='font-bold mt-28 w-full'>
            <h2 className="text-2xl text-color text-center">Our Awesome <span className='text-black'>Services</span></h2>
        </div>
    
        <div  className='grid grid-cols-2 md:grid-cols-3 mt-11'>
          {
            services.map(item => <ServiceCart key={item._id} item={item}></ServiceCart>)
          }
        </div>
        </div>
    );
};

export default ServiceList;