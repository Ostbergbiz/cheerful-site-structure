
import { HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <Link to="/" className="text-lg font-semibold">
        Logo
      </Link>
      
      <div className="flex items-center gap-8">
        <Link
          to="/insights"
          className={`flex items-center gap-1 hover:text-gray-600 transition-colors ${
            location.pathname === "/insights" ? "text-gray-900" : "text-gray-600"
          }`}
        >
          Insights
          <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded-full">
            AI
          </span>
        </Link>
        
        <Link
          to="/recordings"
          className={`hover:text-gray-600 transition-colors ${
            location.pathname === "/recordings" ? "text-gray-900 underline" : "text-gray-600"
          }`}
        >
          Recordings
        </Link>
        
        <Link
          to="/record"
          className="text-red-500 hover:text-red-600 transition-colors"
        >
          Record
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-8 h-8 bg-[#3A4D39] text-white rounded-full flex items-center justify-center">
          B
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

