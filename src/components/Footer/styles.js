import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})

export const styles = {
    footer:{
        maxWidth:'1240px',
        padding:'44px 20px',
        textAlign:'left',
        margin:'auto',
        [breakPoints.up('lg')]:{
         padding:'88px 20px'
        }
    },
    gridWrapper:{
        padding:'44px 0px',
        borderTop:'0.5px solid #777FEB',
        borderBottom: '0.5px solid #777FEB',
        rowGap:'24px',
        [breakPoints.up('lg')]:{
            padding:'88px 0px'
        }
    },

    linkTitle:{
        fontWeight:700,
        fontSize:'24px',
        lineHeight:'20px'
    },

    title:{
        fontWeight:500,
        fontSize:'24px',
        lineHeight:'29px',
        [breakPoints.up('lg')]:{
            fontSize:'48px',
            lineHeight:'59px',
        }
    },

    text:{
        fontWeight:500,
        fontSize:'16px',
        lineHeight:'28px',
        marginTop:'24px',
        color:'#000000',
        textTransform:'capitalize',
        
        [breakPoints.up('lg')]:{
            fontSize:'16px',
            lineHeight:'28px',
        }
    },

    paper:{
        p:'8px',
        display:'flex',
        alignItems:'center',
        background:'#F5F5F5',
        borderRaidus:'8px',
        boxShadow:'none',
        marginTop:'20px'
    },
    btn:{
        background:'#777FEB',
        borderRaidus:'8px',
        fontWeight:700,
        fontSize:'16px',
        lineHeight:'20px',
        textTransform:'capitalize',
        color:'#fff',
        p:'12px',
        width:'131px'
    },
    itemList:{
        p:'12px 0',
        color:'#686868',
        fontWeight:500,
        fontSize:'16px',
        lineHeight:'20px',
        textTransform:'capitalize',
    },

    subscribeFooter:{
        width:'100%',
        maxWidth:'372px',
        [breakPoints.up('lg')]:{
            maxWidth:'372px'
        }
    },
    icon:{
        width:'16px',
        height:'16px',
        color:'#777FEB'
    },

    emailBlock:{
        [breakPoints.up('lg')]:{

            display:'flex',
            justifyContent:'flex-end'
        }
    },

    inputBase:{
        ml:1,
        flex:1,
        '& input::placeholder':{
            fontSize:'20px',
            lineHeight:'20px'
        }
    }
}