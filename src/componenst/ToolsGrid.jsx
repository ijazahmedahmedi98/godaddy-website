export const ToolsGrid = () => (
  <section className="bg-gray-100 text-center px-6 py-14">

    {/* Heading */}
    <h2 className="text-3xl font-bold mb-3 max-w-2xl mx-auto leading-snug">
      Launch your project on Telegram with TOP's Web3 tools
    </h2>

    <p className="text-gray-600 mb-10 max-w-xl mx-auto">
      The Open Platform provides SDKs, APIs, wallets and more to help builders
      reach a billion users
    </p>

    {/* Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">

      {[{
        name:"TON API",
        desc:"TON Developer Tools"
      },{
        name:"TON Connect",
        desc:"Connecting 1B Telegram users to TON Blockchain"
      },{
        name:"TAC",
        desc:"Deploy EVM smart contracts on TON"
      },{
        name:"TonTech",
        desc:"Environment for TON development"
      },{
        name:"STON.fi",
        desc:"Add crypto swaps to your app in under a week"
      },{
        name:"PlayDeck",
        desc:"Building gaming on Telegram"
      },{
        name:"Getgems",
        desc:"Bring asset ownership to your audience"
      }].map((t) => (

        <div
          key={t.name}
          
        >
          {/* Icon */}
          <div className="w-10 h-10 bg-black rounded-md mb-3"></div>

          {/* Title */}
          <h4 className="font-semibold text-base mb-1">{t.name}</h4>

          {/* Description */}
          <p className="text-sm text-gray-600">{t.desc}</p>
        </div>

      ))}

    </div>

  </section>
);