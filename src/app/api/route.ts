
import { connectDB } from '@/utils/connectDB';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse) => {
  connectDB()
  return new Response( 'John Doe' )
}

export { handler as GET, handler as POST }