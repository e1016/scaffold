import SidebarRoute from '@/components/sidebar/SidebarRoute'
import { IconDashboard, IconFile, IconFileArrowLeft, IconListDetails } from '@tabler/icons-react'
import React from 'react'

type DashboardProps = {
  children: React.ReactNode
}
const r = (path: string) => `/dashboard/${path}`

const routes = [
  {
    name: 'nominas', icon: IconDashboard, children: [
      { name: 'actuales', href: r('nominas'), icon: IconFileArrowLeft },
    ]
  },
  { name: 'reportes', href: r('reportes'), icon: IconFile },
  { name: 'actividad', href: r('actividad'), icon: IconListDetails },
]

export default function Dashboard ({ children }: DashboardProps) {
  return (
    <div className="flex h-screen bg-slate-200 pt-2">
      <div className="pl-4 pt-2 w-60 flex-initial h-screen bg-slate-200">
        {
          routes.map((item) => (
            // @ts-ignore
            <SidebarRoute {...item} />
          ))
        }
      </div>
      <main className="flex-1 bg-white rounded-tl-lg">
        {children}
      </main>
    </div>
  )
}
