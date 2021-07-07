import React from 'react'
import { TNFTData, TAddNFTState } from '../AddNFT.state'
import ModalLayout from '../ModalLayout'
import { ArrowSlim } from 'common/components/Icons/ArrowSlim'
import { Button } from 'common/components/Buttons'
import { useToggle } from 'react-use'
import FullScreenImage from 'common/components/FullScreenImage/FullScreenImage'
import FullScreenButton from '../fullScreenButton/FullScreenButton'
import Toggle from 'common/components/Toggle'

const InfoPair = ({ title, value }: { title: string; value: string }) => (
  <div className='flex'>
    <div className='text-gray-71 w-36'>{title}</div>
    <div className='text-gray-4a font-medium'>{value}</div>
  </div>
)

type TSubmitStepProps = {
  state: TAddNFTState
  image: string
  nftData: TNFTData
}

export default function SubmitStep({
  state: { goBack, goToNextStep },
  image,
  nftData,
}: TSubmitStepProps): JSX.Element {
  const [fullScreen, toggleFullScreen] = useToggle(false)

  if (fullScreen) {
    return <FullScreenImage image={image} onClose={toggleFullScreen} />
  }

  return (
    <ModalLayout
      title='Submit NFT'
      titleClass='mb-3'
      subtitle='Description'
      step={4}
      leftColumnContent={
        <div className='flex-center'>
          <div className='relative flex-center'>
            <FullScreenButton onClick={toggleFullScreen} />
            <img src={image} className='rounded max-w-[320px] max-h-[410px]' />
          </div>
        </div>
      }
      rightColumnContent={
        <>
          <div className='w-full text-sm'>
            <div className='space-y-14px'>
              <InfoPair title='Title' value={nftData.title} />
              <InfoPair
                title='Keyword Hashtags'
                value={nftData.hashtags.join(', ')}
              />
              {nftData.series && (
                <InfoPair title='Series' value={nftData.series} />
              )}
              {/* TODO: figure out what to display in Copies */}
              <InfoPair title='Copies' value={`1 of ${nftData.copies}`} />
              <InfoPair
                title='Perpetual Royalty'
                value={`${nftData.royalty}%`}
              />
              {nftData.website && (
                <InfoPair title="Creator's website" value={nftData.website} />
              )}
              {nftData.video && (
                <InfoPair title='Creation video' value={nftData.video} />
              )}
              <div className='flex items-center'>
                <div className='text-gray-71 mr-3'>GreenNFT</div>
                <Toggle selected={nftData.green} />
              </div>
            </div>
            {nftData.description && (
              <div className='mt-4 text-blue-3f'>{nftData.description}</div>
            )}
            <div className='bg-gray-f8 rounded-lg py-4 mt-3'>
              <div className='flex text-gray-71'>
                <div className='pl-5 w-36'>Image size</div>
                <div>Estimated registration fee</div>
              </div>
              <div className='flex text-gray-4a font-extrabold mt-3'>
                <div className='pl-5 w-36'>50 mb</div>
                <div>5,000 PSL</div>
              </div>
            </div>
          </div>
          <div className='flex-between mt-3'>
            <button
              type='button'
              className='rounded-full w-10 h-10 flex-center text-gray-b0 border border-gray-b0 transition duration-200 hover:text-gray-a0 hover:border-gray-a0'
              onClick={goBack}
            >
              <ArrowSlim to='left' size={14} />
            </button>
            <Button
              type='button'
              className='font-extrabold px-3'
              onClick={goToNextStep}
            >
              Submit and proceed to fee payment
            </Button>
          </div>
        </>
      }
    />
  )
}
