import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})


export const styles = {
    contactUs:{
        padding: '44px 20px',
        textAlign:'left',

        [breakPoints.up('lg')]:{
            display:'flex',
            justifyContent:'center',
            padding:'200px 20px 190px'
        }
    },
    wrapper:{
        [breakPoints.up('lg')]:{
            maxWidth:'1240px',
            display:'flex',
            alignItems:'center',
            gap:'120px'
        },
    },

    info:{
        [breakPoints.up('md')]:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'20px',
            marginTop:'20px',
        },
    },

    form:{
        maxWidth:'613px',
        
        [breakPoints.up('sm')]:{
            margin:'auto',

        },
    },

    imgInfo:{
        width:'16px',
        height:'16px',
        mr:'4px',
    },

    titleInfo:(theme)=>({
        color:`${theme.palette.slateBlue.main}`,
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        textTransform:'capitalize',
        display:'flex',
        alignItems:'center',
        

    }),

    titleValue:{
        color:'#000000',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        marginTop:'3px',
    },

    itemBlockInfo:{
        marginBottom:'24px',
        flex:1,

    },
    input:(theme)=>({
        display:'flex',
        gap:'25px',
        flexDirection:'column',
        [breakPoints.up('lg')] : {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gasp:'20px'
        }
    }),

    TextField:{
        width:'300px',
        border:'2px solid #777FEB',
        '& input::placeholder':{
            fontSize:'20px',
            lineHeight:'20px',
            
        }

    },
    photo:{
        width:'100%',
        margin:'44px auto 0',
        maxWidth:'508px',
        display:'block',
    },
    textareaAutosize:{
        margin:'24px 0',
        padding:'12px',
        width:'100%',
        fontSize:'20px',
        lineHeight:'20px',
        border:'0.5px solid #777FEB',
        borderRaidus:'8px',
        outline:'none',
        boxSizing:'border-box'
    }
}