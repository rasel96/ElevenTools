const Steps = () => {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-16 max-w-lg mx-auto">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative w-full h-full">
          <div className="absolute top-6 right-6 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl">
            1
          </div>
          <div className="bg-purple-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8">
            <img
              src="/assets/user.png"
              alt="Create Account"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative w-full h-full transform md:-translate-y-4 md:shadow-lg">
          <div className="absolute top-6 right-6 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl">
            2
          </div>
          <div className="bg-purple-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8">
            <img
              src="/assets/package.png"
              alt="Choose Products"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative w-full h-full">
          <div className="absolute top-6 right-6 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl">
            3
          </div>
          <div className="bg-purple-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8">
            <img
              src="/assets/rocket.png"
              alt="Start Creating"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
