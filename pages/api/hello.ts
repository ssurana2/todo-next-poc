// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

/**
 * Database for project based todo
 * 
 * Project:
 * id, project_name
 * 
 * Todo:
 * id, project_id, name, created_at, updated_at, status (Active, completed)
 */