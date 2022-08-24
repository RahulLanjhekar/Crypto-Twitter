import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Rightside = () => {
  return (
    <div className='rightside'>
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 800 }}
        />
    </div>
  )
}

export default Rightside