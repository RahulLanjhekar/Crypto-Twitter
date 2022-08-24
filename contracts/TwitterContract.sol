// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

contract TwitterContract {
    event TweetEvent(address receipient, uint Id);
    event DeleteTweet(uint id, bool isDeleted);

    struct Tweet {
        uint Id;
        address userName;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] private tweets;

    mapping(uint => address) tweetToOwner;

    function addTweet(string memory tweetText_, bool isDeleted_) external {
        uint id = tweets.length;
        tweets.push(Tweet(
            id,
            msg.sender,
            tweetText_,
            isDeleted_
        ));
        tweetToOwner[id] = msg.sender;
        emit TweetEvent(msg.sender, id);
    }

    function getAllTweets() external view returns(Tweet[] memory) {

        Tweet[] memory temp = new Tweet[](tweets.length);
        
        uint counter = 0;
        for (uint i = 0; i < tweets.length; i++) {
            if ( tweets[i].isDeleted == false ) {
                temp[counter] = tweets[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);

        for (uint i = 0; i < counter; i++) {
            result[i] = temp[i];
        }

        return result;
    }

    function getMyTweets() external view returns(Tweet[] memory) {

        Tweet[] memory temp = new Tweet[](tweets.length);
        
        uint counter = 0;
        for (uint i = 0; i < tweets.length; i++) {
            if ( tweetToOwner[i] == msg.sender && tweets[i].isDeleted == false ) {
                temp[counter] = tweets[i];
                counter++;
            }
        }

        Tweet[] memory result = new Tweet[](counter);

        for (uint i = 0; i < counter; i++) {
            result[i] = temp[i];
        }

        return result;
    }

    function deleteTweet(uint id, bool isDeleted_) external {

        require(tweetToOwner[id] == msg.sender, "Can't delete another's Tweet!");
            tweets[id].isDeleted = isDeleted_;
            emit DeleteTweet(id, isDeleted_);
        
    }

}