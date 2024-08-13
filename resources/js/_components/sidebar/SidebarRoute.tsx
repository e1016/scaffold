import { Icon, IconChevronDown, IconProps } from '@tabler/icons-react'
import React, { act, useEffect, useState } from 'react'

type SidebarRouteProps = {
  name: string
  href: string,
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>,
  children?: React.ReactElement<typeof SidebarRoute>[],
  onIsActive?: (href: string) => boolean
}
export default function SidebarRoute({ name, href, icon, children, onIsActive }: SidebarRouteProps) {
  const Icon = icon
  const [collapsed, setCollapsed] = useState(false)
  
  useEffect(() => {
    if (href === window.location.pathname) {
      onIsActive && onIsActive(href)
    }
  }, [])

  const _onIsActive = (is: boolean) => {
    if (is) { setCollapsed(true) }
  }

  const isFocus = href === window.location.pathname

  if (children) {
    return (
      <>
        <span
          className="flex flex-row items-center pl-2 pt-1 pb-1 pr-4 rounded-tl-md rounded-bl-md hover:bg-slate-300 text-sm cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}>
          <Icon className="w-4 mr-1"/>
          {name}
          { collapsed ? <IconChevronDown className="w-4 ml-auto rotate-180"/> : <IconChevronDown className="w-4 ml-auto transform"/> }
        </span>
        
        <div className={'pl-2 pb-1' + (collapsed ? '' : ' hidden')}>
          {
            children.map((item, key) => (
              // @ts-ignore
              <SidebarRoute key={item.href} {...item} onIsActive={_onIsActive} />
            ))
          }
        </div>
      </>
    )
  }

  return (
    <a href={href} className={
      'flex flex-row items-center pl-2 pt-1 pb-1 pr-2 rounded-tl-md rounded-bl-md hover:text-black hover:bg-slate-300 text-sm' +
      (isFocus ? ' bg-white text-indigo-600 font-bold' : '')
    }>
      <Icon className="w-4 mr-1"/>
      {name}
    </a>
  )
}