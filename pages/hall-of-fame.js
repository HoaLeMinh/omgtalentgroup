'use client'
import { PageSEO } from '@/components/SEO'
import hallOfFameData from '@/data/halloffameData'
import { MyGallery } from '@/components/MyGallery'
// import { Gallery, Image } from "react-grid-gallery"

export default function HallOfFamePage() {
  console.log(`array length in js: ${hallOfFameData.imagesSrc.length}`)

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
        <div className="pt-6 pb-8">
          {/*           <Gallery images={hallOfFameData.imagesSrc} /> */}
          <MyGallery />
        </div>
      </div>
    </>
  )
}
