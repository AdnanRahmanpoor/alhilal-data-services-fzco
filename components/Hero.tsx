import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

const Hero = () => {
  return (
    <>
      <section className='bg-[url(/Wave.svg)] bg-cover h-full'>
        <div className='backdrop-brightness-50'>
          <div className='mx-auto max-w-screen-xl px-8 pt-16 sm:px-6 sm:py-12 lg:px-8 lg:pt-32 lg:pb-0'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
              <div className='relative overflow-hidden rounded-lg sm:h-full md:h-full lg:order-last lg:h-full'>
                <Image
                  src='/hero-data.png'
                  alt='hero-data'
                  width={612}
                  height={408}
                />
              </div>

              <div className='lg:py-24'>
                <Reveal>
                  <h2 className='text-3xl font-bold sm:text-4xl'>
                    Al Hilal Data Services - FZCO
                  </h2>

                <p className='mt-4 text-gray-400 text-2xl'>
                  Efficient Data Solutions for Your Business
                </p>
                </Reveal>

                <Reveal>

                <Link
                  href='#'
                  className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                  Email Us
                </Link>
                <Link
                  href='#'
                  className='ml-8 mt-8 inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                  Whatsapp
                </Link>
                  </Reveal>
              </div>
            </div>
          </div>
        </div>
        <div id='services'></div>
      </section>
      <svg
        id='visual'
        viewBox='0 0 1440 150'
        width='1440'
        height='150'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className='w-full h-full'
      >
        <rect x='0' y='0' width='1440' height='150' fill='#0f2741'></rect>
        <path
          d='M0 79L24 85.8C48 92.7 96 106.3 144 101.2C192 96 240 72 288 60.2C336 48.3 384 48.7 432 55.5C480 62.3 528 75.7 576 76.3C624 77 672 65 720 70.5C768 76 816 99 864 101.7C912 104.3 960 86.7 1008 76.7C1056 66.7 1104 64.3 1152 66C1200 67.7 1248 73.3 1296 79.3C1344 85.3 1392 91.7 1416 94.8L1440 98L1440 151L1416 151C1392 151 1344 151 1296 151C1248 151 1200 151 1152 151C1104 151 1056 151 1008 151C960 151 912 151 864 151C816 151 768 151 720 151C672 151 624 151 576 151C528 151 480 151 432 151C384 151 336 151 288 151C240 151 192 151 144 151C96 151 48 151 24 151L0 151Z'
          fill='#dcdcdc'
          strokeLinecap='round'
          strokeLinejoin='miter'
        ></path>
      </svg>
      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240'>
        <rect x='0' y='0' width='1440' height='245' fill='#354d72'></rect>
        <path
          fill-opacity='1'
          d='M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,181.3C480,171,549,181,617,186.7C685.7,192,754,192,823,170.7C891.4,149,960,107,1029,80C1097.1,53,1166,43,1234,53.3C1302.9,64,1371,96,1406,112L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z '
          fill='#0f2741'
          stroke-linecap='round'
          stroke-linejoin='miter'
        ></path>
      </svg> */}
    </>
  );
};

export default Hero;
