import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const FeedInput = ({handleSubmit, tweet, setTweet}) => {
  return (
    <div className='feed-input'>
        <h3>Home</h3>
        <div className="new-box">
            <div className="avatar">
                <AccountCircleOutlinedIcon sx={{fontSize: '35px'}}/>
            </div>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" placeholder='Whats happening?' value={tweet} onChange={((e) => setTweet(e.target.value))} />
                <button type='submit'>Tweet</button>
            </form>
        </div>
    </div>
  )
}

export default FeedInput