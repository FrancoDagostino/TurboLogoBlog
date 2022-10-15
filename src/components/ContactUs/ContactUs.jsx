
import {Button as ButtonCustom} from '../Button/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import photo_send from '../../assets/img/photo_send_2.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { styles } from './styles';
import { Box, TextareaAutosize, TextField, Typography } from '@mui/material';
import { MailOutlineOutlined } from '@mui/icons-material';

export const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
        <Box sx={styles.wrapper}>
            <Box sx={styles.form}>
                <Typography variant='h2' sx={{textTransform:'capitalize'}}>mind! contact us</Typography>
                <Typography variant='body1' sx={{textTransform:'capitalize'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fermentum, sagittis eget facilisi in in urna tristique risus. 
                    Tortor consectetur nulla pretium malesuada porttitor.
                </Typography>
                <Box sx={styles.info}>
                    <Box sx={styles.itemBlockInfo}>
                        <Box sx={styles.titleInfo}>
                            <MailOutlineOutlined sx={styles.imgInfo}/>
                            email us
                        </Box>
                        <Box sx={styles.titleValue}>
                            support@gmail.com
                        </Box>
                    </Box>
                    <Box sx={styles.itemBlockInfo}>
                        <Box sx={styles.titleInfo}>
                            <LocalPhoneIcon sx={styles.imgInfo}/>
                            phone us
                        </Box>
                        <Box sx={styles.titleValue}>
                            +012 (345) 67 89
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.input}>
                    <TextField placeholder='Full name' sx={styles.TextField}/>
                    <TextField placeholder='Email address' sx={styles.TextField}/>
                </Box>
                <TextareaAutosize minRows={6} placeholder='write message' style={styles.textareaAutosize}/>
                <ButtonCustom>send us message <ArrowForwardIosIcon/> </ButtonCustom>
            </Box>
            <Box>
                <Box component='img' src={photo_send} sx={styles.photo}/>
            </Box>
        </Box>
    </Box>
  )
}
