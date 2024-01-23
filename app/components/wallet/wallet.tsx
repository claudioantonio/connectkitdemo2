'use client'

import { ChainIcon } from 'connectkit';
import React, { useEffect, useState } from 'react'
import { sepolia, useAccount } from 'wagmi';

const Wallet = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [isConnected, setIsConnected] = useState(false);

  // This Hook avoids error between client and server content rendering related to hydration
  useEffect(() => {
    if (!isConnecting && !isDisconnected) setIsConnected(true);
  }, []);

  return (
    <>
    <ChainIcon id={sepolia.id} />
    <p>{isConnected && address}</p>
    </>
  )
}

export default Wallet