
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
      {left ? <Left className="w-4 absolute z-10 left-2 top-1"/> : null}
      <input type={password ? 'password': 'text'} className={
        (left ? 'pl-7' : 'pl-2') +
        ' w-full border-gray-300 border-solid border rounded-md pt-1 pb-1 text-sm outline-none focus:border-indigo-500'
      } {...props} />
      {
        right ? <span className={onRightClick ? 'cursor-pointer' : ''} onClick={onRightClick}>
          <Right className="w-4 absolute z-10 right-2 top-1" />
        </span> : null
      }
    </div>
  )
}