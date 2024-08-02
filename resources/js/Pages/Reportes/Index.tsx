import Dashboard from '@/Layout/Dashboard'

export default function Reportes() {
  return (
    <div className="p-5">
      <h1>Reportes</h1>
    </div>
  )
}

Reportes.layout = (page: JSX.Element) => <Dashboard>{page}</Dashboard>
