import { Box } from '@mui/material'
import { ContactUs } from './components/ContactUs/ContactUs'

import { CreativeDesign } from './components/CreativeDesign/CreativeDesign'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
export const App = () => {
  return (
    <Box>
        <Header/>
        <Hero/>
        <CreativeDesign/>
        <Experience/>
        <ContactUs/>
        <Footer/>
    </Box>
  )
}
