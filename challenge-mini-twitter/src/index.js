const twitter = {
    head : {
      username: 'name',
      numberTweet: 1,
      pagePhoto: 'photojpeg',
      profilPhoto: 'photo2jpeg',
      editButton: 'Edit profile',
      userName: '@abc',
      userBio: 'I am Twitter user',
      dateOfbirtday: '1st january',
      placeOfUser: "name of place",
      dateOfJoin: 'Joined February 2020',
      numberOfFollowing: 510,
      numberOfFollower: 509,
  
    },

    body: {
      tweets: [{
        messageBody: 'Good morning to timeline',
        media: 'photo3jpeg',
        comment: [{
          comment: 'good morning',
          retweet: 10,
          quateRetweet:[{
            message: 'good morning',
            comment: 'you too',
            retweet: 10,
            like: 5,
          }],
          like: 10,
        }],
      }],
      tweetsAndReplies: [],
      media:[],
      likes:[],
      messageDirect: [],
      youMightLike:[],
    }
  }
  console.log(twitter);
  