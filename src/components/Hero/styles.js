import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})
export const styles = 
{
    hero:(theme)=>({
        padding:'20px',
        [breakPoints.up('md')] : {
            display:'flex',
            justifyContent: 'center',
            padding: '44px 20px 20px '

        } 

    }),
    wrapper:(theme)=>({
        padding:'20px',
        [breakPoints.up('md')]: {
            maxWidth: '1240px',
            display:'flex',
            alignItems:'center',
            gap:'35px'
        }
    }),

    photo:(theme)=>({
        width:'100%',
        maxWidth:'509px',
        display:'block',
        margin:'44px auto 0',

    }),

    text:(theme)=>({
        margin:'25px 0',
        [breakPoints.up('md')]: {
            marginBootom:'44px'
        }
    }),
}