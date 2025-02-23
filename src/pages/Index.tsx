
import Navigation from "@/components/Navigation";
import SummaryCard from "@/components/SummaryCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [timeFilter, setTimeFilter] = useState("Last 3 months");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-semibold">Recordings</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            {timeFilter}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SummaryCard id={1} date="12.07.24" time="13.45" />
          <SummaryCard
            id={2}
            date="11.07.24"
            time="13.45"
            backgroundColor="bg-green-50"
          />
          <SummaryCard id={3} date="09.07.24" time="13.45" />
          <SummaryCard
            id={4}
            date="07.07.24"
            time="13.45"
            backgroundColor="bg-green-50"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;

