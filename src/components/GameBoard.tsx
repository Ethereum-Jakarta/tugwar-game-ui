import type { GameInfo } from "../types/game";

interface GameBoardProps {
  gameInfo: GameInfo;
  isShaking: boolean;
}

const GameBoard = ({ gameInfo, isShaking }: GameBoardProps) => {
  const { ropePosition, team1Score, team2Score, winner } = gameInfo;
  
  // Calculate rope position for visualization (center at position 0)
  const ropeVisualPosition = Math.max(-10, Math.min(10, ropePosition));
  const ropePercentage = ((ropeVisualPosition + 10) / 20) * 100;

  const getRopeEmoji = () => {
    if (winner === 1) return "🏆";
    if (winner === 2) return "🏆";
    return "🔥";
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Battle Arena</h2>
        <div className="flex justify-between items-center text-lg">
          <div className={`text-blue-400 font-bold ${winner === 1 ? 'victory-pulse' : ''}`}>
            Team 1: {team1Score}
          </div>
          <div className="text-white">VS</div>
          <div className={`text-red-400 font-bold ${winner === 2 ? 'victory-pulse' : ''}`}>
            Team 2: {team2Score}
          </div>
        </div>
      </div>

      {/* Rope Visualization */}
      <div className="relative mb-6">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Team 1 Territory</span>
          <span>Center</span>
          <span>Team 2 Territory</span>
        </div>
        
        <div className="relative h-12 bg-gradient-to-r from-blue-900/50 via-gray-700/50 to-red-900/50 rounded-lg border-2 border-white/30 overflow-hidden">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/60 transform -translate-x-1/2"></div>
          
          {/* Rope indicator */}
          <div 
            className={`absolute top-1/2 w-8 h-8 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ${isShaking ? 'rope-shake' : ''}`}
            style={{ left: `${ropePercentage}%` }}
          >
            <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center text-lg shadow-lg border-2 border-yellow-300">
              {getRopeEmoji()}
            </div>
          </div>
          
          {/* Territory markers */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-400 font-bold">🔵</div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400 font-bold">🔴</div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>-10</span>
          <span>0</span>
          <span>+10</span>
        </div>
      </div>

      {/* Position indicator */}
      <div className="text-center">
        <p className="text-white">
          Rope Position: <span className="font-mono font-bold">{ropePosition}</span>
        </p>
        {winner === 0 && (
          <p className="text-gray-300 text-sm mt-1">
            {ropePosition > 0 ? "Team 2 is pulling ahead!" : ropePosition < 0 ? "Team 1 is pulling ahead!" : "Perfect balance!"}
          </p>
        )}
      </div>

      {/* Winner announcement */}
      {winner !== 0 && (
        <div className="mt-4 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg victory-pulse">
            🎉 Team {winner} Wins! 🎉
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;