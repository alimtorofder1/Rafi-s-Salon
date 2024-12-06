import '../../../App.css';
import banner from '../../../assets/file (4) 1.png'
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>

      
        <div className='flex'>
          <div className="pl-5 mt-36">
          <h2 className="text-4xl font-bold ">BEAUTY SALON <br />
          FOR EVERY MEN</h2>
          <p className="text-gray-600 mt-8">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br />laoreet maecenas. Feugiat </p>
          <div className='mt-8'>
          <button className="button w-48 h-10 text-white">Get an Appointment</button>
          </div>
          </div>
         <div className='mt-7  ml-72 pl-44'>
         <img src={banner} alt="" srcset="" />
         </div>
         </div>
         <AboutUs></AboutUs>
         <Service></Service>
        </div>
    );
};

export default Home;