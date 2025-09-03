import { Button } from "@/components/ui/button";

const BookNow = () => {
  return (
    <section className="bg-pink-900 text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Plan Your Event?
      </h2>
      <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-100">
        Let us help you create an unforgettable experience. Book your
        consultation today and start planning your perfect event.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-white text-pink-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
          Book Now
        </Button>
        <Button
          variant="outline"
          className="border-2 border-white bg-pink-900 text-white px-6 py-3 rounded-full hover:bg-white hover:text-pink-900"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default BookNow;
