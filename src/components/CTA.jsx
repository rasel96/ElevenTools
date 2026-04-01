const CTA = () => {
  return (
    <section className="bg-primary text-white py-24 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-5xl font-bold leading-tight mb-5">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-lg mb-10">
          Join thousands of creators, developers, and marketers who are
          already using DigiTools to work smarter, not harder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-primary hover:bg-gray-100 rounded-full px-10 border-none">
            Explore All Products
          </button>
          <button className="btn btn-outline text-white border-white rounded-full px-10 hover:bg-white hover:text-primary">
            View Pricing
          </button>
        </div>
        <p className="text-xs text-purple-200 mt-5 opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;