import { questionData } from "@/components/data/questionData";
import Questioncard from "./cards/Questioncard";

const Questions = () => {
  return (
    <section className="bg-white p-6 sm:p-12  w-full">
      <div className="text-center max-w-7xl mx-auto mb-16 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Frequent Asked Questions
        </h1>
        <p className="text-gray-700">
          Get answers to common questions about our event center
        </p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        {questionData.map((data) => {
          return <Questioncard key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Questions;
