import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})
export const styles = 
{
    appBar:(theme)=>({
        background: '#fff',
        boxShadow:'none',
        maxWidth:'1024px',
        [breakPoints.up('lg')]: {
            borderBottom: '0.5px solid #777FEB',
            padding:'20px 0',
            margin:'auto',
            minWidth:'1240px'

        }
    }),
    container:(theme)=>({
        [breakPoints.up('lg')]: {
            padding:0,
            margin:0,
        }
    }),

    logoDesk:(theme)=>({
        mr:2,
        display:{xs:'none',lg:'flex'},
        flexGrow:1,
    }),

    logoMob:(theme)=>({
        mr:2,
        display:{xs:'flex',lg:'none'},
        flexGrow:1,
    }),
}

