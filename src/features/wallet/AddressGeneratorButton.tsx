import React from 'react'
import electIcon from '../../common/assets/icons/ico-elect.svg'
import Button from '../../common/components/Button/Button'

type Props = {
  disabled: boolean
  onClick: () => void
}
export const AddressGeneratorButton: React.FC<Props> = ({
  disabled = false,
  onClick,
}) => (
  <Button
    variant='transparent'
    className='w-247px'
    disabled={disabled}
    onClick={onClick}
  >
    <div className='flex items-center ml-6'>
      <img src={electIcon} className='py-3' />
      <span className='text-sm ml-11px'>Generate a new PSL Address</span>
    </div>
  </Button>
)
