import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenDialog({ open, onClose, children }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: {
              xs: 'sticky',
              md: 'sticky',
              lg: 'fixed',
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={onClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            {/* <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Sound
            </Typography> */}
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  )
}
