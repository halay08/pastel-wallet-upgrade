import React, { useEffect, useRef } from 'react'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
import { CroppedImage, getCroppedImage, loadImage } from './PreviewStep.service'
import { Button } from 'common/components/Buttons'

type CropperModalProps = {
  image: string
  croppedImage: CroppedImage
  setCroppedImage(croppedImage: CroppedImage): void
  onClose(): void
}

const paddingX = 100
const paddingY = 200

const minSizeFraction = 0.25

export default function Cropping({
  image,
  croppedImage,
  setCroppedImage,
  onClose,
}: CropperModalProps): JSX.Element {
  const imageRef = useRef<HTMLImageElement>(null)
  const cropperRef = useRef<Cropper>()

  useEffect(() => {
    const img = imageRef.current
    if (!img) {
      return
    }

    cropperRef.current?.destroy()

    const maxWidth = document.body.offsetWidth - paddingX
    img.style.maxWidth = `${maxWidth}px`

    const maxHeight = document.body.offsetHeight - paddingY
    img.style.maxHeight = `${maxHeight}px`

    const minSize =
      Math.max(img.offsetWidth, img.offsetHeight) * minSizeFraction

    const cropper = new Cropper(img, {
      aspectRatio: 1,
      viewMode: 1,
      autoCrop: true,
      zoomable: false,
      minCropBoxWidth: minSize,
      minCropBoxHeight: minSize,
      ready() {
        cropper.setData(croppedImage.crop)
      },
    })

    cropperRef.current = cropper

    return () => {
      cropperRef.current?.destroy()
    }
  }, [])

  const submit = async () => {
    const cropper = cropperRef.current
    if (!cropper) {
      return
    }

    const img = await loadImage(image)
    const crop = cropper.getData()
    setCroppedImage(getCroppedImage(img, crop))
    onClose()
  }

  return (
    <div className='bg-white rounded-md p-5 text-center'>
      <div className='flex-center'>
        <div>
          <img ref={imageRef} src={image} />
        </div>
      </div>
      <div
        className='flex relative z-10 space-x-5 pt-5 mx-auto min-w-xs'
        hidden
      >
        <Button secondary className='w-1/2' onClick={onClose}>
          Cancel
        </Button>
        <Button className='w-1/2' onClick={submit}>
          Accept
        </Button>
      </div>
    </div>
  )
}
