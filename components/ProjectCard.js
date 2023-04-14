import Image from 'next/legacy/image'

const ProjectCard = ({ id, title, description, imagesSrc }) => (
  <div className="md p-4 w-full md:w-1/2 lg:w-1/3">
    <div className="rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      <div id={id} className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {imagesSrc.map((value, index) => {
            return (
              <button
                key={index}
                type="button"
                data-bs-target={'#' + id}
                data-bs-slide-to={index}
                className={index == 0 ? 'ms-1 active' : 'ms-1'}
              ></button>
            )
          })}
        </div>

        <div className="carousel-inner">
          {imagesSrc.map((value, index) => {
            return (
              <div key={index} className={index == 0 ? 'carousel-item active' : 'carousel-item'}>
                {/*                 <Image
                  className={'rounded-t-md'}
                  src={value}
                  alt={'carousel image'}
                  width={600}
                  height={338}
                  objectFit={'cover'}
                /> */}
                <img
                  src={value}
                  alt={'carousel image'}
                  className={'rounded-t-md object-cover'}
                  width={600}
                  height={338}
                />
              </div>
            )
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={'#' + id}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={'#' + id}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </div>
)

export default ProjectCard
