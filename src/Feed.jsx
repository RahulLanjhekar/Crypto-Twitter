import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import {TwitterContractAddress} from './config'
import FeedInput from './FeedInput';
import Twitter from './utils/TwitterContract.json'
import FeedPost from './FeedPost';

const Feed = () => {
    const [tweet, setTweet] = useState();
    const [allTweets, setAllTweets] = useState([]);

    let TwitterContract;

    const getContract = () => {
        
        try{
            const {ethereum} = window;
        
            if(ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                TwitterContract = new ethers.Contract(
                    TwitterContractAddress,
                    Twitter.abi,
                    signer
                )
            } 
        }
        catch (error) {
            console.log(error);
        }
       
    }

    const addTweet = async () => {
        getContract();
        let tweeting = {
            'tweetText': tweet,
            'isDeleted': false
        }    
        await TwitterContract.addTweet(tweeting.tweetText, tweeting.isDeleted);
    }

    const getTweets = async () => {
        getContract();
        let tweets = await TwitterContract.getAllTweets();
        setAllTweets(tweets);
    }

    const deleteTweet = async (id) => {
        getContract();
        await TwitterContract.deleteTweet(id, true);
        // let tweets = await TwitterContract.getAllTweets();
        // setAllTweets(tweets);
        getTweets();
    }

    useEffect(() => {
        getTweets();
        const interval = setInterval(() => {
            getTweets()
           }, 3000);
           return () => clearInterval(interval);
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTweet();
        setTweet('');
    }

  return (
    <div className='feed'>
        <FeedInput handleSubmit={handleSubmit} tweet={tweet} setTweet={setTweet} />
            {allTweets.map((tweet, id) => (
                <FeedPost tweet={tweet} id={id} deleteTweet={deleteTweet} />
            ))}
    </div>
  )
}

export default Feed