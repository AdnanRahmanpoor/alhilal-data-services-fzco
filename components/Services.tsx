import Image from 'next/image';

const Services = () => {
  return (
    <>
      <section  className='bg-[url(/Wave_2.svg)] bg-cover h-full pb-9'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:pb-10 lg:pt-0'>
          <div className='mx-auto max-w-lg text-center'>
            <h2 className='text-3xl font-bold sm:text-4xl text-[#071523]'>
              Our Services
            </h2>

            <p className='mt-4 text-black font-semibold text-xl'>
              Discover the efficiency of our specialized data entry services,
              meticulously crafted to meet the unique demands of your business.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
              <Image src='/enter.gif' alt='enter key' width={50} height={50} />

              <h2 className='mt-4 text-xl font-bold text-white'>Data Entry</h2>

              <p className='mt-3 text-sm text-white'>
                Quick and accurate data entry solutions, ensuring your
                information is efficiently organized with precision.
              </p>
            </div>

            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
              <Image src='/folder.gif' alt='folder' width={50} height={50} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Data Cleanup and Formatting
              </h2>

              <p className='mt-3 text-sm text-white'>
                Transforming raw data into a structured and organized data.
              </p>
            </div>

            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
              <Image src='/layers.gif' alt='folder' width={50} height={50} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Customized Data Solutions
              </h2>

              <p className='mt-3 text-sm text-white'>
                Tailoring data entry services to your specific requirements,
                ensuring seamless organization and efficient information
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
        <div id="features"></div>
      <svg
        id='visual'
        viewBox='0 0 1440 150'
        width='1440'
        height='150'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className='w-full h-full'
      >
        <rect x='0' y='0' width='1440' height='150' fill='#5c5c5c'></rect>
        <path
          d='M0 124L24 122.3C48 120.7 96 117.3 144 118C192 118.7 240 123.3 288 113.7C336 104 384 80 432 78.7C480 77.3 528 98.7 576 105C624 111.3 672 102.7 720 94.8C768 87 816 80 864 81.2C912 82.3 960 91.7 1008 98.8C1056 106 1104 111 1152 115.8C1200 120.7 1248 125.3 1296 121.5C1344 117.7 1392 105.3 1416 99.2L1440 93L1440 151L1416 151C1392 151 1344 151 1296 151C1248 151 1200 151 1152 151C1104 151 1056 151 1008 151C960 151 912 151 864 151C816 151 768 151 720 151C672 151 624 151 576 151C528 151 480 151 432 151C384 151 336 151 288 151C240 151 192 151 144 151C96 151 48 151 24 151L0 151Z'
          fill='#030a11'
          stroke-linecap='round'
          stroke-linejoin='miter'
        ></path>
      </svg>
    </>
  );
};

export default Services;
