import React from 'react'
import { Typography, AppBar } from '@mui/material'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

const App = () => {
  return (
    <div>
        <AppBar position='static' color='inherit'>
            <Typography variant='h2' align='center'>Video Chat</Typography>
        </AppBar>
        {/* Video Player */}
        <VideoPlayer/>
        {/* Options Component with notifications component */}
        <Options>
            <Notifications/>
        </Options>

    </div>
  )
}

export default App