import projectImg from "../assets/Images/download 1.png";

export const TelegramSection = () => (
  <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-12 bg-gray-50">

    {/* Text */}
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold leading-snug">
        Fueling the Telegram economy
      </h2>

      <p className="text-gray-600 text-base max-w-md">
        We build infrastructure and consumer apps on TON Blockchain to drive
        global crypto adoption.
      </p>


     
    </div>


    <div className="flex-1">
      <img
        src={projectImg}
        alt="Telegram economy"
        className="w-full max-w-md mx-auto rounded-xl"
      />
    </div>

  </section>
);