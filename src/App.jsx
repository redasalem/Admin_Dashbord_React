import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, styled } from '@mui/material/styles';
import TobBar from './components/TobBar';
import MyDrawer, { DrawerHeader } from './components/Sidebar';
import { ThemeProvider} from '@mui/material/styles';
import { getDesignTokens } from './Theme';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(
    () => localStorage.getItem("currentMode") || "light"
  );
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  React.useEffect(() => {
    localStorage.setItem("currentMode", mode);
  }, [mode]);

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (

     <ThemeProvider theme={theme}>

      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TobBar open={open} handleDrawerOpen={handleDrawerOpen} toggleColorMode={toggleColorMode} />
      <MyDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main 
// @ts-ignore
      open={open}>
        <DrawerHeader />
      <Outlet/>
      </Main>
    </Box>

     </ThemeProvider>
    
  );
}
