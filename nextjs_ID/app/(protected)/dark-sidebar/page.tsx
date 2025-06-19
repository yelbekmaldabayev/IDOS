'use client'

'use client'

import { useEffect, useState } from 'react'
import ClientOnly from '@/components/wrappers/ClientOnly'

export default function DarkSidebarPage() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Dark Sidebar</h1>
        <p>This page has been temporarily fixed for SSR compatibility.</p>
      </div>
    </ClientOnly>
  )
}
