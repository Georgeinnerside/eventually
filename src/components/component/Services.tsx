import React from "react";
import {
  Flower2,
  Music,
  UtensilsCrossed,
  Car,
  Cake,
  Camera,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const serviceCategory = [
  {
    id: 1,
    icon: <Flower2 />,
    service: "Event Decoration",
    description:
      "Professional designers transform our spaces to match your vision with stunning floral arrangements and decor.",
  },
  {
    id: 2,
    icon: <UtensilsCrossed />,
    service: "Premium Catering",
    description:
      "Award-winning chefs create customized menus featuring local ingredients and international cuisine options.",
  },
  {
    id: 3,
    icon: <Music />,
    service: "Audio/Visual Services",
    description:
      "State-of-the-art sound systems, lighting, and projection equipment for presentations and entertainment.",
  },
  {
    id: 4,
    icon: <Camera />,
    service: "Photography & Videography",
    description:
      "Capture every precious moment with our network of professional photographers and videographers.",
  },
  {
    id: 5,
    icon: <Car />,
    service: "Valet Parking",
    description:
      "Convenient valet service ensures your guests arrive and depart in style and comfort.",
  },
  {
    id: 6,
    icon: <Cake />,
    service: "Custom Cakes & Desserts",
    description:
      "Beautiful custom cakes and dessert stations created by our award-winning pastry chefs.",
  },
];

const Services = () => {
  return (
    <section className="bg-white p-6 sm:p-12 h-[50%] w-full">
      <div className="text-center max-w-7xl mx-auto mb-16 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Complete Event Services
        </h1>
        <p className="text-gray-700">
          From planning to execution, we provide everything you need for a
          perfect event
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {serviceCategory.map((s) => (
          <Card
            key={s.id}
            className="flex flex-col items-start p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <CardHeader className="flex items-start justify-start">
              <div className="text-pink-800 bg-pink-100 p-3 rounded-full mb-2">
                {React.cloneElement(
                  s.icon as React.ReactElement<{ className: string }>,
                  {
                    className: "h-8 w-8",
                  }
                )}
              </div>
            </CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              {s.service}
            </CardTitle>
            <CardDescription className="text-gray-700 text-left">
              {s.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
