
import React, { useEffect } from 'react'

interface AutoTableProps {
  service: string,
  pagination: {
    page: number,
    perPage: number,
    perPageRange: number[],
  }
}

export default function AutoTable(props: AutoTableProps) {
  /**
   * Auto table administra automáticamente la paginación, la carga de datos,
   * filtros, y ordenamiento
   */
  
  useEffect(() => {
    
  }, [])
  return (
    <div>
      TableApi
    </div>
  )
}