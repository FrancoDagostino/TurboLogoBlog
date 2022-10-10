
import { Box, Button, CardActions, CardContent, List, ListItem, Typography } from '@mui/material'
import MuiCard from '@mui/material/Card'

import arrowRight from '../../assets/img/arrow-right.svg'

import strategy_svg from '../../assets/img/strategy.svg'
import design_svg from '../../assets/img/vector-art-and-design-svgrepo-com.svg'
import development_svg from '../../assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg'
import { styles } from './styles'

export const Card = ({title}) => {

    let svg = null

    switch(title){
        case 'Strategy':
            svg= strategy_svg
            break;
        case 'Product Design':
            svg=design_svg
            break;
        case 'Development':
            svg=development_svg
            break;
        default:
            return null
    }


  return (
    <MuiCard sx={styles.card}>
        <CardContent sx={{padding:0}}>
            <Box component='img' src={svg}/>
            <Typography variant='h3' sx={styles.title}>
                {title}
            </Typography>
            <List>
                <ListItem sx={styles.listItem}>
                    <Box component='img' src={arrowRight} sx={{marginRight: '3px'}}/>
                    product manegment
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Box component='img' src={arrowRight} sx={{marginRight: '3px'}}/>
                    mpv definition
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Box component='img' src={arrowRight} sx={{marginRight: '3px'}}/>
                    product strategy
                </ListItem>
            </List>
        </CardContent>
        <CardActions sx={{padding:0}}>
            <Button sx={styles.btn}>
                Read More
                <Box component='img' src={arrowRight}/>
            </Button>
        </CardActions>
    </MuiCard>
  )
}
