import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleAltOutlined, Person2Outlined, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar, Tooltip, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Array1 = [
  {'text':'Dashboard', "icon":<HomeOutlinedIcon/> , 'path':'/'},
   {'text':'Manage team', "icon":<PeopleAltOutlined/> , 'path':'/team'},
  {'text':'Contacts', "icon":<ContactsOutlined/> , 'path':'/contacts'},
  {'text':'Inovices Balances', "icon":<ReceiptOutlined/> , 'path':'/invoices'}
];
const Array2 = [
  {
    text: "Profile Form",
    icon: <Person2Outlined />,
    path: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlined />,
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];

const Array3 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlined />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlined />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlined />,
    path: "/geography",
  },
];


export default function MyDrawer({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >

      
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>



     <Divider />
  <Avatar sx={{margin:'auto', height:60,
     width:60,marginTop:'10px',marginBottom:'8px',border:'3px solid #09c'}}
      alt="Remy Sharp" src="/images/user.webp" />
  <Typography align='center' variant='body1' fontSize={15}
  >redaSalem</Typography>
  <Typography align='center' variant='body1'
   fontSize={17} marginBottom={'7px'} color='green' fontWeight={600}
  >Admin</Typography>


      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding>
              <Tooltip title={item.text} placement="top-start">
            <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor:location.pathname===item.path ?
               theme.palette.mode === 'light'? '#dde5e5ff':'rgba(177, 5, 234, 1)':null
            }}
            onClick={()=>{
              navigate(item.path);
            }}
            >
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
              >
                {item.icon}
                </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

    <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding>
             <Tooltip title={item.text} placement="top-start">
            <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
               bgcolor:location.pathname===item.path ?
               theme.palette.mode === 'light'? '#dde5e5ff':'rgba(177, 5, 234, 1)':null
            }}
              onClick={()=>{
              navigate(item.path);
            }}
            >
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
              >{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
       <Divider />

     <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding>

         <Tooltip title={item.text} placement="top-start">
            <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
               bgcolor:location.pathname===item.path ?
               theme.palette.mode === 'light'? '#dde5e5ff':'rgba(177, 5, 234, 1)':null
            }}
              onClick={()=>{
              navigate(item.path);
            }}
            >
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
              >
                {item.icon}

              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            </Tooltip>

          </ListItem>
        ))}
      </List>


    </Drawer>
  );
}
