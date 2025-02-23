
import { Pencil } from "lucide-react";
import { useState } from "react";

interface SummaryCardProps {
  id: number;
  date: string;
  time: string;
  backgroundColor?: string;
}

const SummaryCard = ({ id, date, time, backgroundColor }: SummaryCardProps) => {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState(`Summary ${id}`);

  return (
    <div className={`p-6 rounded-lg border border-gray-200 ${backgroundColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {editName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setEditName(false)}
              className="border-b border-gray-300 focus:outline-none focus:border-gray-600 px-1"
              autoFocus
            />
          ) : (
            <h3 className="font-medium text-lg">{name}</h3>
          )}
          <button
            onClick={() => setEditName(true)}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <Pencil className="w-3 h-3" />
            Edit name
          </button>
        </div>
        <span className="text-sm text-gray-500">
          {date}, {time}
        </span>
      </div>

      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-2">
          <span className="min-w-2">•</span>
          <p>Buyers were impressed with the well-maintained landscaping and fresh exterior; felt it was move-in ready.</p>
        </li>
        <li className="flex gap-2">
          <span className="min-w-2">•</span>
          <p>Loved the natural light, large windows, and hardwood floors; appreciated the warm and inviting atmosphere.</p>
        </li>
        <li className="flex gap-2">
          <span className="min-w-2">•</span>
          <p>Positive feedback on modern finishes (stainless steel appliances, granite countertops) but felt the space was a bit small for their needs.</p>
        </li>
        <li className="flex gap-2">
          <span className="min-w-2">•</span>
          <p>Liked the spaciousness and the en-suite bathroom; viewed it as a strong feature.</p>
        </li>
        <li className="flex gap-2">
          <span className="min-w-2">•</span>
          <p>Mixed reactions—liked the size but noted limited closet space might require additional storage.</p>
        </li>
      </ul>

      <button className="mt-6 text-center w-full text-gray-600 hover:text-gray-800 transition-colors">
        See transcript
      </button>
    </div>
  );
};

export default SummaryCard;
