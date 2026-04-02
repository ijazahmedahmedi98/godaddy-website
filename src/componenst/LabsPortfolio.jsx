export const LabsPortfolio = () => (
  <section className="bg-black text-white rounded-t-3xl p-12">
    <h2 className="text-center text-lg font-semibold mb-6">
      TOP Labs portfolio
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      {[{
        n:"TON API",d:"Blockchain infrastructure"
      },{
        n:"Tonkeeper",d:"Full-featured self-custody Wallet"
      },{
        n:"STON.fi",d:"Swap dApp and swap-enabling protocols"
      },{
        n:"TonTech",d:"Environment for TON development"
      },{
        n:"TonStat",d:"Daily updates on TON statistics"
      },{
        n:"TAC",d:"Blockchain for EVM dApps"
      },{
        n:"Getgems",d:"NFT Marketplace on TON"
      },{
        n:"Tribute",d:"Content monetization platform"
      },{
        n:"StepMania",d:"Move-to-earn mini app"
      },{
        n:"Pluto Studio",d:"Web3 game studio"
      },{
        n:"PlayDeck",d:"Game developer and publisher"
      },{
        n:"Mira",d:"Truly personal AI assistant"
      },{
        n:"TON Punks",d:"GameFi NFT ecosystem"
      },{
        n:"Notcoin",d:"Probably nothing"
      },{
        n:"Not Games",d:"Steam-style hub for Telegram games"
      },{
        n:"Sticker Pack",d:"Platform for tokenized stickers"
      },{
        n:"TG Tools",d:"Open-source tools for Telegram"
      },{
        n:"Bullpen",d:"Trade tokens and futures on Telegram"
      },{
        n:"Flappy Bird",d:"Retro gaming in Web3"
      },{
        n:"Yem Studio",d:"Venture studio on Telegram"
      },{
        n:"AKEDO",d:"AI framework for content creation"
      },{
        n:"Playgama",d:"HTML5 gaming platform"
      }].map(i=>(
        <div key={i.n}>
          <div className="w-6 h-6 bg-white rounded mb-1" />
          <h4 className="font-semibold">{i.n}</h4>
          <p className="text-gray-400">{i.d}</p>
        </div>
      ))}
    </div>
  </section>
);