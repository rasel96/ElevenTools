const Pricing = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-16 max-w-lg mx-auto">
          No hidden fees, no long-term contracts. Choose the plan that's right
          for your business and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 border border-gray-100 text-left">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-7">
              Ideal for individuals just getting started.
            </p>

            <div className="mb-8 border-b border-gray-100 pb-6">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ Basic templates
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                ✔ Community support
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                ✔ 1 project per month
              </li>
            </ul>

            <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300 transform md:-translate-y-8 text-left relative overflow-hidden">
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 font-semibold px-4 py-1 rounded-full text-xs">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-white/80 text-sm mb-7">
              Best for professionals and small teams.
            </p>

            <div className="mb-8 border-b border-white/30 pb-6">
              <span className="text-5xl font-bold">$29</span>
              <span className="ml-1">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm font-medium">
                ✔ Access to ALL premium tools
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                ✔ Advanced Analytics
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                ✔ 24/7 Priority Support
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                ✔ Unlimited Projects
              </li>
            </ul>

            <button className="w-full rounded-full bg-white text-purple-600 font-semibold py-3 hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 border border-gray-100 text-left">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-7">
              Advanced features for larger organizations.
            </p>

            <div className="mb-8 border-b border-gray-100 pb-6">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ Custom Integrations
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ Dedicated Manager
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                ✔ SLA Guarantee
              </li>
            </ul>

            <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 hover:opacity-90 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;