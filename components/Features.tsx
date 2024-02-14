import Image from 'next/image';

const Features = () => {
  return (
    <>
      <section className='bg-[url(/Wave_3.svg)] bg-cover h-full'>
        <div className='backdrop-brightness-50'>
          <div className='mx-auto max-w-screen-xl px-8 py-16 sm:px-6 sm:py-12 lg:px-8 lg:pb-16 lg:pt-4'>
            <div className='max-w-xl mx-auto text-center'>
              <h2 className='text-3xl font-bold sm:text-4xl'>
                What makes us special
              </h2>

              <p className='mt-4 text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolores iure fugit totam iste obcaecati. Consequatur
                ipsa quod ipsum sequi culpa delectus, cumque id tenetur
                quibusdam, quos fuga minima.
              </p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
              <div className='flex items-start gap-4 rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
                <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                  <Image src='/check.gif' alt='server' width={50} height={50} />
                </span>

                <div>
                  <h2 className='text-lg font-bold'>Data Accuracy Guarantee</h2>

                  <p className='mt-1 text-sm text-gray-300 text-start'>
                    Confidence in every detail. Benefit from our data accuracy
                    guarantee, assuring precise and error-free results in every
                    data entry task.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
                <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                  <Image
                    src='/server.gif'
                    alt='server'
                    width={50}
                    height={50}
                  />
                </span>
                <div>
                  <h2 className='text-lg font-bold'>Continuous Data Backup</h2>

                  <p className='mt-1 text-sm text-gray-300 text-start'>
                    Seamless data security with continuous backup, done
                    regularly for constant resilience against potential data
                    disruptions.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
                <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                  <Image src='/coins.gif' height={50} width={50} alt={''} />
                </span>

                <div>
                  <h2 className='text-lg font-bold'>
                    Flexible and Client-Set Pricing
                  </h2>

                  <p className='mt-1 text-sm text-gray-300 text-start'>
                    Tailor the cost of our data entry services to fit your
                    budget, ensuring affordability and transparency in every
                    transaction. Your business, your terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="aboutus"></div>
      <svg
        id='visual'
        viewBox='0 0 1440 150'
        width='1440'
        height='150'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className='w-full h-full'
      >
        <rect x='0' y='0' width='1440' height='150' fill='#05131d'></rect>
        <path
          d='M0 63L24 71.3C48 79.7 96 96.3 144 107.3C192 118.3 240 123.7 288 115.2C336 106.7 384 84.3 432 72.8C480 61.3 528 60.7 576 68C624 75.3 672 90.7 720 98C768 105.3 816 104.7 864 98C912 91.3 960 78.7 1008 73.7C1056 68.7 1104 71.3 1152 76.7C1200 82 1248 90 1296 97.2C1344 104.3 1392 110.7 1416 113.8L1440 117L1440 151L1416 151C1392 151 1344 151 1296 151C1248 151 1200 151 1152 151C1104 151 1056 151 1008 151C960 151 912 151 864 151C816 151 768 151 720 151C672 151 624 151 576 151C528 151 480 151 432 151C384 151 336 151 288 151C240 151 192 151 144 151C96 151 48 151 24 151L0 151Z'
          fill='#ced6e1'
          stroke-linecap='round'
          stroke-linejoin='miter'
        ></path>
      </svg>
    </>
  );
};

export default Features;
