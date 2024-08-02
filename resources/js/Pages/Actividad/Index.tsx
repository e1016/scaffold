import Dashboard from '@/Layout/Dashboard'

export default function Actividad() {
  return (
    <div className="p-5">
      <h1>Actividad</h1>
    </div>
  )
}

Actividad.layout = (page: JSX.Element) => <Dashboard>{page}</Dashboard>
