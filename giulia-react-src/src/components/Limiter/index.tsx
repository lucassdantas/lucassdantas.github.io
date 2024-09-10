import { ReactNode } from 'react'

export const Limiter = ({children, className=''}:{children:ReactNode, className?:string}) => {
  return (
    <div className='w-full h-full flex justify-center items-center p-4'>
      <div className={`max-w-[1080px] w-full flex flex-col items-center ${className}`}>{children}</div>
    </div>
  )
}
