
export interface LoadingProps {
  className?: string;
  light?: boolean;
}

export default function Loading({ light, className = '' }: LoadingProps) {
  return (
    <div className={
      className +
      ' ay-loading container ' +
      (light ? 'bg-opacity-45 bg-white' : 'bg-opacity-45 bg-indigo-500')
    }>
      <span className={
        'ay-loading bar ' +
        (light ? 'bg-white' : 'bg-indigo-500')
      }></span>
    </div>
  )
}