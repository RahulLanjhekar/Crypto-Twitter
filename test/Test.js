const {expect} = require('chai');
const {ethers} = require('hardhat'); 

describe("Twitter Contract", () => {
    let Twitter;
    let twitter;
    let owner;

    const NOT_MY_TWEETS = 3
    const MY_TWEETS = 2

    beforeEach(async () => {
        Twitter = await ethers.getContractFactory('TwitterContract');
        [owner, addr1] = await ethers.getSigners();
        twitter = await Twitter.deploy();

        for (let i = 0; i < NOT_MY_TWEETS; i++) {
            const tweet = {
                username: addr1,
                text: "Random Tweet" + i,
                deleted: false
            }

            await twitter.connect(addr1).addTweet(tweet.text, tweet.deleted);
        }

        for (let i = 0; i < MY_TWEETS; i++) {
            const tweet = {
                username: owner,
                text: "Random Tweet" + (NOT_MY_TWEETS + i) ,
                deleted: false
            }

            await twitter.addTweet(tweet.text, tweet.deleted);
        }
    });

    describe("Add Tweet", () => {
        
        it("addTweet should emit and event!", async() => {
            const tweet = {
                text: "Random",
                deleted: false
            }
            const addtweet = await twitter.addTweet(tweet.text, tweet.deleted);
            
            await expect(addtweet).to.emit(twitter, "TweetEvent").withArgs(owner.address, NOT_MY_TWEETS + MY_TWEETS);
        })
    })

    describe("Get Tweets", () => {

        it("The length should be checked!", async() => {
            const allTweets = await twitter.getAllTweets();

            expect(allTweets.length).to.equal(NOT_MY_TWEETS + MY_TWEETS);
        })

        it("My Tweets should be checked!", async () => {
            const myTweets = await twitter.getMyTweets();

            expect(myTweets.length).to.equal(MY_TWEETS);
        })
    })

    describe("Delete Tweet!", () => {

        it("Delete Function should emit an event!", async () => {
            const deleteTweet = await twitter.deleteTweet(0, true);
            expect(deleteTweet).to.emit("DeleteTweet").withArgs(0, true);
        })
    })

})