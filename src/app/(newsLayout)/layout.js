import Footer from "@/components/Footer/Footer"
import TopNavbar from "@/components/Navbar/TopNavbar"
import Providers from "@/providers"
import { Inter } from "next/font/google"
import Toaster from "@/components/Toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const NewsLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-white`}>
        <Providers>
          <TopNavbar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
export default NewsLayout;