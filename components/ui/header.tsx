import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import LogoImage from '/public/images/ZeroCrowdLogo1.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={LogoImage} width={100} height={405} alt="Features 01" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-black hover:text-gray-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdF6NVr8NMTyB-cZTTmdd_BCZ3wE2kBaO-IROr6RYyRQp2kIw/viewform" target="_blank" className="btn-sm menuAndButtons text-white zerocrowdBGColor1 hover:bg-gray-900 ml-3">
                  ENROLL NOW
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
