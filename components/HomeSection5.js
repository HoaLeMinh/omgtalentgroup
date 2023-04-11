'use client'
import { Masonry } from 'masonic'
import { useEffect, useState } from 'react'

const HomeSection5 = ({ title, imagesSrc }) => {
  const [images, setImages] = useState([])
  useEffect(() => setImages(imagesSrc))
  return (
    <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <div className={' min-height: 100vh; width: 100%;'}>
        <div
          className={'padding: 8px; width: 100%; max-width: 960px; auto 0; box-sizing: border-box;'}
        >
          <Masonry
            // Provides the data for our grid items
            items={images}
            // Adds 8px of space between the grid cells
            columnGutter={8}
            // Sets the minimum column width to 172px
            columnWidth={172}
            // Pre-renders 5 windows worth of content
            overscanBy={5}
            // This is the grid item component
            render={ItemBuilder}
          />
        </div>
      </div>
    </div>
  )
}

const ItemBuilder = ({ data: { src, width, height } }) => {
  // console.log(`ItemBuilder img src: ${src}`);
  return (
    /*   <>
  <Image 
    src={src}
    alt={"Network"}
    width={width}
    height={height}
    objectFit='contain'
  />
  </> */
    <img className={"objectFit:'contain'"} alt="Network" src={src} width={width} height={height} />
  )
}

/* import { Gallery, StyleProp} from "react-grid-gallery"
import { transparent } from "tailwindcss/colors"

const HomeSection5 = ({ title, imagesSrc}) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <Gallery
        id={'network'}
        images={imagesSrc}
        enableImageSelection={false}
        rowHeight={84}
        margin={8}
        thumbnailStyle={{
          objectFit: 'contain',
          maxWidth: '100%',
        }}
        // tileViewportStyle = {{background:transparent}}
      />
  </div>
) */

/* import Image from "next/legacy/image"

const HomeSection5 = ({ title, imagesSrc}) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
      <h3 className="text-xl font-bold text-center">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
      {imagesSrc.map((value, index) => {
        return (
            <div key={index}>
                    <Image
                      src={value}
                      alt={title}
                      width={156}
                      height={84}
                      objectFit='contain'
                      style={{
                          maxWidth: "100%",
                          height: "auto"
                      }} />
            </div>
          );
      })}
    </div>
  </div>
) */

export default HomeSection5
