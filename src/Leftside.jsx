import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import IconTabs from './IconTabs';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Leftside = () => {
  return (
    <div className='leftside'>
        <TwitterIcon sx={{color: 'rgb(29, 155, 240)', fontSize: '38px'}}/>
        <IconTabs Icon={HomeOutlinedIcon} text={'Home'}/>
        <IconTabs Icon={TagIcon} text={'Explore'}/>
        <IconTabs Icon={NotificationsNoneOutlinedIcon} text={'Notifications'}/>
        <IconTabs Icon={EmailOutlinedIcon} text={'Messages'}/>
        <IconTabs Icon={BookmarkBorderOutlinedIcon} text={'Bookmarks'}/>
        <IconTabs Icon={ListAltOutlinedIcon} text={'Lists'}/>
        <IconTabs Icon={AccountCircleOutlinedIcon} text={'Profile'}/>
        <IconTabs Icon={MoreHorizOutlinedIcon} text={'More'}/>
    </div>
  )
}

export default Leftside