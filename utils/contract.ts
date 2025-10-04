import { client } from './client'
import abi from '../abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`

export async function readMessage(): Promise<string> {
  const data = await client.readContract({
    address: contractAddress,
    abi,
    functionName: 'getMessage',
  })
  console.log('✨ Contract says:', data)
  return String(data)
}