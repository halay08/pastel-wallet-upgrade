import React from 'react'
import { TIconProps } from './iconProps'

export type TUploadFileProps = TIconProps

export const UploadFile: React.FC<TUploadFileProps> = ({ size, className }) => {
  return (
    <svg
      height={size}
      className={className}
      viewBox='0 0 18 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z'
        fill='currentColor'
      />
      <path
        d='M8.61722 8.07588C8.49927 8.12468 8.38877 8.19702 8.29289 8.29289L5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L8 11.4142V16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16V11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.70711 8.29289C9.41246 7.99825 8.97969 7.92591 8.61722 8.07588Z'
        fill='currentColor'
      />
    </svg>
  )
}
