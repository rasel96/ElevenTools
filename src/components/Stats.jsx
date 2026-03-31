const Stats = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-center items-center md:gap-12 lg:gap-24 gap-y-12">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
            50K+
          </div>
          <div className="text-white/80 text-base lg:text-lg font-medium">
            Active Users
          </div>
        </div>
        <div className="hidden md:block w-px h-16 bg-white/30"></div>
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
            200+
          </div>
          <div className="text-white/80 text-base lg:text-lg font-medium">
            Premium Tools
          </div>
        </div>
        <div className="hidden md:block w-px h-16 bg-white/30"></div>

        <div className="flex flex-col items-center text-center">
          <div className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
            4.9
          </div>
          <div className="text-white/80 text-base lg:text-lg font-medium">
            Rating
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
