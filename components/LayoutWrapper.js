import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.000000pt"
                    height="50.000000pt"
                    viewBox="0 0 1001.000000 894.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,894.000000) scale(0.100000,-0.100000)"
                      fill={'#00ADB5'}
                      stroke="none"
                    >
                      <path
                        d="M464 8440 c-25 -13 -49 -35 -62 -59 -21 -37 -22 -49 -22 -341 0 -292
                      1 -304 22 -341 14 -25 37 -46 63 -59 41 -20 62 -20 1238 -20 l1197 0 0 -3581
                      c0 -3283 1 -3584 16 -3615 9 -19 31 -44 48 -57 30 -22 37 -22 336 -22 299 0
                      306 0 336 22 17 13 39 38 48 57 15 31 16 332 16 3615 l0 3581 520 0 520 0 0
                      -3577 c0 -3529 0 -3578 20 -3610 41 -68 42 -68 370 -68 328 0 329 0 370 68 19
                      31 20 61 20 1289 0 1209 1 1258 19 1290 10 18 168 325 351 682 259 504 335
                      645 342 630 18 -44 1148 -3873 1148 -3891 0 -26 34 -61 67 -69 33 -9 29 -9
                      385 -6 319 2 328 4 328 54 0 12 8 30 17 40 19 21 14 40 -92 388 -118 385
                      -1335 4501 -1335 4513 0 8 260 520 578 1138 l579 1124 854 5 c818 5 855 6 886
                      24 17 11 41 36 52 56 20 36 21 52 21 340 0 292 -1 304 -22 341 -14 25 -37 46
                      -63 59 -41 20 -62 20 -4586 20 -4537 0 -4544 0 -4585 -20z m6551 -837 c-6 -19
                      -1306 -2549 -1427 -2778 l-68 -130 0 1463 0 1462 751 0 c711 0 751 -1 744 -17z"
                      />
                    </g>
                  </svg>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
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
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
