import * as React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Badge from '@mui/material/Badge'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CssBaseline from '@mui/material/CssBaseline'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'

import { mainListItems } from './components/ListItem/ListItem'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://wu-wallet.vercel.com/'>
        WU Wallet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

const ManageWallet = () => {
  const walletInfo = useSelector((state) => state.user)

  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open} color='secondary'>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              variant='h6'
              component='h1'
              color='inherit'
              sx={{ flexGrow: 1 }}
            >
              WU Wallet
            </Typography>
            <IconButton color='inherit'>
              <Badge badgeContent={0} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              px: [1],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Grid container sx={{ backgroundColor: '#ffbd45', padding: 2 }}>
            <Typography
              sx={{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {'0x' + walletInfo?.address}
            </Typography>
            <Typography
              variant='h4'
              component={'div'}
              sx={{
                width: '100%',
                paddingTop: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {walletInfo.coin + ' WU'}
            </Typography>
          </Grid>
          <List component='nav'>
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Trasaction histories */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    height: 240,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  Chart
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    height: 240,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                ></Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default ManageWallet
