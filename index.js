//Setup
const express = require('express');
const mysql = require('mysql');
const app = express();


function agentSelPlayer(id, portLink, tag) {
    this.id = id;
    this.portLink = portLink;
    this.tag = tag;
}

const jsonArr = [];
//Connect to Database
var con = mysql.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5675756",
    password: "UgSUiirjf7",
    database: "sql5675756"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    pullAgentSelData();
});

 //Pull agent Select Data
    function pullAgentSelData() {
        const workArr = [];
        sql1 = "SELECT * FROM agentSelect;"
        con.query(sql1, function (err, result) {
            if (err) throw err;
            console.log(result);
            for (let i = 0; i < 10; i++) {
                console.log(result[i].Tag);
                jsonArr.push(new agentSelPlayer(i+1, result[i].Agent, result[i].Tag));
            }
            console.log(jsonArr)
        });





    }










//Format Respnse
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Send HTML
app.get("/", (req, res) => {
    res.json(jsonArr);

});



//Send data


app.listen(3000);
