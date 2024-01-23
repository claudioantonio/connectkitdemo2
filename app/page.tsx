'use client'

import { WagmiConfig, createConfig, useAccount, useNetwork } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Avatar, ChainIcon, ConnectKitButton, ConnectKitProvider, getDefaultConfig } from 'connectkit';
import Wallet from './components/wallet/wallet';

// Choose which chains you'd like to show
const chains = [sepolia];

// wallet connection
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.VITE_APP_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.VITE_APP_WALLETCONNECT_PROJECT_ID || '', // provide a default value
    chains,
    // Required
    appName: "connectkitdemo",
  }),
);

export default function Home() {
  return (
    <WagmiConfig config={config}>
    <ConnectKitProvider>
    <header>
      <ConnectKitButton />
      <Wallet />
    </header>
    </ConnectKitProvider>
  </WagmiConfig>

  )
}
