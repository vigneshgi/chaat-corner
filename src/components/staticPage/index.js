
import Card from './Card'
import Category from './Category'
import Food from './Food'
import Hero from './Hero'
import Navbar from './Navbar'
import Qr from './Qr'

const StaticPage = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Qr />
        <Card />
        <Food />
        <Category />
      </>
    )
  }
  
  export default StaticPage