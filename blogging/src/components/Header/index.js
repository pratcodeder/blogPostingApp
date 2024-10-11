import { useNavigate,useLocation } from "react-router-dom";
import {Button,Typography,Toolbar,Box ,AppBar } from '@mui/material';
import * as React from 'react';

import {Link} from '@mui/material/';





const Header = () =>{
  


  
    return (
        <div>
         
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#3c8a37"}}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight : 600 }}>
            BLOGGER
          </Typography>

    
        
      

     
      <>
        <Button color="inherit"><Link underline="none" color="#fff" href="">Login</Link></Button>
        <Button color="inherit"><Link underline="none" color="#fff" href="">Register</Link></Button>
        </>
      
         
      
      


        </Toolbar>
      </AppBar>
    
  
    </Box>
    </div>
    )
};

export default Header;