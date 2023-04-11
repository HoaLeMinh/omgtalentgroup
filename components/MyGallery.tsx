'use client'
// import { useState } from "react";
import hallOfFameData from '@/data/halloffameData'
import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const MyGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100%',
    maxHeight: '100%',
  }
  const imagesSrc = hallOfFameData.imagesSrc
  return (
    <Gallery withCaption>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '320px 170px 240px 200px',
          gridTemplateRows: '240px 170px 200px 180x',
          gridGap: 12,
        }}
      >
        {imagesSrc.map((value, index) => {
          return (
            <>
              <Item
                id={`item-${index}`}
                original={value.original}
                thumbnail={value.src}
                width={value.width}
                height={value.height}
                alt={value.caption}
                // No `caption` there
              >
                {({ ref, open }) => (
                  <img
                    style={smallItemStyles}
                    src={value.original}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                )}
              </Item>
            </>
          )
        })}
      </div>
    </Gallery>
  )
}

export default MyGallery

/* import { useState } from "react";
import { Gallery} from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {CustomImage} from "@/components/CustomImage"
import hallOfFameData from '@/data/halloffameData'

// export default function MyGallery(images: CustomImage[]) {
export const MyGallery = () => {
  const [index, setIndex] = useState(-1);

  var images : Array<CustomImage> = hallOfFameData.imagesSrc;
  console.log(`image length: ${images.length}`);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
} */
