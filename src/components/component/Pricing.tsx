 import PricingCard from "./cards/PricingCard";
import { pricingPlans } from "../data/pricingData";


const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Event Packages</h2>
        <p className="mt-2 text-gray-600">
          Choose the perfect package for your event size and budget
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((price) => {
          return  <PricingCard key={price.id} price={price} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
