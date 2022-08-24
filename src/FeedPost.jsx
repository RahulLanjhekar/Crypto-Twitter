import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';



const FeedPost = ({tweet, deleteTweet, id}) => {
    const [pinkButton, setPinkButton] = useState(false)
  return (
        <div className='feed-box'>
            <div className="avatar">
                {/* <AccountCircleOutlinedIcon sx={{fontSize: '35px'}}/> */}
                <Avatar
                    style={{ width: '50px', height: '50px' }}
                    avatarStyle='Circle'
                    {...generateRandomAvatarOptions() }
                />
            </div>
            <div className='feed-post'>
                <h3>{tweet.userName}</h3>
                <h2>{tweet.tweetText}</h2>
                <div className="buttons">
                    <button>{ pinkButton ? <FavoriteOutlinedIcon sx={{ color: 'rgb(249, 24, 128);'}} onClick={() => setPinkButton(!pinkButton)} /> : <FavoriteBorderOutlinedIcon onClick={() => setPinkButton(!pinkButton)} /> }</button>
                    <button><DeleteOutlineOutlinedIcon sx={{fontSize: '30px'}} onClick={() => deleteTweet(id)} /></button>
                </div>
            </div>
         </div>
  )
}

export default FeedPost