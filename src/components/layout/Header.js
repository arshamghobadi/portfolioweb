import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Chip,
  Toolbar,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MdPhone from '@mui/icons-material/Phone';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});
const drawerWidth = 240;
const navItems = ['About-me', 'Blogs', 'portfolio'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography textDecoration="none" variant="h6" sx={{ my: 2 }}>
        <Link
          style={{
            textDecoration: 'none',
            color: '#202020',
          }}
          to={'/'}
        >
          HomePage
        </Link>
      </Typography>
      <Divider />
      <ThemeProvider theme={theme}>
        <a
          style={{
            display: 'flex',
            paddingTop: '15px',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#E4D8B4',
          }}
          href="tel:+447518503552"
        >
          <Chip icon={<MdPhone />} label="Call me" />
        </a>
      </ThemeProvider>
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#202020',
                }}
                to={`/${item}`}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: '#7D7259', color: '#E4D8B4' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: '#E4D8B4',
              }}
              to={'/'}
            >
              HomePage
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ThemeProvider theme={theme}>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#E4D8B4',
                }}
                href="tel:+447518503552"
              >
                <Chip icon={<MdPhone />} label="Call me 0044 75 18 503 552 " />
              </a>
            </ThemeProvider>

            {navItems.map((item) => (
              <Button key={item}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#E4D8B4',
                  }}
                  to={`/${item}`}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
