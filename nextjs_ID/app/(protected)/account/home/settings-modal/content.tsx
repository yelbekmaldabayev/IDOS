'use client'

import { useEffect, useState } from 'react'

export default function SettingsModalContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Settings Modal</h2>
      <p>Settings content rendered client-side.</p>
    </div>
  )
}
