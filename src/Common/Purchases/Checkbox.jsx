import React from 'react'
import { FormControlLabel,Checkbox,Stack,Box,Typography,Button,TextField,Paper } from '@mui/material'
import { spacing } from '@mui/system';
import { positions } from '@mui/system';

export default function Checkboxfunction() {
    var bold={
      fontWeight:'bold',
      color:'#06004ce8'
    }
    var boxstyle={width:'max-content',
    textAlign:'center',
    border:'0.5px solid #02001e78',
    padding:'2rem',
    borderRadius:'0.5em',
    backgroundColor:'#adb1f330'
    }
  return (
    <div>
        {/* Basic language Paper */}
        <Box mt={5} ml={11.6} sx={{width:'fit-content',zIndex:'tooltip'}}>
          <Paper sx={{backgroundColor:'#06004ce8',color:'#fff', width:'fit-content', paddingX:'1.5em',paddingY:'0.5em',borderRadius:'6px'}}>
            <Typography variant='body1' component='p'>Basic Languages</Typography>
          </Paper>
        </Box>

        {/* All card contents wrapped inside this box */}
        <Box mt={-3.5} ml={6} sx={{width:'max-content',
          textAlign:'center',
          border:'0.5px solid #02001e78',
          padding:'2rem',
          borderRadius:'0.5em',
          backgroundColor:'#adb1f330',
          zIndex:'modal'}}>
            <Stack pt={2}>
                <Typography variant='h5' sx={bold}>6 Months plan for</Typography>
                <Typography variant='h5' sx={bold}>Two course</Typography>
                <Typography variant='h6' sx={bold}>$800/<Typography variant='caption' sx={bold}>member</Typography></Typography>
                
                <FormControlLabel sx={{color:'#06004ce8'}} control={<Checkbox color='success' sx={{color:'green'}}/>} label="Python"/>
                <FormControlLabel sx={{color:'#06004ce8'}} control={<Checkbox color='success' sx={{color:'green'}}/>} label="C"/>
                <FormControlLabel sx={{color:'#06004ce8'}} control={<Checkbox color='success' sx={{color:'green'}}/>} label="C++"/>
                <FormControlLabel sx={{color:'#06004ce8'}} control={<Checkbox color='success' sx={{color:'green'}}/>} label="Java"/>
                
                <Stack direction="row" spacing={2} sx={{marginTop:'1rem'}}>
                  <Typography variant='subtitle1' component='span' sx={bold}>No of Account</Typography>
                  <TextField className='textbox' size='small' sx={{width:'4.5rem'}}></TextField>
                </Stack>
                
                <Button  variant='contained' sx={{width:'fit-content', paddingLeft:'1.5rem',paddingRight:'1.5rem', backgroundColor:'#06004ce8',marginX:'auto',marginTop:'2rem'}}>Buy Now</Button>
            </Stack>
        </Box>
    </div>
  )
}
