
import Navigation from "@/components/Navigation";
import { Mic } from "lucide-react";
import { useState } from "react";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl font-medium mb-3">Recap your meeting</h1>
          <p className="text-gray-600 mb-16">Our AI will summarize & analyze</p>

          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? "bg-red-500 hover:bg-red-600" 
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            <div className={`absolute inset-0 rounded-full ${
              isRecording ? "animate-ping bg-red-400 opacity-75" : ""
            }`}></div>
            <Mic className="w-12 h-12 text-white relative z-10" />
          </button>

          <p className="text-gray-500 mt-12">
            Press button and talk into your microphone
          </p>
        </div>
      </main>
    </div>
  );
};

export default Record;
