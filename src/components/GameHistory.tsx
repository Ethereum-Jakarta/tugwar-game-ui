import { useState } from "react";
import { Clock, Trophy, Users, RotateCcw } from "lucide-react";
import type { GameEvent } from "../types/game";

interface GameHistoryProps {
  events: GameEvent[];
}

const GameHistory = ({ events }: GameHistoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'pull': return <Users className="w-4 h-4" />;
      case 'win': return <Trophy className="w-4 h-4 text-yellow-400" />;
      case 'reset': return <RotateCcw className="w-4 h-4 text-orange-400" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getEventMessage = (event: GameEvent) => {
    switch (event.type) {
      case 'pull':
        return `Team ${event.team} pulled the rope`;
      case 'win':
        return `🎉 Team ${event.team} won the game!`;
      case 'reset':
        return `🔄 Game was reset`;
      default:
        return 'Unknown event';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'pull': return 'bg-blue-900/50 border-blue-600/50';
      case 'win': return 'bg-yellow-900/50 border-yellow-600/50';
      case 'reset': return 'bg-orange-900/50 border-orange-600/50';
      default: return 'bg-gray-900/50 border-gray-600/50';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div 
        className="flex items-center justify-between cursor-pointer hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold text-white flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Game History ({events.length})
        </h3>
        <div className="text-white text-xl">
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
          {events.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🎮</div>
              <p className="text-gray-400">No events yet</p>
              <p className="text-gray-500 text-sm">Start pulling to see game history!</p>
            </div>
          ) : (
            events.slice().reverse().map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${getEventColor(event.type)}`}
              >
                <div className="text-gray-300">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{getEventMessage(event)}</p>
                  <p className="text-gray-400 text-xs">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                {event.player && (
                  <div className="text-xs text-gray-400 font-mono max-w-20 truncate">
                    {event.player.slice(0, 6)}...{event.player.slice(-4)}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GameHistory;