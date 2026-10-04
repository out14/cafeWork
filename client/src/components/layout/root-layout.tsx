import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Body } from './Body'

export function RootLayout() {
  return (
    <div className="mx-auto ">
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </div>
  )
}
