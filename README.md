# Node.js API
This repo contains the JavaScript code for the REST APIs that I have created using Node.js. It is a project completed as part of the Next Academy Full Stack Web Development Bootcamp. An API (Application Programming Interface) is a software-to-software interface that enables two applications to exchange data among each other. APIs are used widely in the real world to create amazing applications. Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser and can perform as a server to run the APIs. 

## Investing Quotes APIs
Using HTTP GET request, user can fetch a random quote about Investing via the API endpoint. User can also submit their own investing quotes to the server using HTTP POST request.

| METHOD | Endpoint | Description |
| --- | --- | --- |
| GET | /quotes | A list of all the quotes |
| GET | /quotes/random | One random quote at a time |
| POST | /quotes/submit | Submit a quote |


## Samples
- "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful. - Warren Buffett"
- "The individual investor should act consistently as an investor and not as a speculator. - Ben Graham"
- "Know what you own, and know why you own it. - Peter Lynch"


Sources: Investing quotes are gathered from various websites such as Bloomberg, Investopedia, etc.