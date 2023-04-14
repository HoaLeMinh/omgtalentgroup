import aboutData from '@/data/aboutData'
import { PageSEO } from '@/components/SEO'
import Image from 'next/legacy/image'

export default function About() {
  return (
    <>
      <PageSEO title={`${aboutData.title}`} description={`${aboutData.description}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {aboutData.title}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            {/*             <Image
              src={aboutData.imageSrc}
              alt={aboutData.title}
              width={800}
              height={520}
              objectFit={'cover'}
              className="rounded-md"
            /> */}
            <img
              src={aboutData.imageSrc}
              alt={aboutData.title}
              className={'object-cover rounded-md'}
              width={800}
              height={520}
            />
          </div>
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark xl:col-span-1">
            {aboutData.description.split('\n').map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
