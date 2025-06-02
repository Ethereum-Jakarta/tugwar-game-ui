import { useState } from "react";
import { Users, Zap } from "lucide-react";

interface GameControlsProps {
  onPull: (isTeam1: boolean) => void;
  isConnected: boolean;
  winner: number;
  isLoading: boolean;
}

const GameControls = ({ onPull, isConnected, winner, isLoading }: GameControlsProps) => {
  const [lastPull, setLastPull] = useState<number | null>(null);

  const handlePull = (isTeam1: boolean) => {
    if (!isConnected || winner !== 0 || isLoading) return;
    
    onPull(isTeam1);
    setLastPull(isTeam1 ? 1 : 2);
    
    // Reset last pull indicator after 2 seconds
    setTimeout(() => setLastPull(null), 2000);
  };

  const getButtonClass = (isTeam1: boolean) => {
    const baseClass = "flex-1 py-6 px-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg border-2";
    const teamNumber = isTeam1 ? 1 : 2;
    
    if (!isConnected || winner !== 0) {
      return `${baseClass} bg-gray-600 text-gray-400 cursor-not-allowed border-gray-600`;
    }
    
    if (isLoading) {
      return `${baseClass} ${isTeam1 ? 'bg-blue-500 border-blue-400' : 'bg-red-500 border-red-400'} opacity-50 cursor-not-allowed text-white`;
    }
    
    const recentPull = lastPull === teamNumber ? 'ring-4 ring-yellow-400 scale-105' : '';
    
    return `${baseClass} ${isTeam1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 border-blue-400 text-white' : 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 border-red-400 text-white'} ${recentPull}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
      <h3 className="text-xl font-bold text-white text-center mb-4">Choose Your Team</h3>
      
      {!isConnected && (
        <div className="text-center mb-4">
          <p className="text-yellow-300 text-sm">⚠️ Connect your wallet to play!</p>
        </div>
      )}
      
      {winner !== 0 && (
        <div className="text-center mb-4">
          <p className="text-green-300 text-sm">🎉 Game Over! Reset to play again.</p>
        </div>
      )}

      <div className="flex space-x-4">
        <button
          onClick={() => handlePull(true)}
          disabled={!isConnected || winner !== 0 || isLoading}
          className={getButtonClass(true)}
        >
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-6 h-6" />
            <div>
              <div>Pull for Team 1</div>
              <div className="text-sm opacity-80">🔵 Blue Team</div>
            </div>
            <Zap className="w-5 h-5" />
          </div>
        </button>
        
        <button
          onClick={() => handlePull(false)}
          disabled={!isConnected || winner !== 0 || isLoading}
          className={getButtonClass(false)}
        >
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5" />
            <div>
              <div>Pull for Team 2</div>
              <div className="text-sm opacity-80">🔴 Red Team</div>
            </div>
            <Users className="w-6 h-6" />
          </div>
        </button>
      </div>

      {isLoading && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center space-x-2 text-yellow-300">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-300"></div>
            <span className="text-sm">Processing pull...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameControls;