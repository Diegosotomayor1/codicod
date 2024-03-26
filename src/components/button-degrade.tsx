import React from 'react'

export default function ButtonDegrade ({
  text,
  icon,
  className
}: {
  text: string
  icon?: React.ReactNode | string
  className?: string
}) {
  return (
    <button
      className={`${
        className ? className : ''
      } relative  p-2 px-5 rounded-2xl bg-white transition-all duration-300 [&>div]:hover:opacity-70 [&>strong]:hover:text-sm`}
    >
      <div className='absolute rounded-2xl overflow-clip top-0 left-0 w-full h-full blur-lg -z-10 opacity-50 transition-opacity'>
        <div className='absolute -top-[80px] -left-[20px] w-[200px] h-[200px] bg-gradient-to-l from-primary to-secondary animate-[spin_2s_infinite_linear]'></div>
      </div>
      <span>{text} </span>
      {icon && <strong className='text-[0px] transition-all'>{icon}</strong>}
    </button>
  )
}
