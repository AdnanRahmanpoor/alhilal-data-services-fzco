import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/#services' },
  { name: 'About Us', href: '/#about' },
  { name: 'Contact Us', href: '/#contact' },
];

const Navbar = () => {
  return (
    <nav className='backdrop-filter backdrop-blur-lg bg-opacity-50 fixed w-full z-10 bg-black'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <Link className='block text-white' href='/'>
              <span className='font-black hover:italic'>AlHilal DS FZCO</span>
            </Link>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav aria-label='Global' className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                <li>
                  <Link
                    className='text-white-500 transition hover:text-white-500/75'
                    href='/'
                  >
                    {' '}
                    Home{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white-500 transition hover:text-white-500/75'
                    href='/'
                  >
                    {' '}
                    Services{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white-500 transition hover:text-white-500/75'
                    href='/'
                  >
                    {' '}
                    Features{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white-500 transition hover:text-white-500/75'
                    href='/'
                  >
                    {' '}
                    About Us{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white-500 transition hover:text-white-500/75'
                    href='/'
                  >
                    {' '}
                    Contact{' '}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <div className='block md:hidden'>
                <button className='rounded bg-white-100 p-2 text-white-600 transition hover:text-white-600/75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
