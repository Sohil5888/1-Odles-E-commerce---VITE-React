import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './GlobalStyle'
import SingleProduct from './SingleProduct'
import Error from './Error'
import GoTop from './Components/GoTop'

function App() {

  // const theme = {
  //   colors: {
  //     heading: "rgb(24 24 29)",
  //     text: "rgb(24 24 29)",
  //     white: "#fff",
  //     black: " #212529",
  //     helper: "#8490ff",
  //     bg: "rgb(249 249 255)",
  //     footer_bg: "#0a1435",
  //     btn: "rgb(98 84 243)",
  //     border: "rgba(98, 84, 243, 0.5)",
  //     hr: "#ffffff",
  //     gradient:
  //       "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
  //     shadow:
  //       "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
  //     shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  //   },
  //   media: { mobile: "768px", tab: "998px" },
  // };


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
          <GoTop />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
