
import Navigation from "@/components/Navigation";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const Insights = () => {
  const [timeFilter, setTimeFilter] = useState("Last 3 months");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {showBanner && (
        <div className="relative bg-[#3A4D39] text-white py-4 px-8">
          <div className="max-w-screen-xl mx-auto flex items-center justify-center">
            <p>Here are the insights generated with AI from all your recordings</p>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-8 hover:opacity-80"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-semibold">Insights</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            {timeFilter}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-lg border border-gray-200">
            <span className="text-5xl font-semibold">12</span>
            <p className="text-gray-600 mt-2">Recordings</p>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <span className="text-5xl font-semibold">42</span>
            <p className="text-gray-600 mt-2">Minutes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium mb-4">Key topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-green-50">
                <ul className="space-y-3">
                  <li>More people are showing up to viewings</li>
                  <li>Objects with higher ceiling are more appreciated</li>
                  <li>Couples spend more time at the viewing</li>
                  <li>Big windows are more popular</li>
                  <li>Deals are being made quicker than last month</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-red-50">
                <ul className="space-y-3">
                  <li>If contract discussion goes on for too long there's a loss of interest</li>
                  <li>Missing washing machine is increasing in importance</li>
                  <li>Kitchens made with dark wood is not that popular</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Suggestions</h2>
            <div className="p-6 rounded-lg bg-gray-50">
              <ul className="space-y-3">
                <li>Do a quick introduction of the when 6 or more people are present</li>
                <li>Have discussed option for adding washing machine with sellers before viewing</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12">
          The more data available the better insights & suggestions will be generated
        </p>
      </main>
    </div>
  );
};

export default Insights;
