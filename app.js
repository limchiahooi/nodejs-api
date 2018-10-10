const http = require('http');

// set hostname and port
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

const quotesArr = [
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "Bottoms in the investment world don't end with four-year lows; they end with 10- or 15-year lows. - Jim Rogers",
    "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful. - Warren Buffett",
    "The stock market is filled with individuals who know the price of everything, but the value of nothing. - Phillip Fisher",
    "In investing, what is comfortable is rarely profitable. - Robert Arnott",
    "How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case. - Robert G. Allen",
    "Invest in yourself. Your career is the engine of your wealth. - Paul Clitheroe",
    "Every once in a while, the market does something so stupid it takes your breath away. - Jim Cramer",
    "The individual investor should act consistently as an investor and not as a speculator. - Ben Graham",
    "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for. - Robert Kiyosaki",
    "Know what you own, and know why you own it. - Peter Lynch",
]

function jsonResponse(result, obj){
    result.write(JSON.stringify(obj));
    result.end();
}

function randomQuote(){
    return quotesArr[Math.floor(Math.random() * quotesArr.length)]
}

// when request comes in, return result
server.on('request', function(request, result){
    result.setHeader('Content-Type', 'text/json');
    result.setHeader('Access-Control-Allow-Origin', '*')
    result.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    result.setHeader('Access-Control-Allow-Headers', '*')

    // handle GET request
    if(request.method == 'GET'){
        if(request.url == '/quotes'){
            // json response
            const answer = { 'quotes': quotesArr };
            jsonResponse(result, answer);
        }
        else if(request.url == '/quotes/random'){
            // jsonResponse(result, randomQuoteV2() )
            jsonResponse(result, {"random_quote": randomQuote()})
        }
    }

    // handle POST request
    else if(request.method == "POST"){
        if(request.url == '/quotes/submit'){
            // handle form data
            // receive data, run this callback
            const body = [];
            console.log(result);
            request.on('data', function(chunk){
                // data comes in the form of stream
                // we need to put it in a body buffer before using
                body.push(chunk)
            }).on('end', function(){
                // convert the buffer to a string
                const data = Buffer.concat(body).toString();
                // start using data here
                // get quote value
                const newQuote = data.split("=")[1].replace(/\+/g, " ");
                quotesArr.push(newQuote);
                console.log(data);
                result.write(data);
                result.end()
            });

            // result.write('submitted');
            // result.end()
        }
    }

    // welcome message or error message
    else{
        // example of HTML response
        result.write('<p>Hi, welcome to Quotes API. Visit /quotes to start.</p>');
        result.end();
    }
    
});

//start listening for requests
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('hi');
});