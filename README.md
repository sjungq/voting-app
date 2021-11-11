# StrawVote

Currently hosted on [Heroku](https://voting-app-sj.herokuapp.com/)

StrawPoll-inspired challenge project, idea from the Dev Jam Discord server. Users can create multiple-choice polls or vote on polls from other users.

My personal goal for this project was to learn NextJS, Material UI, and Heroku deployment.

Written with JS (React, Next, Express, Axios), SCSS and Material UI, and MongoDB through Mongo Atlas. All current poll prompts AND vote options were randomly generated from [Random Word Generator](https://randomwordgenerator.com/question.php) - see /seeds/seedHelper.js

To do:

- implement basic user authentication
- simple "nickname" based user system for voting? Would like to retain the ability to "anonymously" vote, so these would not be related to any session or auth
