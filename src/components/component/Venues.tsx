const halls = [
  {
    name: "Grand Ballroom",
    count: "Up to 500 guests",
    description:
      "Our main ballroom features soaring ceilings, crystal chandeliers, and a spacious dance floor perfect for large celebrations.",
    action: "Book This Venue",
    image: "/assets/main-hall.jpg",
  },
  {
    name: "Intimate Garden Room",
    count: "Up to 150 guests",
    description:
      "A cozy space with garden views and natural lighting, ideal for smaller gatherings and intimate celebrations.",
    action: "Book This Venue",
    image: "/assets/second-hall.jpg",
  },
  {
    name: "Executive Conference Center",
    count: "Up to 300 guests",
    description:
      "State-of-the-art audiovisual equipment and professional ambiance make this perfect for corporate events.",
    action: "Book This Venue",
    image: "/assets/conference-room.jpg",
  },
  {
    name: "Mini-hall",
    count: "Up to 200 guests",
    description:
      "State-of-the-art audiovisual equipment and professional ambiance make this perfect for corporate events.",
    action: "Book This Venue",
    image: "/assets/mini-hall.jpg",
  },
];

const Venues = () => {
  return (
    <section className="bg-gray-100 px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-gray-800 text-3xl font-bold">
          Our Stunning Venues
        </h1>
        <p className="text-gray-600 mt-2">
          Choose from our variety of elegant spaces, each designed to create the
          perfect atmosphere
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {halls.map((hall, index) => (
          <div
            key={hall.name}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 h-[400px] md:h-[300px]">
              <img
                src={hall.image}
                alt={hall.name}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-full rounded-none shadow-lg object-cover"
              />
            </div>

            <div className="text-center md:text-left w-full md:w-1/2">
              <h1 className="text-2xl font-bold">{hall.name}</h1>
              <p className="text-xl text-pink-800 font-medium mt-1">
                {hall.count}
              </p>
              <p>{hall.description}</p>
              <button className="text-[17px] mt-6 bg-pink-950 text-white p-4 py-2 rounded-md hover:bg-pink-800 transition duration-300">
                {hall.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venues;
