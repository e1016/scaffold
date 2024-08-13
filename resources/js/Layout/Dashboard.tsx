import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

type DashboardProps = {
  children: React.ReactNode
}

export default function Dashboard ({ children }: DashboardProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}
