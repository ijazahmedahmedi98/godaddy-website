import {
  SiAsana, SiFigma, SiGmail, SiHubspot, SiInstagram,
  SiMessenger, SiSalesforce, SiShopify, SiSlack,
  SiTrello, SiWhatsapp, SiZapier, SiZoom
} from "react-icons/si";

export const Integrations = () => {
  const icons = [
    SiTrello, SiGmail, SiSlack, SiWhatsapp,
    SiSalesforce, SiMessenger, SiAsana, SiHubspot,
    SiFigma, SiZoom, SiZapier, SiInstagram, SiShopify
  ];

  return (
    <section className="bg-[#350d54] text-white text-center p-10 rounded-xl">

      <h2 className="text-xl font-bold">
        Alt+Tab isn't a workflow. Unify your whole stack.
      </h2>

      <p className="text-sm mt-2 max-w-xl mx-auto">
        Connect your channels and most-used tools with Front's 160+ integrations
        and no-code workflows bring your entire stack into one shared view.
      </p>

      <button className="mt-4 mb-8 border px-4 py-1 rounded-full text-sm">
        View all integrations
      </button>

      {/* ICON GRID */}
      <div className="grid grid-flow-col grid-rows-3 gap-4 justify-center">
        {icons.map((Icon, i) => (
          <div key={i} className="bg-white rounded-lg p-3 flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-800" />
          </div>
        ))}
      </div>

    </section>
  );
};