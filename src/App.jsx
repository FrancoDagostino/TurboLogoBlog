import { Box } from '@mui/material'

import { CreativeDesign } from './components/CreativeDesign/CreativeDesign'
import { Experience } from './components/Experience/Experience'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
export const App = () => {
  return (
    <Box>
        <Header/>
        <Hero/>
        <CreativeDesign/>
        <Experience/>
    </Box>
  )
}
