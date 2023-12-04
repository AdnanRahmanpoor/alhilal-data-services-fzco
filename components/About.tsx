const About = () => {
  return (
    <>
      <section className='bg-[#ced6e1]'>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl font-bold sm:text-4xl text-black'>About Us</h2>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <img
                alt='Party'
                src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='lg:py-16'>
              <article className='space-y-4 text-gray-600'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
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
        className="w-full h-full"
      >
        <rect x='0' y='0' width='1440' height='150' fill='#ced6e1'></rect>
        <path
          d='M0 81L24 87.8C48 94.7 96 108.3 144 109.8C192 111.3 240 100.7 288 95.3C336 90 384 90 432 88C480 86 528 82 576 83.7C624 85.3 672 92.7 720 87.5C768 82.3 816 64.7 864 65.5C912 66.3 960 85.7 1008 90C1056 94.3 1104 83.7 1152 78.3C1200 73 1248 73 1296 76.3C1344 79.7 1392 86.3 1416 89.7L1440 93L1440 151L1416 151C1392 151 1344 151 1296 151C1248 151 1200 151 1152 151C1104 151 1056 151 1008 151C960 151 912 151 864 151C816 151 768 151 720 151C672 151 624 151 576 151C528 151 480 151 432 151C384 151 336 151 288 151C240 151 192 151 144 151C96 151 48 151 24 151L0 151Z'
          fill='#ffffff'
          stroke-linecap='round'
          stroke-linejoin='miter'
        ></path>
      </svg>
    </>
  );
};

export default About;
