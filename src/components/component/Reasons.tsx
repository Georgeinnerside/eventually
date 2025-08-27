import React, { type ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar, House, HeadsetIcon } from "lucide-react";

interface Reason {
  id: number;
  icon: ReactNode;
  header: string;
  description: string;
}

const reasonContent: Reason[] = [
  {
    id: 1,
    icon: <Calendar />,
    header: " Expert Planning",
    description: `Our experienced team handles every detail to ensure your event runs flawlessly from start to finish.`,
  },
  {
    id: 2,
    icon: <House />,
    header: "Stunning Venues",
    description: `Beautiful, versatile spaces that can be customized to match your vision and accommodate any event size.`,
  },
  {
    id: 3,
    icon: <HeadsetIcon />,
    header: "24/7 Support",
    description: `Dedicated support team available around the clock to assist with any questions or concerns.`,
  },
];

const Reasons = () => {
  return (
    <section className="bg-white p-6 sm:p-12 h-[50%] w-full">
      <div className="text-center max-w-7xl mx-auto mb-16 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Why Choose Eventually?
        </h1>
        <p className="text-gray-700">
          We provide exceptional service and stunning venues to make your
          special day perfect
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasonContent.map((r) => (
          <Card className="flex flex-col items-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <div className="bg-pink-950 p-3 rounded-full mb-2">
                {React.cloneElement(
                  r.icon as React.ReactElement<{ className: string }>,
                  {
                    className: "h-8 w-8 text-white",
                  }
                )}
              </div>
            </CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              {r.header}
            </CardTitle>
            <CardDescription className="text-gray-700 text-center">
              {r.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
