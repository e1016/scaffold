
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onRightClick?: () => void;
  password?: boolean;
}

export default function Input({ className = '', password, left, right, onRightClick, ...props }: InputProps) {
  const Left = left, Right = right

  return (
    <div className={
      className +
      ' relative'
    }>
      {left ? <Left className="w-4 absolute z-10 left-2 top-0.5"/> : null}
      <input type={password ? 'password': 'text'} className={
        (left ? 'pl-7' : 'pl-2') +
        ' w-full border-gray-400 border-solid border-2 rounded-md pt-0.5 pb-0.5 text-sm outline-none focus:border-indigo-500'
      } {...props} />
      {
        right ? <span className={onRightClick ? 'cursor-pointer' : ''} onClick={onRightClick}>
          <Right className="w-4 absolute z-10 right-2 top-0.5" />
        </span> : null
      }
    </div>
  )
}