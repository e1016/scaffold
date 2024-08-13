import { Icon, IconProps } from '@tabler/icons-react'
import React from 'react'
import Loading from '@/components/ui/Loading'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  destroy?: boolean;
  left?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  right?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  className = '',
  primary,
  destroy,
  children,
  left,
  right,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const Left = left, Right = right
  return (
    <button className={
      className + ' ay-btn ' + (
        disabled
          ? 'cursor-not-allowed bg-opacity-50 text-white'
          : primary
            ? 'bg-indigo-500 text-white'
            : destroy
              ? 'bg-red-500 text-white'
              : 'bg-slate-500 text-white'
      )
    } onClick={(!loading && !disabled) ? props.onClick : undefined} {...props}>
      {/* @ts-ignore */}
      {left ? <Left className="w-4 ml-2"/> : <div className="w-1"/> }
      <span className="relative">
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
        {loading && <Loading light className="absolute top-0 left-0 w-full -mt-2.5 mb-1.5"/>}
      </span>
      {/* @ts-ignore */}
      {right ? <Right className="w-4 mr-2"/> : <div className="w-1"/>}
    </button>
  )
}