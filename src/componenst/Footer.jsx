import footerBg from "../assets/Images/footerbg.png";


export const Footer = () => (
  <footer  style={{ backgroundImage: `url(${footerBg})` }} className=" text-white p-10 rounded-t-2xl">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">Hire better. Faster.<br />Take your time back.</h2>
      <p className="text-sm mt-2">Make hiring easier than ever.</p>
      <button className="mt-4 px-4 py-2 bg-white text-black rounded">
        ➡ Get Early Access
      </button>
    </div>
    <div className="flex flex-col md:flex-row justify-between text-sm mt-10">
      <div>
        <div className="font-bold mb-1">wono</div>
        <p>Your own, personal recruiter.<br />Completely automated.</p>
        <p className="mt-2">Follow us on LinkedIn</p>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Features</h4>
        {["Overview","Sourcing","Evaluation","Tracking","Communication"].map(i=>(
          <p key={i} className="text-gray-300">{i}</p>
        ))}
      </div>
      <div>
        <h4 className="font-semibold mb-1">Product</h4>
        {["Pricing","Early access"].map(i=>(
          <p key={i} className="text-gray-300">{i}</p>
        ))}
      </div>
    </div>
  
  </footer>
);