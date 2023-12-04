const Services = () => {
  return (
    <>
      <section className='bg-[url(/Wave_2.svg)] bg-cover h-full pb-9'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:pb-10 lg:pt-0'>
          <div className='mx-auto max-w-lg text-center'>
            <h2 className='text-3xl font-bold sm:text-4xl text-[#071523]'>
              Our Services
            </h2>

            <p className='mt-4 text-black'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-900 hover:shadow-blue-950/70'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>

              <h2 className='mt-4 text-xl font-bold text-white'>Services</h2>

              <p className='mt-1 text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </div>

            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-900 hover:shadow-blue-950/70'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-red-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>

              <h2 className='mt-4 text-xl font-bold text-white'>Services</h2>

              <p className='mt-1 text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </div>

            <div className='block rounded-xl border bg-[#071523] p-8 shadow-xl shadow-black/30 transition hover:border-blue-950 hover:shadow-blue-950/70'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-cyan-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>

              <h2 className='mt-4 text-xl font-bold text-white'>Services</h2>

              <p className='mt-1 text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </div>
          </div>
        </div>
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
