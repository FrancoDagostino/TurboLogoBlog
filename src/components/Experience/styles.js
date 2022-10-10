import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})
export const styles = 
{
    experience:{
        padding:'44px 20px',
        display:'flex',
        justifyContent: 'center',
        textAlign:'center',
        background:'#f5f5f5',
        [breakPoints.up('sm')] : {
            textAlign:'left',
        },
        [breakPoints.up('lg')] : {
            padding:'88px 20px',
        }
    },

    wrapper:{
        maxWidth:'1240px',
    },
    links:{
        flexGrow:1,
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'240px',
        gap:'20px',
        [breakPoints.up('sm')] : {
            gap:'40px',
            maxWidth:'100%',
        },
    },

    imgItem:{
        width:'100%',
        marginTop:'24px',
        maxWidth:'402px',
        [breakPoints.up('sm')] : {
            marginTop:'44px'
        },
    },
    
    contentTitle:{
        fontSize:'14px',
        lineHeight:'17px',
        marginTop:'12px',
        maxWidth:'402px',
        textAlign:'left',
        margin:'12px auto 0',
        fontFamily:'Montserrat,sans-serif',
        textTransform:'capitalize',
        [breakPoints.up('sm')] : {
            fontSize:'24px',
            lineHeight:'29px',
        },
    },
}
