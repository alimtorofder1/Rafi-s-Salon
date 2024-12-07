
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
          {
            services.map(item => <ServiceCart key={item._id} item={item}></ServiceCart>)
          }
        </div>
    );
};

export default ServiceList;