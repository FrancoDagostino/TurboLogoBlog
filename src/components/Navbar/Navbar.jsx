import { Box } from '@mui/material'
import MuiButton from '@mui/material/Button/Button'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import arrow from '../../assets/img/chevron-down.svg';
const breakPoints = createBreakpoints({})
const pages = [
    {title:'Demos',arrow:true},
    {title:'Services',arrow:true},
    {title:'Pages',arrow:true},
    {title:'Portfolio',arrow:true},
    {title:'Blog',arrow:true},
    {title:'Contact',arrow:false},
]

const styles = {
    btnLink:{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '22px',
        textTransform: 'capitalize',
        color: '#000000',
        padding:'0',
        display:'flex',
        marginRight:'44px',
        marginTop:'20px',
        [breakPoints.up('md')] : {
            marginTop:'0px',
        }
    }
}

export const Navbar = () => {
  return (
    <Box sx={{flexGrow:1, display:{lg:'flex'}, justifyContent:'flex-end'}}>
        {pages.map((page,index)=>(
           <MuiButton key={index} sx={styles.btnLink}>
            {page.title}{page.arrow && (
                <img src={arrow} style={{marginLeft:'5px'}} alt='arrow'/>
            )}
           </MuiButton> 
        ))}
    </Box>
  )
}
