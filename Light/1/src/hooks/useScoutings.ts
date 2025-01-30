import { useEffect, useState } from 'react'
import { fetchScoutings } from '@/services/scoutingService'

export function useScoutings(language: string, limit: number = 4) {
  const [scoutings, setScoutings] = useState<ScoutingCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadScoutings() {
      try {
        setLoading(true)
        const fetchedScoutings = await fetchScoutings(language, limit)
        setScoutings(fetchedScoutings)
      } catch (err: unknown) {
        setError('Failed to load scoutings.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadScoutings()
  }, [language, limit])

  return { scoutings, loading, error }
}
