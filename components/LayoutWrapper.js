import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Logo from '@/data/omg-logo.svg'
import Link from 'next/link'
// import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/legacy/image'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {/* <Logo /> */}
                  <Image
                    src={siteMetadata.siteLogo}
                    alt="Logo"
                    width={113}
                    height={55}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden xl:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <ThemeSwitcher />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWrapper
