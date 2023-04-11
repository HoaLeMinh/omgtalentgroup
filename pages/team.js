import siteMetadata from '@/data/siteMetadata'
import teamData from '@/data/teamData'
import TeamCard from '@/components/TeamCard'
import { PageSEO } from '@/components/SEO'

export default function Team() {
  return (
    <>
      <PageSEO title={`Team - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Meet the Team
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {teamData.map((d) => (
              <TeamCard
                key={d.title}
                name={d.name}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                facebook={d.facebook}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
