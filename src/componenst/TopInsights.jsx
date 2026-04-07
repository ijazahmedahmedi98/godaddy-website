import topinsigh9 from "../assets/Images/download 9.png"
import topinsigh4 from "../assets/Images/download 4.png"
import topinsigh5 from "../assets/Images/download 5.png"

export const TopInsights = () => (
  <section className="bg-white p-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold mb-14">TOP insights</h2>
      <a className="text-sm text-blue-600 ">See more →</a>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {[{
        img: <img src={topinsigh9} alt="Tribute" className=" object-cover rounded-4xl" />,
        title: "Tribute becomes Telegram's leading creator platform",
        date: "06 Mar 2026"
      }, {
        img: <img src={topinsigh4} alt="AppKit" className=" object-cover rounded-4xl" />,
        title: "AppKit launches in alpha to simplify development on TON",
        date: "25 Feb 2026"
      }, {
        img: <img src={topinsigh5} alt="Omniston" className=" object-cover rounded-4xl" />,
        title: "Omniston and the next phase of liquidity infrastructure",
        date: "17 Feb 2026"
      }].map(i => (
        <div key={i.title}>
          <div className="bg-gray-800 h-60 rounded-4xl mb-3 flex gap-5 items-center justify-center">
            {i.img}
          </div>
        <div className="flex">
            <p className="text-xs text-gray-500 bg-gray-100">{i.date}</p>
              <p className="text-xs text-gray-500 bg-gray-100 ml-4 rounded p-0.5">News</p> 
             <p className="text-xs text-gray-500 bg-gray-100 rounded ml-3 p-0.5">2 min read</p>
        </div>
          <h3 className="font-semibold">{i.title}</h3>
        </div>
      ))}
    </div>
  </section>
);
