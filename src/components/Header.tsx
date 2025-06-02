import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Users, Trophy } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-sm py-4 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Users className="w-6 h-6 text-blue-400" />
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">TugWar Game</h1>
            <p className="text-xs text-gray-300">Powered by Monad</p>
          </div>
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}

export default Header