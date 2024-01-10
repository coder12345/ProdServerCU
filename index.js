//Setup
const express = require('express');
const mysql = require('mysql');
const app = express();

const lockedPorts = [
    "https://i.imgur.com/XnkGRO5.png", //Brimstone - 01
    "https://i.imgur.com/duNyllZ.png", //Viper - 02
    "https://i.imgur.com/XlhfR8f.png", //Omen - 03
    "https://i.imgur.com/58M3s9N.png", //Killjoy - 04
    "https://i.imgur.com/hxYffVV.png", //Cypher - 05
    "https://i.imgur.com/9wWCgIm.png", //Sova - 06
    "https://i.imgur.com/SfGrLJ7.png", //Sage - 07
    "", //Spooky lore man - 08
    "https://i.imgur.com/7DLneNa.png", //Phoenix - 09
    "https://i.imgur.com/b8i1QAW.png", //Jett - 10
    "https://i.imgur.com/8OfoMxN.png", //Reyna - 11
    "https://i.imgur.com/FGjC3fu.png", //Raze - 12
    "https://i.imgur.com/9Xnz0l1.png", //Breach - 13
    "https://i.imgur.com/juBlsgu.png", //Skye - 14
    "https://i.imgur.com/t4fRLhX.png", //Yoru - 15
    "https://i.imgur.com/JU9IBFG.png", //Astra - 16
    "https://i.imgur.com/SO4QVkC.png", //KAYO - 17
    "https://i.imgur.com/Eg7gtpQ.png", //Chamber - 18
    "https://i.imgur.com/NBupHKI.png", //Neon - 119
    "https://i.imgur.com/7prF90w.png", //Fade - 20
    "https://i.imgur.com/vywAcMr.png", //Harbor - 21
    "https://i.imgur.com/agzceGy.png", //Gekko - 22
    "https://i.imgur.com/eaHzvoi.png", //Deadlock - 23
    "https://i.imgur.com/JkIwBPv.png"  //Iso - 24
];
const hoverPorts = [
    "https://i.imgur.com/FdZw2nP.png", //Brimstone - 01
    "https://i.imgur.com/AHVKpUU.png", //Viper - 02
    "https://i.imgur.com/G3JAErg.png", //Omen - 03
    "https://i.imgur.com/Dmf9fhV.png", //Killjoy - 04
    "https://i.imgur.com/UX3vrmC.png", //Cypher - 05
    "https://i.imgur.com/UmrPZFK.png", //Sova - 06
    "https://i.imgur.com/CGkpjBX.png", //Sage - 07
    "", //Spooky lore man - 08
    "https://i.imgur.com/yhn5WqE.png", //Phoenix - 09
    "https://i.imgur.com/XBSFIpF.png", //Jett - 10
    "https://i.imgur.com/rLVKBDb.png", //Reyna - 11
    "https://i.imgur.com/5uZwvPR.png", //Raze - 12
    "https://i.imgur.com/ZGhMyB0.png", //Breach - 13
    "https://i.imgur.com/T5SZjUe.png", //Skye - 14
    "https://i.imgur.com/sxp7323.png", //Yoru - 15
    "https://i.imgur.com/fuQfBYD.png", //Astra - 16
    "https://i.imgur.com/PSdzoW7.png", //KAYO - 17
    "https://i.imgur.com/NDpPxjt.png", //Chamber - 18
    "https://i.imgur.com/J7Ao5S3.png", //Neon - 119
    "https://i.imgur.com/ARPHL0y.png", //Fade - 20
    "https://i.imgur.com/1F0138L.png", //Harbor - 21
    "https://i.imgur.com/H6iGfaW.png", //Gekko - 22
    "https://i.imgur.com/grn1BSJ.png", //Deadlock - 23
    "https://i.imgur.com/ltkhfts.png"  //Iso - 24
];
const liveLivingPorts = [
    "https://i.imgur.com/2nMnHuU.png", //Brimstone - 01
    "https://i.imgur.com/X7Kk0do.png", //Viper - 02
    "https://i.imgur.com/lfyqVAj.png", //Omen - 03
    "https://i.imgur.com/5eoogoi.png", //Killjoy - 04
    "https://i.imgur.com/NxAxeFE.png", //Cypher - 05
    "https://i.imgur.com/aRZQhlC.png", //Sova - 06
    "https://i.imgur.com/vFoUrHx.png", //Sage - 07
    "", //Spooky lore man - 08
    "https://i.imgur.com/cW6YyNI.png", //Phoenix - 09
    "https://i.imgur.com/sRDidDl.png", //Jett - 10
    "https://i.imgur.com/P7wbqvK.png", //Reyna - 11
    "https://i.imgur.com/IAs2g7Q.png", //Raze - 12
    "https://i.imgur.com/2b9gEwx.png", //Breach - 13
    "https://i.imgur.com/VOH3BdF.png", //Skye - 14
    "https://i.imgur.com/j6B4Czm.png", //Yoru - 15
    "https://i.imgur.com/eY7BtE3.png", //Astra - 16
    "https://i.imgur.com/c8mpDpI.png", //KAYO - 17
    "https://i.imgur.com/cM1sp3O.png", //Chamber - 18
    "https://i.imgur.com/VZxCpv0.png", //Neon - 119
    "https://i.imgur.com/ZZkkIsR.png", //Fade - 20
    "https://i.imgur.com/Uc6kBSV.png", //Harbor - 21
    "https://i.imgur.com/P7nXyOy.png", //Gekko - 22
    "https://i.imgur.com/ncf2LhA.png", //Deadlock - 23
    "https://i.imgur.com/cd3YV75.png"  //Iso - 24
];
const liveDeadPorts = [
    "https://i.imgur.com/12kwfw8.png", //Brimstone - 01
    "https://i.imgur.com/imrLEqq.png", //Viper - 02
    "https://i.imgur.com/seNC8Xf.png", //Omen - 03
    "https://i.imgur.com/RMjN30w.png", //Killjoy - 04
    "https://i.imgur.com/yHwtX29.png", //Cypher - 05
    "https://i.imgur.com/o2nUHkc.png", //Sova - 06
    "https://i.imgur.com/dY8cWjS.png", //Sage - 07
    "", //Spooky lore man - 08
    "https://i.imgur.com/0JNRBa9.png", //Phoenix - 09
    "https://i.imgur.com/5NqqVw9.png", //Jett - 10
    "https://i.imgur.com/FgIAmKg.png", //Reyna - 11
    "https://i.imgur.com/uTcoyY6.png", //Raze - 12
    "https://i.imgur.com/w9sNpiQ.png", //Breach - 13
    "https://i.imgur.com/elQemuU.png", //Skye - 14
    "https://i.imgur.com/PsSbxcO.png", //Yoru - 15
    "https://i.imgur.com/lB2uCAg.png", //Astra - 16
    "https://i.imgur.com/bJXzAap.png", //KAYO - 17
    "https://i.imgur.com/mXZtthv.png", //Chamber - 18
    "https://i.imgur.com/gXO9Wlx.png", //Neon - 119
    "https://i.imgur.com/Vbvx7hL.png", //Fade - 20
    "https://i.imgur.com/l8VOxr8.png", //Harbor - 21
    "https://i.imgur.com/cbyUAAw.png", //Gekko - 22
    "https://i.imgur.com/dc628y1.png", //Deadlock - 23
    "https://i.imgur.com/W9PlcVP.png"  //Iso - 24
];
const agentDatabase = [
    "Brimstone", //Brimstone - 01
    "Viper", //Viper - 02
    "Omen", //Omen - 03
    "Killjoy", //Killjoy - 04
    "Cypher", //Cypher - 05
    "Sova", //Sova - 06
    "Sage", //Sage - 07
    "", //Spooky lore man - 08
    "Phoenix", //Phoenix - 09
    "Jett", //Jett - 10
    "Reyna", //Reyna - 11
    "Raze", //Raze - 12
    "Breach", //Breach - 13
    "Skye", //Skye - 14
    "Yoru", //Yoru - 15
    "Astra", //Astra - 16
    "KAY/O", //KAYO - 17
    "Chamber", //Chamber - 18
    "Neon", //Neon - 119
    "Fade", //Fade - 20
    "Harbor", //Harbor - 21
    "Gekko", //Gekko - 22
    "Deadlock", //Deadlock - 23
    "Iso"  //Iso - 24
];
const sheildPics = [
    "", //Empty
    "https://i.imgur.com/btGHT8s.png", // Half
    "https://i.imgur.com/XeNnZ73.png" //Full
];

const weaponPics = [
    "https://i.imgur.com/uKL2Zdx.png", //Classic - 01
    "https://i.imgur.com/a8sAGgc.png", //Shorty - 02
    "https://i.imgur.com/bM2sX8t.png", //Ghost - 03
    "https://i.imgur.com/bbAtpBQ.png", //Frenzy - 04
    "https://i.imgur.com/mQqGh0H.png", //Sheriff- 05
    "https://i.imgur.com/8ScQZjT.png", //Stinger - 06
    "https://i.imgur.com/0TFfz9K.png", //Spectere - 07
    "https://i.imgur.com/XHaPZGo.png", //Bucky - 08
    "https://i.imgur.com/uI1jJy4.png", //Judge - 09
    "https://i.imgur.com/yx10mzQ.png", //Bulldog - 10
    "https://i.imgur.com/NOelvc4.png", //Guardian - 11
    "https://i.imgur.com/06rpXaT.png", //Phantom - 12
    "https://i.imgur.com/d4G8p65.png", //Vandal - 13
    "https://i.imgur.com/y22OUlG.png", //Ares - 14
    "https://i.imgur.com/rZU1gH5.png", //Odin - 15
    "https://i.imgur.com/kntz9Hy.png", //Marshal -16
    "https://i.imgur.com/yCxgfQc.png", //Outlaw -  17
    "https://i.imgur.com/fY8fdFE.png", //Operator - 18



]



















function agentSelPlayer(id, agent, tag, locked) {
    this.id = id;
    this.tag = tag;
    this.agentString = agentDatabase[agent-1];
    if (locked == 0) {
        this.portLink = hoverPorts[agent-1];
    } else {
        this.portLink = lockedPorts[agent-1];
    }

}


function cardliveConstructor(id, tag, agent, kills, deaths, assists, credits, weapon, sheild, living, team, hasUlt) {
    this.id = id;
    this.tag;
    if (living == 1) {

        if (team == 0) {
            if (hasUlt == 1) {
                this.background = "https://i.imgur.com/ZLkVuxm.png"

            } else {
                this.background = "https://i.imgur.com/Q6O5OuA.png"
            }
        } else {
            if (hasUlt == 1) {
                this.background = "https://i.imgur.com/bnGtj32.png"

            } else {
                this.background = "https://i.imgur.com/YPIUCmb.png"
            }
        }
        this.agentPic = liveLivingPorts[agent-1];
        this.kda = kills + "/" + deaths + "/" + assists;
        this.weaponPic = weaponPics[weapon-1];
        this.shieldPic = sheildPics[sheild];

        this.agentTag = agentDatabase[agent-1];

    } else {
        this.background = "https://i.imgur.com/bUfQVEd.png";
        this.agentPic = liveDeadPorts[agent-1];
        this.kda = "";
        this.weaponPic = "";
        this.shieldPic = "";
        this.agentTag = "";



    }
    this.tag = tag;

}
function playerLiveData(id, tag, agent, kills, deaths, assists, credits, weapon, sheild, living, team, hasUlt) {
        this.id = id;
        this.tag = tag;
        this.agent = agent;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.credits = credits;
        this.weapon = weapon;
        this.shield = sheild;
        this.kda = Math.round((kills + assists / deaths + Number.EPSILON) * 100) / 100;
        this.team = team;
        this.living = living;
        this.hasUlt = hasUlt;


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
    pullLiveData();
    console.log(jsonArr)
});

 //Pull agent Select Data
    function pullAgentSelData() {
        sql1 = "SELECT * FROM agentSelect;"
        con.query(sql1, function (err, result) {
            if (err) throw err;
            console.log(result);
            for (let i = 0; i < 10; i++) {
                console.log(result[i].Tag);
                jsonArr.push(new agentSelPlayer(i+1, result[i].Agent, result[i].Tag, result[i].locked));
            }

        });
    }
    function pullLiveData() {
        sql = "SELECT * FROM playerTable;"
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            for (let i = 0; i < 3; i++) {

                jsonArr.push(new cardliveConstructor(i+1, result[i].tag, result[i].agent, result[i].kills, result[i].deaths, result[i].assists, result[i].credits, result[i].weapon, result[i].shield, result[i].living, result[i].team, result[i].hasUlt));
            }

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
