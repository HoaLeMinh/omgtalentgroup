import Image from 'next/legacy/image'
import Link from 'next/link'
import SocialIcon from '@/components/social-icons'

const TeamCard = ({ name, title, description, imgSrc, href, facebook }) => (
  <div className="w-full p-4 md:w-1/2 lg:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {/*             <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={400}
            /> */}
            <img src={imgSrc} alt={title} className={'object-cover'} />
          </Link>
        ) : (
          /*           <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={400}
          /> */
          <img src={imgSrc} alt={title} className={'object-cover'} />
        ))}
      <div className="p-6">
        <p className="text-md mb-3 italic leading-8 tracking-tight text-center">{title}</p>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-center">{name}</h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
        {facebook && (
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="facebook" href={facebook} size="8" />
          </div>
        )}
      </div>
    </div>
  </div>
)

export default TeamCard
