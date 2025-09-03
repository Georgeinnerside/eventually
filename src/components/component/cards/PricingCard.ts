// import {
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const PricingCard = () => {
//   return (
//     <Card
//       key={plan.name}
//       className={`flex flex-col justify-between border ${
//         plan.popular ? "border-pink-900 shadow-lg relative" : "border-gray-200"
//       }`}
//     >
//       {/* Popular Badge */}
//       {plan.popular && (
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-900 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
//           Most Popular
//         </div>
//       )}

//       <CardHeader className="text-center">
//         <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
//         <p className="text-3xl font-bold text-pink-900">{plan.price}</p>
//         <CardDescription className="text-gray-600">
//           {plan.guests}
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="flex-grow">
//         <ul className="space-y-3 text-gray-700 text-left">
//           {plan.features.map((feature, idx) => (
//             <li key={idx} className="flex items-center gap-2">
//               <span className="text-green-600">✔</span>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>

//       <CardFooter className="pt-6">
//         <Button className="w-full bg-pink-900 hover:bg-pink-800 text-white">
//           {plan.button}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default PricingCard;
