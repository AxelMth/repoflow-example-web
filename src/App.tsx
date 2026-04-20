import { useEffect, useState } from 'react'
import type { HelloResponse } from '@repoflow-example/shared'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

type State =
  | { status: 'loading' }
  | { status: 'success'; data: HelloResponse }
  | { status: 'error'; message: string }

export default function App() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HelloResponse>
      })
      .then((data) => setState({ status: 'success', data }))
      .catch((err: unknown) =>
        setState({ status: 'error', message: err instanceof Error ? err.message : 'Unknown error' }),
      )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          repoflow example <span className="text-purple-300">— hello</span>
        </h1>

        {state.status === 'loading' && (
          <div className="flex items-center justify-center gap-3 text-purple-200">
            <div className="w-5 h-5 border-2 border-purple-300 border-t-transparent rounded-full animate-spin" />
            <span>Fetching from API…</span>
          </div>
        )}

        {state.status === 'success' && (
          <div className="space-y-4">
            <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
              <p className="text-green-200 text-sm font-medium mb-1">Message (deployed)</p>
              <p className="text-white font-mono text-sm break-all">{state.data.message}</p>
            </div>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
              <p className="text-blue-200 text-sm font-medium mb-1">Timestamp</p>
              <p className="text-white font-mono text-sm">{state.data.timestamp}</p>
            </div>
          </div>
        )}

        {state.status === 'error' && (
          <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4">
            <p className="text-red-200 text-sm font-medium mb-1">Error</p>
            <p className="text-white font-mono text-sm">{state.message}</p>
            <p className="text-red-300 text-xs mt-2">
              Is the API running at <code className="bg-red-900/50 px-1 rounded">{API_URL}</code>?
            </p>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-white/40 text-xs">
        Powered by{' '}
        <a
          href="https://www.npmjs.com/package/@axelmth/repoflow"
          className="text-purple-400 hover:text-purple-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          @axelmth/repoflow
        </a>{' '}
        •{' '}
        <a
          href="https://github.com/axelmth/repoflow"
          className="text-purple-400 hover:text-purple-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/axelmth/repoflow
        </a>
      </footer>
    </div>
  )
}
