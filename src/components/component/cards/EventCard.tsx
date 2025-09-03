import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type eventTypeProps = {
  id: number;
  type: string;
  description: string;
  image: string;
};

const EventCard = ({ event }: { event: eventTypeProps }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0">
      {/* Image with fixed aspect ratio */}
      <div className="w-full p-0">
        <div className="w-full aspect-[4/3]">
          {" "}
          <img
            src={event.image}
            alt={event.type}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex flex-col flex-grow items-start gap-2 py-4 px-6 text-left">
        <CardTitle className="text-xl font-bold text-gray-800 p-1">
          {event.type}
        </CardTitle>
        <CardDescription className="text-gray-700 line-clamp-3 p-5">
          {event.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex justify-center">
        <Button className="w-32 text-white font-bold bg-pink-950 p-3 rounded-md hover:bg-pink-800 cursor-pointer">
          Book Now
        </Button>
      </CardFooter>
    </div>
  );
};

export default EventCard;
