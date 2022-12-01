import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-scroll min-h-screen bg-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <nav className="border-b p-6  ">
        <p className="text-4xl text-white font-bold flex justify-center drop-shadow-md">GAME ASSET MARKETPLACE</p>
        <div className="flex mt-5 flex justify-center">
          <Link legacyBehavior href="/">
            <a className="mr-10 text-white font-bold  ">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/create-item">
            <a className="mr-10 text-white font-bold">
              Sell Game Asset
            </a>
          </Link>
          <Link legacyBehavior href="/my-assets">
            <a className="mr-10 text-white font-bold">
              My Digital Assets
            </a>
          </Link>
          <Link legacyBehavior href="/creator-dashboard">
            <a className="mr-13 text-white font-bold">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp