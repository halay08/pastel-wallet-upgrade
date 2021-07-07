import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '../../../common/components/Buttons'
import ReviewOfferModal, { TReviewOfferModal, TOffer } from './reviewOfferModal'

const Template: Story<TReviewOfferModal> = ({
  title,
  offers,
  isOpen,
  info,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      <ReviewOfferModal
        title={title}
        offers={offers}
        isOpen={showModal}
        handleClose={() => {
          setShowModal(false)
        }}
        info={info}
      ></ReviewOfferModal>
    </>
  )
}

export const ReviewOfferModalDefault = Template.bind({})
const title = 'Diamonds in the sky'
const offers: Array<TOffer> = [
  { id: 1, user: 'SuperDealer23', price: 1000000 },
  { id: 2, user: 'Dealer23', price: 100000 },
]
const info = { currencyName: 'PSL' }
ReviewOfferModalDefault.args = {
  title,
  offers,
  info,
}

export default {
  component: ReviewOfferModal,
  title: 'BidModals/ReviewOfferModal',
} as Meta