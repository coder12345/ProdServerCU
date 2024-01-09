const Player1 = {name: "Excel", agent: "Omen", kills: 0, deaths: 0, assists: 0}






var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    //res.setHeader('Content-Type', 'application/json');
   // res.end(JSON.stringify(Player1));
    res.end();
}).listen(process.env.PORT || 3000);


