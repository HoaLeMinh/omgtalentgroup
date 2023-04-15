'use client'
import { PageSEO } from '@/components/SEO'
import hallOfFameData from '@/data/halloffameData'
import Image from 'next/image'

import LightGallery from 'lightgallery/react'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

export default function HallOfFamePage() {
  // console.log(`array length in js: ${hallOfFameData.imagesSrc.length}`)

  return (
    <>
      <PageSEO title={hallOfFameData.title} description={hallOfFameData.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 leading-10 md:text-6xl md:leading-14">
            {hallOfFameData.title}
          </h1>
          <p className="text-md mt-2 italic">{hallOfFameData.description}</p>
        </div>
        <div className="w-full pt-6 pb-8 space-y-4 flex justify-center">
          {/*           <Gallery images={hallOfFameData.imagesSrc} /> */}
          {/* <MyGallery /> */}
          {/* <MasonryGrid
              className="container"
              gap={5}
              defaultDirection={"end"}
              align={"center"}
              column={0}
              columnSize={0}
              columnSizeRatio={0}
              onRenderComplete={e => {
                // console.log(e);
              }}
            >
              {hallOfFameData.imagesSrc.map((value, index) => {
            return (
              <>
                <Image
                      key={`item-${index}`}
                      src={value}
                      alt={'item'}
                      width={320}
                      height={240}
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          objectFit: "contain"
                      }} />
              </>
            )
          })}
            </MasonryGrid> */}
          <LightGallery
            key="hall-of-fame"
            // elementClassNames="justified-gallery"
            mode="lg-fade"
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgVideo]}
            // plugins={[lgZoom]}
          >
            {hallOfFameData.imagesSrc.map((value, index) => {
              return (
                <a
                  data-lg-size={`${value.width}-${value.height}`}
                  className="gallery-item"
                  data-src={value.original}
                  key={`href-${index}`}
                >
                  {/*                   <Image
                    key={`image-${index}`}
                    src={value.src}
                    width={value.thumbWidth}
                    height={value.thumbHeight}
                    alt={'item'}
                    className={'img-responsive'}
                    style={{
                      objectFit: 'contain',
                      display: 'inline',
                    }}
                  /> */}
                  <img
                    key={`image-${index}`}
                    // alt={value.caption}
                    src={value.src}
                    className="img-responsive object-cover"
                    style={{ display: 'inline' }}
                  />
                </a>
              )
            })}
          </LightGallery>
        </div>
      </div>
    </>
  )
}
