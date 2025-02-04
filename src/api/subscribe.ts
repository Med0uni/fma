import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name, language } = req.body

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          LANGUAGE: language.toUpperCase(),
          SOURCE: 'FM_WEBSITE',
        },
        listIds: [Number(process.env.NEXT_PUBLIC_BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    })

    if (!brevoResponse.ok) {
      const error = await brevoResponse.json()
      return res.status(brevoResponse.status).json({
        error: error.message || 'Subscription failed',
      })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
