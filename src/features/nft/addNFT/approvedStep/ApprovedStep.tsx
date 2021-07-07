import React from 'react'
import { TAddNFTState } from '../AddNFT.state'
import ModalLayout from '../ModalLayout'
import { Button } from 'common/components/Buttons'
import FullScreenButton from '../fullScreenButton/FullScreenButton'
import { useToggle } from 'react-use'
import FullScreenImage from 'common/components/FullScreenImage/FullScreenImage'

const InfoPair = ({ title, value }: { title: string; value: string }) => (
  <div className='flex'>
    <div className='text-gray-71 w-48'>{title}</div>
    <div className='text-green-45 font-extrabold'>{value}</div>
  </div>
)

type TApprovedStepProps = {
  state: TAddNFTState
  image: string
}

export default function ApprovedStep({
  state: { goToNextStep },
  image,
}: TApprovedStepProps): JSX.Element {
  const [fullScreen, toggleFullScreen] = useToggle(false)

  if (fullScreen) {
    return <FullScreenImage image={image} onClose={toggleFullScreen} />
  }

  return (
    <ModalLayout
      title='NFT approved: “Diamonds in the sky”'
      titleClass='mb-3'
      fixedHeight
      leftColumnContent={
        <div className='flex-center'>
          <div className='relative flex-center'>
            <FullScreenButton onClick={toggleFullScreen} />
            <img
              src={image}
              className='rounded'
              style={{ maxWidth: '320px', maxHeight: '424px' }}
            />
          </div>
        </div>
      }
      rightColumnContent={
        <div className='h-full flex-between flex-col pt-5'>
          <div className='w-full space-y-4'>
            <InfoPair title='Patel rareness score' value='67%' />
            <InfoPair title='Internet rareness score' value='99%' />
            <InfoPair title='NSFW' value='100%' />
          </div>
          <div className='w-full'>
            <div className='bg-gray-f8 rounded-lg py-22px px-18px flex-between text-sm'>
              <div className='text-gray-71'>Final registration fee</div>
              <div className='text-gray-45 font-extrabold'>110,000 PSL</div>
            </div>
            <Button
              type='button'
              className='font-extrabold w-full mt-5'
              onClick={goToNextStep}
            >
              Proceed to final registration fee payment
            </Button>
          </div>
        </div>
      }
    />
  )
}
