import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakPoints = createBreakpoints({})

export const styles = {
    creativeDesign:(theme)=>({
        padding:'60px 20px 88px',
        textAlign:'center',
        [breakPoints.up('lg')] : {
            display:'flex',
            justifyContent:'center',
            padding:'192px 20px'
        }
    }),

    wrapper:(theme)=>({
        [breakPoints.up('md')] : {
            maxWidth:'1240px',
            alignItems:'center',
            gap:'35px'
        }
    }),
    stack:(theme)=>({
        marginTop:'44px',
        gap:'44px',
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'initial',
        justifyContent:'center',
        width:'100%',
        [breakPoints.up('lg')] : {
            maxWidth:'1240px',
            alignItems:'center',
            gap:'15px'
        }
    }),
}