import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';

const SidebarItem = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (anchor) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(!open);
    };


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100vh' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ backgroundColor: '#3b0764', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
            <List style={{ color: '#e9d5ff' }}>
                <ListItem onClick={() => { navigate('/'); setOpen(false); }} disablePadding style={{ backgroundColor: window.location.pathname === "/" ? "#6b21a8" : "" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Home</p>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => { navigate('/gener'); setOpen(false); }} disablePadding style={{ backgroundColor: window.location.pathname === "/gener" ? "#6b21a8" : "" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AutoStoriesIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Geners</p>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => { navigate('/create'); setOpen(false); }} disablePadding style={{ backgroundColor: window.location.pathname === "/create" ? "#6b21a8" : "" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Create Story</p>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => { navigate('/fav'); setOpen(false); }} disablePadding style={{ backgroundColor: window.location.pathname === "/fav" ? "#6b21a8" : "" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Favourites</p>
                    </ListItemButton>
                </ListItem>
            </List>
            <List style={{ color: '#e9d5ff' }}>
                <Divider sx={{ borderColor: '#7e22ce', marginBottom: 2 }} />
                <ListItem onClick={() => { navigate('/profile'); setOpen(false); }} disablePadding style={{ backgroundColor: window.location.pathname === "/profile" ? "#6b21a8" : "" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Profile</p>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => { navigate('/login'); setOpen(false); sessionStorage.removeItem('token') }} disablePadding style={{}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon sx={{ fontSize: 26, color: '#e9d5ff' }} />
                        </ListItemIcon>
                        <p style={{ padding: 3, margin: 5, fontSize: 20, fontWeight: 'bold' }}>Logout</p>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <div>
            <IconButton style={{ marginRight: 20, cursor: 'pointer' }} onClick={toggleDrawer('right', true)}>
                <WidgetsIcon sx={{ fontSize: 30, color: '#6b21a8' }} />
            </IconButton>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
};

export default SidebarItem;