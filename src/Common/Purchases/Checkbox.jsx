import React from 'react'
import { FormControlLabel,Checkbox,Stack,Box,Typography,Button,TextField } from '@mui/material'
export default function Checkboxfunction() {
    var bold={fontWeight:'bold'}
  return (
    <div>
        <Box sx={{width:'max-content'}}>
            <Stack>
                <Typography variant='h5' sx={bold}>6 Months plan for</Typography>
                <Typography variant='h5' sx={bold}>Two course</Typography>
                <Typography variant='h6' sx={bold}>$800/<Typography variant='caption' sx={bold}>member</Typography></Typography>
                
                <FormControlLabel control={<Checkbox/>} label="Python"/>
                <FormControlLabel control={<Checkbox/>} label="C"/>
                <FormControlLabel control={<Checkbox/>} label="C++"/>
                <FormControlLabel control={<Checkbox/>} label="Java"/>
                
                <Typography variant='subtitle1' component='p' sx={bold}>No of Account</Typography>
                {/* <TextField sx={{width:'6rem',height:'1px'}}></TextField> */}
                {/* <br /><br /><br /><br /> <br /> */}
                <Button variant='contained' sx={{width:'fit-content', paddingLeft:'1.5rem',paddingRight:'1.5rem'}}>Buy Now</Button>
            </Stack>
        </Box>
    </div>
  )
}
