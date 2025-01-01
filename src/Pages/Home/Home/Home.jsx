import '../../../App.css';
import banner from '../../../assets/file (4) 1.png'
import AboutUs from '../AboutUs/AboutUs';
import ServiceList from '../ServiceList/ServiceList'






const Home = () => {
    return (
        <div>
        <div className='flex grid grid-cols-1 md:grid-cols-2  gap-4 place-content-between h-48 '>
          <div className="pl-5 mt-36 ">
          <h2 className="text-4xl font-bold ">BEAUTY SALON <br />
          FOR EVERY MEN</h2>
          <p className="text-gray-600 mt-8">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br />laoreet maecenas. Feugiat </p>
          <div className='mt-8'>
          <button className="button w-48 h-10 text-white">Get an Appointment</button>
          <div className='md:ml-64  w-full'>
         <img src={banner} alt="" srcset="" />
         </div>
          </div>
          </div>
     
         </div>
         <AboutUs></AboutUs>
         <ServiceList></ServiceList>
        </div>
    );
};

export default Home;