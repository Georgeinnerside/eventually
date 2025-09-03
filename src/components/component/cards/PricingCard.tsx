import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type priceTypeProps = {
  id: number;
  name: string;
  price: string;
  guests: string;
  features: string[];
  button: string;
  popular?: boolean;
};

const PricingCard = ({ price }: { price: priceTypeProps }) => {
  return (
    <Card
      key={price.name}
      className={`relative flex flex-col justify-between border ${
        price.popular ? "border-pink-900 shadow-lg relative" : "border-gray-200"
      }`}
    >
      {/* Popular Badge */}
      {price.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-900 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold">{price.name}</CardTitle>
        <p className="text-3xl font-bold text-pink-900">{price.price}</p>
        <CardDescription className="text-gray-600">
          {price.guests}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-3 text-gray-700 text-left">
          {price.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6">
        <Button className="w-full bg-pink-900 hover:bg-pink-800 text-white">
          {price.button}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
