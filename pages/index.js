'use client'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import HomeSection1 from '@/components/HomeSection1'
import HomeSection2 from '@/components/HomeSection2'
import HomeSection3 from '@/components/HomeSection3'
import HomeSection5 from '@/components/HomeSection5'
import homeData from '@/data/homeData'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* Section 1: banner*/}
      <HomeSection1
        imgSrc={homeData.section_1.imageSrc}
        title={homeData.section_1.title}
        subtitle={homeData.section_1.subtitle}
      />
      {/* Section 2: about*/}
      <HomeSection2
        buttonCaption={homeData.section_2.button_caption}
        href={homeData.section_2.href}
        title={homeData.section_2.title}
        subtitle={homeData.section_2.subtitle}
      />
      {/* Section 3: group*/}
      <HomeSection3
        title={homeData.section_3.title}
        subtitle={homeData.section_3.subtitle}
        imagesSrc={homeData.section_3.images_src}
        managementList={homeData.section_3.managements}
      />
      {/* Section 4: story*/}
      <HomeSection2
        buttonCaption={homeData.section_4.button_caption}
        href={homeData.section_4.href}
        title={homeData.section_4.title}
        subtitle={homeData.section_4.subtitle}
      />
      {/* Section 5: network*/}
      <HomeSection5 title={homeData.section_5.title} imagesSrc={homeData.section_5.images_src} />

      {/*       {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
