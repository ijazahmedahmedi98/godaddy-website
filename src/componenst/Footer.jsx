import footerBg from "../assets/Images/footerbg.png";

export const Footer = () => (
  <footer
    style={{ backgroundImage: `url(${footerBg})` }}
    className="text-white h-screen px-6 md:px-12 lg:px-20 py-12 rounded-t-2xl flex flex-col justify-between bg-cover bg-center"
  >

    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 leading-tight">
        Hire better. Faster.<br />Take your time back.
      </h2>
      <p className="text-sm md:text-base mb-5">
        Make hiring easier than ever.
      </p>
      <button className="mt-4 px-5 py-2 bg-white text-black rounded-md">
        ➡ Get Early Access
      </button>
    </div>


    <div className="flex flex-col md:flex-row justify-between items-start text-sm">
      

      <div className="md:w-[40%]">
        <div className="font-bold mb-2 text-lg">wono</div>
        <p>
          Your own, personal recruiter.<br />
          Completely automated.
        </p>
        <p className="mt-3">Follow us on LinkedIn</p>
      </div>


      <div className="flex  md:w-[30%] md:justify-between mt-8 md:mt-0">
        
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          {["Overview","Sourcing","Evaluation","Tracking","Communication"].map(i => (
            <p key={i} className="text-gray-300">{i}</p>
          ))}
        </div>

        <div>
          <h4 className="font-semibold mb-2 mr-20">Product</h4>
          {["Pricing","Early access"].map(i => (
            <p key={i} className="text-gray-300">{i}</p>
          ))}
        </div>

      </div>
    </div>
  </footer>
);