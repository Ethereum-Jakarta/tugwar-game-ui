import { BarChart3, Target, Trophy } from "lucide-react";
import type { GameInfo, TeamStats, GamePrediction } from "../types/game";

interface GameStatsProps {
  gameInfo: GameInfo;
  team1Stats: TeamStats;
  team2Stats: TeamStats;
  prediction: GamePrediction;
  isOwner: boolean;
  onReset: () => void;
  isResetting: boolean;
}

const GameStats = ({ 
  gameInfo, 
  team1Stats, 
  team2Stats, 
  prediction, 
  isOwner, 
  onReset, 
  isResetting 
}: GameStatsProps) => {
  const { maxScoreDifference, totalPulls, gamesPlayed } = gameInfo;

  const getProgressPercentage = (score: number) => {
    return Math.min((score / maxScoreDifference) * 100, 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Team Statistics */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Team Statistics
        </h3>
        
        <div className="space-y-4">
          {/* Team 1 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-400 font-semibold">🔵 Team 1</span>
              <span className="text-white">{team1Stats.score} points</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage(team1Stats.score)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-1">
              <span>{team1Stats.isWinning ? "🏆 Leading" : "📈 Catching up"}</span>
              <span>Advantage: +{team1Stats.scoreAdvantage}</span>
            </div>
          </div>

          {/* Team 2 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-400 font-semibold">🔴 Team 2</span>
              <span className="text-white">{team2Stats.score} points</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage(team2Stats.score)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-1">
              <span>{team2Stats.isWinning ? "🏆 Leading" : "📈 Catching up"}</span>
              <span>Advantage: +{team2Stats.scoreAdvantage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Info & Prediction */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Game Information
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Win Condition:</span>
            <span className="text-white font-semibold">{maxScoreDifference} points ahead</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">Total Pulls:</span>
            <span className="text-white font-semibold">{totalPulls}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-300">Games Played:</span>
            <span className="text-white font-semibold">{gamesPlayed}</span>
          </div>

          {/* Prediction */}
          {prediction.predictedWinner > 0 && (
            <div className="mt-4 p-3 bg-purple-900/50 rounded-lg border border-purple-600/50">
              <div className="flex items-center justify-between">
                <span className="text-purple-300 text-sm font-semibold">🔮 AI Prediction</span>
                <span className="text-white text-sm">{prediction.confidence}% confidence</span>
              </div>
              <div className="text-white font-bold mt-1">
                Team {prediction.predictedWinner} is favored to win
              </div>
            </div>
          )}

          {/* Reset Button for Owner */}
          {isOwner && (
            <button
              onClick={onReset}
              disabled={isResetting}
              className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResetting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  <span>Resetting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span>Reset Game</span>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameStats;