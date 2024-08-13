
import React, { useEffect, useState } from 'react'

interface THeaderPoprs {
  key: string
  label: string
  render?: (data: any) => React.ReactNode
}

interface TableProps {
  api?: string
  columns: (string | THeaderPoprs)[]
  data?: any[]
}

export default function Table({ api, columns, data }: TableProps) {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!api && !data) {
      console.error('Table component requires either an api or data')
    }

    if (api) {
      fetch(api)
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log('[<Table> fetch api error]', error)
        })
    }
  }, [])
  
  console.log(api)

  if (api) {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            {
              columns.map((column, index) => typeof column === 'string' ? (
                <th key={index}>{column}</th>
              ) : (
                <th key={column.key}>{column.label}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    )
  }
}