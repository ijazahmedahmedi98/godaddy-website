import topinsigh9 from "../assets/Images/download 9.png"
import topinsigh4 from "../assets/Images/download 4.png"
import topinsigh5 from "../assets/Images/download 5.png"

export const TopInsights = () => (
  <section className="bg-white p-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">TOP insights</h2>
      <a className="text-sm text-blue-600">See more →</a>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {[{
        img: <img src={topinsigh9} alt="Tribute" className="w-full h-full object-cover rounded-4xl" />,
        title: "Tribute becomes Telegram's leading creator platform",
        date: "06 Mar 2026"
      }, {
        img: <img src={topinsigh4} alt="AppKit" className="w-full h-full object-cover rounded-4xl" />,
        title: "AppKit launches in alpha to simplify development on TON",
        date: "25 Feb 2026"
      }, {
        img: <img src={topinsigh5} alt="Omniston" className="w-full h-full object-cover rounded-4xl" />,
        title: "Omniston and the next phase of liquidity infrastructure",
        date: "17 Feb 2026"
      }].map(i => (
        <div key={i.title}>
          <div className="bg-gray-100 h-40 rounded-4xl mb-3 flex items-center justify-center">
            {i.img}
          </div>
          <p className="text-xs text-gray-500">{i.date} · News · 2 min read</p>
          <h3 className="font-semibold">{i.title}</h3>
        </div>
      ))}
    </div>
  </section>
);
