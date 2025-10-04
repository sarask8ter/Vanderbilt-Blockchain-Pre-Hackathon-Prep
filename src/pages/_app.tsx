// src/pages/index.tsx
import { useEffect, useState } from 'react'
import { client } from '../../utils/client'
import abi from '../../abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`

export default function Home() {
  const [msg, setMsg] = useState<string>('loading…')

  useEffect(() => {
    async function go() {
      const data = await client.readContract({
        address: contractAddress,
        abi,
        functionName: 'getMessage',
      })
      setMsg(String(data))
    }
    go()
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>On-chain message</h1>
      <p>✨ Contract says: <b>{msg}</b></p>
    </main>
  )
}
