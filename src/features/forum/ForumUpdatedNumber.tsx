import cx from 'classnames'
import React from 'react'

import Arrow from '../../common/components/Icons/Arrow'
import { formatNumber } from '../../common/utils/format'

export type TForumUpdatedNumberProps = {
  value: string | number
  oldValue: string | number
};

const ForumUpdatedNumber = ({
  value,
  oldValue
}: TForumUpdatedNumberProps): JSX.Element => {
  const iconType = value > oldValue ? 'top' : 'bottom'
  return (
    <div
      className={cx(
        'flex text-gray-a0',
        value > oldValue && 'text-success-default',
        value < oldValue && 'text-red-75'
      )}
    >
      {formatNumber(+value)}{' '}
      {value !== oldValue && (
        <Arrow size={10} to={iconType} />
      )}
    </div>
  )
}

export default ForumUpdatedNumber
