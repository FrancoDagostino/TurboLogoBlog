
import { Box,Stack, Typography } from '@mui/material'

import { Card } from '../Card/Card'
import { styles } from './styles'

const data = [
  {title:'Strategy'},
  {title:'Product Design'},
  {title:'Development'},
]

export const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
        <Box sx={styles.wrapper}>
            <Typography variant='h2' sx={{textTransform:'capitalize',margin:'25px 0'}}>creative design solutions</Typography>
            <Typography variant='body1' sx={{textTransform:'capitalize',margin:'25px 0'}}>professional deign agency to provide solutions </Typography>
            <Stack sx={styles.stack}>
                {data.map((item,index)=>(
                    <Card title={item.title}  key={index}/>
                ))}
            </Stack>
        </Box>
    </Box>
  )
}
