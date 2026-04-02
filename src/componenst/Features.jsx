import { FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";

export const Features = () => (
  <section className="bg-gray-100 py-12 px-6">
    
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center mb-10 max-w-2xl mx-auto leading-snug">
      We sprint through complexity <br />
      that trips up other customer service platforms
    </h2>

    {/* Cards */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      
      {[{
        Icon: FiEye,
        title: "One view across every team",
        desc: "Get complete, shared visibility across every customer interaction and history"
      },{
        Icon: FiTarget,
        title: "AI built for more than FAQs",
        desc: "Front AI handles complex requests from first message to final resolution"
      },{
        Icon: FiCheckCircle,
        title: "Resolution without rework",
        desc: "Higher accuracy, fewer handoffs, and responses that land the first time"
      }].map(({Icon, title, desc}) => (
        
        <div
          key={title}
          className="bg-white p-6 rounded-lg shadow-sm space-y-3 hover:shadow-md transition"
        >
          <Icon className="text-yellow-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>

      ))}

    </div>

  </section>
);