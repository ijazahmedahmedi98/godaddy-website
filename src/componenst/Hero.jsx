import image13 from "../assets/Images/image 13.png";
import { FiSearch } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-10">

      {/* Image */}
      <img src={image13} alt="" className="w-full max-w-4xl object-cover" />

      {/* Text */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold max-w-3xl">
        Join 150,000+ solo business owners who use Podia to run their website,
        online store, and email marketing
      </h1>

      {/* Input + Button in ONE ROW */}
      <div className="w-full max-w-2xl border border-gray-400 rounded-lg px-3 py-2 flex items-center justify-between">

        {/* Input with icon */}
        <div className="flex items-center gap-2 w-full">
          <FiSearch className="text-gray-500" size={18} />
          <input
            type="search"
            placeholder="Type the domain you want"
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Button */}
        <button className="ml-4 bg-[#0A9396] text-white px-4 py-2 rounded-md">
          Search
        </button>

      </div>

    </section>
  );
};