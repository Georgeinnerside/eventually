import { eventTypes } from "@/components/data/eventData";
import EventCard from "./cards/EventCard";

const EventType = () => {
  return (
    <section className="bg-gray-200 p-6 sm:p-12 h-[50%] w-full">
      <div className="text-center max-w-7xl mx-auto mb-16 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Our Event Types
        </h1>
        <p className="text-gray-500">
          We specialize in a variety of events to suit every occasion
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {eventTypes.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </section>
  );
};

export default EventType;
