'use client'
import { MasonryGrid } from '@egjs/react-grid'
import Image from 'next/image'

const HomeSection5 = ({ title, imagesSrc }) => {
  return (
    <div className="w-full space-y-2 pt-6 pb-8 md:space-y-5">
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <div className={' min-height: 100vh; width: 100%;'}>
        <div className={'padding: 8px; width: 100%; auto 0; box-sizing: border-box;'}>
          <MasonryGrid
            key="network"
            className="container"
            gap={16}
            defaultDirection={'end'}
            align={'center'}
            column={0}
            columnSize={0}
            columnSizeRatio={0}
            onRenderComplete={(e) => {
              // console.log(e);
            }}
          >
            {imagesSrc.map((value, index) => {
              return (
                <>
                  <Image
                    key={`item-${index}`}
                    src={value.src}
                    alt={'item'}
                    width={90}
                    height={60}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </>
              )
            })}
          </MasonryGrid>
        </div>
      </div>
    </div>
  )
}

export default HomeSection5
