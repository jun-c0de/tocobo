import Header from "./components/Header"
import Footer from "./components/Footer"
import Brand from "./sections/Brand"
import Hero from "./sections/Hero"
import Products from "./sections/Products"
import Reviews from "./sections/Reviews"
import Cta from "./sections/Cta"
import "./styles/main.scss"

function App() {

  return (
    <div>
      <Header/>
      <main>
        <section id="Hero">
          <Hero/>
        </section>
        <section id="Brand">
          <Brand/>
        </section>
        <section id="Products">
          <Products/>
        </section>
        <section id="Reviews">
          <Reviews/>
        </section>
        <section id="Cta">
          <Cta/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
