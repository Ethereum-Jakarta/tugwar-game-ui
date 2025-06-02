# TugWar Game Frontend

![License](https://img.shields.io/github/license/your-org/tugwar-game-ui)
![Vite](https://img.shields.io/badge/Built%20with-Vite-646cff)
![RainbowKit](https://img.shields.io/badge/Wallet-RainbowKit-ec4899)
![Monad Testnet](https://img.shields.io/badge/Chain-Monad%20Testnet-8b5cf6)

> A real-time blockchain **Tug of War** built with **React**, **Vite**, **TailwindCSS**, **RainbowKit**, and **Wagmi**. Play head-to-head, pull the rope on-chain, and watch the battle unfold live—directly from your browser.

---

## ✨ Features

* 🔗 **Web3 Integration** – WalletConnect v2 via RainbowKit & Wagmi
* ⚔️ **Real-time Gameplay** – Live contract events update the UI every pull
* 🎨 **Modern UI/UX** – TailwindCSS, glassmorphism cards, responsive animations
* 📊 **Game Stats & History** – Dynamic charts, AI win-prediction, event log
* 🛠 **Type-Safe** – Fully written in TypeScript with strict types
* 🚀 **Production Ready** – Unit tests (Vitest), E2E tests (Playwright), CI deploy

## 📸 Preview

![TugWar Screenshot](./public/screenshot.png)

*Replace the image above with an actual screenshot once you deploy.*

---

## 🏁 Quick Start

```bash
# 1. Clone the repo
$ git clone https://github.com/your-org/tugwar-game-ui.git
$ cd tugwar-game-ui

# 2. Install dependencies (Node >= 18 LTS)
$ npm install

# 3. Create your environment file
$ cp .env.example .env
#   then fill in your contract address & WalletConnect ID

# 4. Start the dev server
$ npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** and connect your wallet (Monad Testnet) to start playing.

---

## 🔧 Configuration

| Variable                        | Description                                                                        |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `VITE_TUGWAR_CONTRACT_ADDRESS`  | Deployed TugWar contract on Monad Testnet                                          |
| `VITE_WALLETCONNECT_PROJECT_ID` | Get one free at [https://cloud.walletconnect.com](https://cloud.walletconnect.com) |
| `VITE_ENVIRONMENT`              | `development` \| `staging` \| `production`                                         |

A ready-made **`.env.example`** is included.

---

## 📂 Project Structure

```
src/
├── components/      # Reusable UI & game widgets
│   ├── Header.tsx
│   ├── GameBoard.tsx
│   ├── GameControls.tsx
│   ├── GameStats.tsx
│   └── GameHistory.tsx
├── constants/       # ABI & chain constants
├── types/           # Global TypeScript types
├── App.tsx          # Providers & routing
├── main.tsx         # Vite entry point
└── index.css        # Tailwind base & keyframes
```

A full breakdown lives in [`docs/integration.md`](./docs/integration.md).

---

## 🗺️ Scripts

| Command            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start Vite dev server with HMR           |
| `npm run build`    | Build production bundle into **`dist/`** |
| `npm run preview`  | Preview the build locally                |
| `npm run test`     | Run Vitest unit suite                    |
| `npm run test:e2e` | Launch Playwright end-to-end tests       |
| `npm run lint`     | ESLint check (TS/TSX)                    |
| `npm run lint:fix` | Auto-fix ESLint issues                   |

---

## 🧪 Testing

The project ships with out-of-the-box tests:

* **Unit tests** – Vitest + React Testing Library (components & hooks)
* **E2E tests** – Playwright (UI flows & responsiveness)

```bash
# run both suites
npm run test && npm run test:e2e
```

Coverage reports are generated in **`coverage/`**.

---

## 📦 Deployment

Choose your flavour—**Vercel**, **Netlify**, **Firebase**, or **GitHub Pages**. Full step-by-step guides live in [`docs/deployment.md`](./docs/deployment.md); the TL;DR for Vercel:

```bash
# one-liner deploy
vercel --prod
```

Ensure your environment variables are set in the dashboard before the first production build.

---

## 🛤 Roadmap

* [ ] Tournament ladder & MMR
* [ ] NFT trophy mint for winners
* [ ] i18n (English / Indonesian)
* [ ] PWA offline mode

*Open an issue or vote 👍 to prioritise a feature.*

---

## 🤝 Contributing

1. Fork the repo & create your branch: `git checkout -b feat/my-feature`
2. Commit your changes with conventional commits
3. Run `npm run lint && npm test` – keep CI green ✅
4. Push & open a Pull Request

All contributions, big or small, are welcome! Check out our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📜 License

Distributed under the **MIT** License. See [`LICENSE`](./LICENSE) for more information.

---

## 💚 Acknowledgements

* [Monad](https://monad.xyz) for the blazing-fast testnet
* [RainbowKit](https://www.rainbowkit.com/) & [Wagmi](https://wagmi.sh/) for painless Web3 UX
* [TailwindCSS](https://tailwindcss.com/) for utility-first styling
* [lucide-react](https://lucide.dev/) for the icon set

---

<div align="center">
  <sub>Built with love by the TugWar community – Happy Gaming! 🎮🚀</sub>
</div>
