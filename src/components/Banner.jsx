const Banner = ({ setActiveTab }) => {
  return (
    <header className="container mx-auto px-4 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <span className="badge badge-primary badge-outline rounded-full font-medium px-4 py-3 bg-purple-50">
          New: AI-Powered Tools Available
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 text-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <button
            className="btn btn-primary rounded-full px-12"
            onClick={() => setActiveTab('products')}
          >
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-full px-8 flex gap-2">
            <img src="/assets/Play.png" alt="Play" className="w-5 h-5" /> View
            Demo
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/assets/banner.png"
          alt="Digital Workflow"
          className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-gray-100"
        />
      </div>
    </header>
  );
};

export default Banner;
