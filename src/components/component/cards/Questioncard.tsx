import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type questionTypeProp = {
  id: number;
  question: string;
  answer: string;
};

const Questioncard = ({ data }: { data: questionTypeProp }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`data-${data.id}`}>
        <AccordionTrigger className="text-xl font-medium text-gray-900 cursor-pointer">
          {data.question}
        </AccordionTrigger>
        <AccordionContent className="text-lg text-gray-700 cursor-pointer">
          {data.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Questioncard;
