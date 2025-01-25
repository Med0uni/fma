import { useEffect, useState } from 'react'
import { fetchTactics } from '@/services/tacticsService'
import { TacticCard } from '@/types/tacticCard'

export function useTactics(language: string, limit: number = 4) {
  const [tactics, setTactics] = useState<TacticCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTactics() {
      try {
        setLoading(true)
        const fetchedTactics = await fetchTactics(language, limit)
        setTactics(fetchedTactics)
      } catch (err: unknown) {
        setError('Failed to load tactics.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadTactics()
  }, [language, limit])

  return { tactics, loading, error }
}
