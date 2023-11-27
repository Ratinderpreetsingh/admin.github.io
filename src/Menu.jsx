import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText ,ListItemButton} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const menu=[
  {name:"Dashboard",path:'/',icon:<InboxIcon />},
  {name:"Users",path:'/users',icon:<InboxIcon />},
  {name:"Product",path:'/products',icon:<InboxIcon />},
  {name:"Category",path:'/category',icon:<InboxIcon />},
  {name:"Order",path:'/order',icon:<InboxIcon />},
  {name:"Settings",path:'/settings',icon:<InboxIcon />},



]
const Menu = () => {
  const navigate = useNavigate()
  return (
    <List>
    {
      menu.map((item,index)=>{
        return   <ListItem key={index} onClick={()=>navigate(item.path)} disablePadding >
        <ListItemButton>

        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText >
          {item.name}
        </ListItemText>
        </ListItemButton>
      </ListItem>
      })
    }
    
     
    </List>
  );
};

export default Menu;
