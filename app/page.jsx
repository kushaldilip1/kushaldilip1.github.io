import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

//Importing Components
import Photo from "@/components/Photo";
import Social from "@/components/Social";



const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24 ml-[-1rem]">
          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-[1.2rem]">CompSci Graduate</span>
            <h1 className="h1 text-[48px] md:text-[72px] leading-[1.1] mb-6">
              Hello, I'm <br /> <span className="text-cyan-200">Kushal Dilip</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/60">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>

            {/* Btn and socials */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button className="btn uppercase flex items-center gap-2"
                      variant="outline">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 md:mb-0">
                <Social 
                containerStyles = "flex gap-6"
                iconStyles = "w-12 h-12 border border-none rounded-full flex justify-center items-center text-white text-black hover:bg-cyan-200 hover:text-black hover:transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <Photo className="order-1 md:order-none mb-8 md:mb-0" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;