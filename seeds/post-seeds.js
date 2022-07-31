const { Post } = require('../models');

const postData = [
    {
        title: "US startups seeking funds shouldn’t overlook financing from the government",
        post_content: "While cash from Uncle Sam may not be top of mind for startups, SBA loans can provide low-cost capital",
        user_id: 3
    },
    {
        title: "Can Amazon and big tech make American health care less painful?",
        post_content: "The health care system in America is broken. Can big tech fix it? That’s what many of us hope to find out with Amazon’s pending acquisition of boutique primary care practice One Medical.",
        user_id: 1
    },
    {
        title: "3 Tech Companies That Should Initiate a Stock Split",
        post_content: "These nominal prices have begun to look high amid the Amazon and Alphabet splits.",
        user_id: 2

    },
    {
        title: "Tech and Consumer Stocks Take the Lead - But for How Long?",
        post_content: "Technology and consumer cyclical stocks are the leading sectors since the middle of June, but the jury is very much out on whether it is just a relief rally or a more durable trend.",
        user_id: 5
    },
    {
        title: "Why tech workers are quitting great jobs at companies like Google to fight climate change",
        post_content: "As the sense of urgency around climate change is increasing, some tech workers are ditching their ultra-desirable, high-paying tech jobs to work at companies fighting climate change.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;