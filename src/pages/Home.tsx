import Hero from "@/components/component/Hero";
import Reasons from "@/components/component/Reasons";
import Venues from "@/components/component/Venues";
import Services from "@/components/component/Services";
import EventType from "@/components/component/EventType";
import Pricing from "@/components/component/Pricing";
import Questions from "@/components/component/Questions";
import BookNow from "@/components/component/BookNow";

const Home = () => {
  return (
    <>
      <Hero />
      <Reasons />
      <Venues />
      <Services />
      <EventType />
      <Pricing />
      <Questions />
      <BookNow />
    </>
  );
};

export default Home;
