import { useNavigate,useLocation } from "react-router-dom";
import {Button,Typography,Toolbar,Box ,AppBar } from '@mui/material';
import * as React from 'react';
import Login from "../Login";
import {Link} from '@mui/material/';





const Header = () =>{
  
  const path = window.location.pathname;

  
    return (
        <div>
         
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#3c8a37"}}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight : 600 }}>
            BLOGGER
          </Typography>

    
        
          <>
{ path==="/" && 
      <>

        <Button color="inherit"><Link underline="none" color="#fff" href="/login">Login</Link></Button>
        <Button color="inherit"><Link underline="none" color="#fff" href="/register">Register</Link></Button>
        </>
      }
      
      {path==="/login" && 
   <>
   <Button color="inherit"><Link underline="none" color="#fff" href="/">Home</Link></Button>
   <Button color="inherit"><Link underline="none" color="#fff" href="/register">Register</Link></Button>
   </>     
}
         
      </>
      


        </Toolbar>
      </AppBar>
    
  
    </Box>
    </div>
    )
};

export default Header;