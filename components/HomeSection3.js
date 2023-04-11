import Image from 'next/legacy/image'

const HomeSection3 = ({ title, subtitle, imagesSrc, managementList }) => (
  <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5 bg-gray-200 dark:bg-gray-800 rounded-lg">
    <h3 className="text-xl font-bold text-center">{title}</h3>
    <p className="text-md mt-2 italic text-center p-4">{subtitle}</p>
    {/** image list */}
    <div className="w-full container mx-auto px-5 py-2 lg:px-16 lg:pt-4 md:px-8">
      <div className="flex flex-wrap">
        {imagesSrc.map((value, index) => {
          return (
            <div key={index} className="sm:w-1/1 flex lg:w-1/5 md:w-1/3 w-full flex-wrap">
              <div className="p-1 md:p-2 w-full">
                <Image
                  src={value}
                  alt={'talents'}
                  width={400}
                  height={640}
                  objectFit={'cover'}
                  className="rounded-lg"
                  // style={"rounded-lg"}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
    {/** management list */}
    <div className="w-full container mx-auto px-5 py-2 lg:px-16 lg:pt-4 md:px-8">
      <div className="flex flex-wrap">
        {managementList.map((value, index) => {
          return (
            <div key={index} className="flex w-full md:w-1/2 lg:w-1/4 flex-wrap">
              <div className="p-1 md:p-2 w-full">
                <div className="relative">
                  <Image
                    src={value.image_src}
                    alt={'management'}
                    width={600}
                    height={600}
                    objectFit={'cover'}
                    className="rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-slate-100 dark:bg-slate-700 opacity-80">
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default HomeSection3
