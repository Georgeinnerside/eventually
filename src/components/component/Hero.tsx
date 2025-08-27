import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import BackgroundImg from "@/assets/event-types/weddings.jpg";
const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ background: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex flex-col md:flex-row z-10 h-screen w-full items-center justify-evenly text-center px-18">
        <p className="text-white text-lg md:text-1xl lg:text-2xl leading-relaxed max-w-2xl">
          {" "}
          Experience unforgettable moments at our premier event center. From
          intimate gatherings to grand celebrations, we make every occasion
          extraordinary.
        </p>

        <div className="flex m-8 gap-6">
          <Link to="/gallery">
            <Button className="text-white bg-pink-950 w-32 h-16 rounded-full border border-white px-8 py-4 hover:bg-pink-900 ml-3 cursor-pointer">
              Gallery
            </Button>
          </Link>
          <Link to="/book">
            <Button className="text-white/90 bg-transparent border-white w-32 h-16  rounded-full px-8 py-4 hover:bg-white/10 cursor-pointer">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
