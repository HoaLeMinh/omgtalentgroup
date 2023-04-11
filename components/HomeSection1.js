import Image from 'next/legacy/image'

const HomeSection1 = ({ title, subtitle, imgSrc }) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
    <div className="relative">
      <Image
        className={'rounded-t-lg'}
        src={imgSrc}
        alt={title}
        width={'1920'}
        height={'560'}
        objectFit="cover"
      />
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 px-4 py-2 bg-gray-800 opacity-70">
        <h3 className="text-xl text-white font-bold text-center">{title}</h3>
        <p className="text-md mt-2 italic text-white text-center">{subtitle}</p>
      </div>
    </div>
  </div>
  /*   <div className = 'mb-3'>
    <div className="relative">
        <img src={imgSrc} height="1200" />
        <div className= 'absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 opacity-60'>
          <div className='m-4'>
            <h1>{title}</h1>
            <p className="mt-2 text-sm italic">{subtitle}</p>
          </div>
        </div>
    </div>
  </div> */
)

export default HomeSection1
