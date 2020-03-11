var oddsArr = [[14, 28, 42, 54.5, 65, 74, 81.5, 87.5, 92, 95, 97, 98.5, 99.5, 100],
              [13.4, 26.8, 40.2, 52.4, 62.9, 72.1, 79.9, 86.2, 91, 94.3, 96.5, 98.2, 99.3, 100],
              [12.7, 25.4, 38.1, 50, 60.6, 70, 78.1, 84.8, 90, 93.6, 96, 97.9, 99.1, 100],
              [12, 24, 36, 47.5, 58, 67.6, 76.1, 83.3, 89, 93, 95.8, 97.9, 99.3, 100]];



var gsw = {
  loc: "Golden State",
  name: "Warriors",
  ballPic: "lottoBallWarriors.gif",
  hasPick: false,
  pick: 0,
  color: "#1D428A",
  logo: "warriorsLogo.png"
}

var cle = {
  loc: "Cleveland",
  name: "Cavaliers",
  ballPic: "lottoBallCavs.gif",
  hasPick: false,
  pick: 0,
  color: "#860038",
  logo: "cavsLogo.png"
}

var atl = {
  loc: "Atlanta",
  name: "Hawks",
  ballPic: "lottoBallHawks.gif",
  hasPick: false,
  pick: 0,
  color: "#E03A3E",
  logo: "hawksLogo.png"
}

var cha = {
  loc: "Charlotte",
  name: "Hornets",
  ballPic: "lottoBallHornets.gif",
  hasPick: false,
  pick: 0,
  color: "#00788C",
  logo: "hornetsLogo.png"
}

var min = {
  loc: "Minnesota",
  name: "Timberwolves",
  ballPic: "lottoBallTimberwolves.gif",
  hasPick: false,
  pick: 0,
  color: "#0C2340",
  logo: "timberwolvesLogo.png"
}

var nyk = {
  loc: "New York",
  name: "Knicks",
  ballPic: "lottoBallKnicks.gif",
  hasPick: false,
  pick: 0,
  color: "#006BB6",
  logo: "knicksLogo.png"
}

var det = {
  loc: "Detroit",
  name: "Pistons",
  ballPic: "lottoBallPistons.gif",
  hasPick: false,
  pick: 0,
  color: "#C8102E",
  logo: "pistonsLogo.png"
}

var chi = {
  loc: "Chicago",
  name: "Bulls",
  ballPic: "lottoBallBulls.gif",
  hasPick: false,
  pick: 0,
  color: "#CE1141",
  logo: "bullsLogo.png"
}

var was = {
  loc: "Washington",
  name: "Wizards",
  ballPic: "lottoBallWizards.gif",
  hasPick: false,
  pick: 0,
  color: "#002B5C",
  logo: "wizardsLogo.png"
}

var phx = {
  loc: "Phoenix",
  name: "Suns",
  ballPic: "lottoBallSuns.gif",
  hasPick: false,
  pick: 0,
  color: "#E56020",
  logo: "sunsLogo.png"
}

var sac = {
  loc: "Sacramento",
  name: "Kings",
  ballPic: "lottoBallKings.gif",
  hasPick: false,
  pick: 0,
  color: "#5A2D81",
  logo: "kingsLogo.png"
}

var no = {
  loc: "New Orleans",
  name: "Pelicans",
  ballPic: "lottoBallPelicans.gif",
  hasPick: false,
  pick: 0,
  color: "#0C2340",
  logo: "pelicansLogo.png"
}

var sa = {
  loc: "San Antonio",
  name: "Spurs",
  ballPic: "lottoBallSpurs.gif",
  hasPick: false,
  pick: 0,
  color: "#000000",
  logo: "spursLogo.png"
}

var por = {
  loc: "Portland",
  name: "Trail Blazers",
  ballPic: "lottoBallBlazers.gif",
  hasPick: false,
  pick: 0,
  color: "#E03A3E",
  logo: "blazersLogo.png"
}

var teamsArr = [gsw, cle, atl, cha, min, nyk, det, chi, was, phx, sac, no, sa, por];
var takenPlayers = [];
doLottery();
sortDraftOrderDesc();

function start() {
  console.log(draftPlayers);
    document.getElementById("openLogo").style.display = "inline-block";
    setTimeout(
      function(){
        document.getElementById("openLogo").style.display = "none";
        document.getElementById("opening").style.display = "none";
        document.body.style.backgroundColor = "#ff6633";

      }, 1100);
      setTimeout(
        function(){
          document.getElementById("vol2Logo").style.display = "inline-block";
          document.getElementById("byRyan").style.display = "inline-block";
          document.getElementById("twitterAt").style.display = "inline-block";
          document.getElementById("ryanBar").style.display = "inline-block";
          document.getElementById("startButton").style.display = "inline-block";
        }, 1100);
}

function startButton() {
  document.getElementById("startButton").src = "startButtonPressed.png";
  document.getElementById("startPage").classList.add("fadeOutTarget");
  document.body.classList.add("bg2Black");
  setTimeout(
    function(){
        document.getElementById("startPage").style.display = "none";
        document.getElementById("recap").style.display = "inline-block";
    } ,1000);
}

function skipButton() {
  document.body.classList.add("bg2Orange2");
  document.getElementById("skipButton").style.display = "none";
  document.getElementById("recap").style.display = "none";
  document.getElementById("lottoIntro").style.display = "block";
          document.getElementById("tatumCol").style.display = "block";
  setTimeout(
    function(){


    } ,1000);

}

function postLotteryButton() {
  document.getElementById("lotto").classList.add("fadeOutTarget");
  setTimeout(
    function(){
      document.getElementById("lotto").style.display = "none";
      document.getElementById("draftIntro").style.display = "block";
    }, 1000
  );
}

function beginLottoButton() {
    document.getElementById("lottoIntro").classList.add("exitTopTarget");
    setTimeout(
      function(){
        document.getElementById("lottoIntro").style.display = "none";
        document.getElementById("lotto").style.display = "block";
          displayLottery();
document.getElementById("ballGif").style.display = "block";
      } ,500);
      setTimeout(
        function(){

        } ,1000);

}

function beginDraftButton() {
  document.getElementById("draftIntro").classList.add("exitTopTarget");
  setTimeout(
    function(){
      document.getElementById("draftIntro").style.display = "none";
      document.getElementById("draft").style.display = "block";
      createDraftTable();
    } ,500);
}

function doLottery() {
  for (var i = 0; i < oddsArr.length; i++) {
    var rand = (Math.random() * 100) + 1;
    var foundTeam = false;
    // console.log(rand);
    for (var j = 0; j < oddsArr[i].length; j++) {
      // console.log("j = " + j);
      if (j === 0 && rand <= oddsArr[i][j]) {
        if (teamsArr[j].hasPick == true) {
          rand = (Math.random() * 100) + 1;
          // console.log("new rand " + rand);
          j = -1;
          // break;
        } else {
          // console.log(teamsArr[j].name);
          teamsArr[j].pick = i + 1;
          teamsArr[j].hasPick = true;
          foundTeam = true;
          break;
        }
      } else if (rand > oddsArr[i][j - 1] && rand <= oddsArr[i][j]) {
          if (teamsArr[j].hasPick == true) {
            rand = (Math.random() * 100) + 1;
            //  console.log("new rand " + rand);
            j = -1;
            // break;
          } else {
            // console.log(teamsArr[j].name);
            teamsArr[j].pick = i + 1;
            teamsArr[j].hasPick = true;
            foundTeam = true;
            break;
          }
      }
    }

  }
  for (var k = 0, newPick = 5; k < teamsArr.length; k++) {
    if (!teamsArr[k].hasPick) {
      teamsArr[k].pick = newPick;
      newPick++;
    }
  }
}

function displayLottery() {
  var fourteen = teamsArr[0];
  var thirteen = teamsArr[1];
  var twelve = teamsArr[2];
  var eleven = teamsArr[3];
  var ten = teamsArr[4];
  var nine = teamsArr[5];
  var eight = teamsArr[6];
  var seven = teamsArr[7];
  var six = teamsArr[8];
  var five = teamsArr[9];
  var four = teamsArr[10];
  var three = teamsArr[11];
  var two = teamsArr[12];
  var one = teamsArr[13];
  setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#14";
      document.getElementById("ballGif").src = fourteen.ballPic;
    } ,0);
  setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#13";
      document.getElementById("ballGif").src = thirteen.ballPic;
    } ,1000);
  setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#12";
      document.getElementById("ballGif").src = twelve.ballPic;
    } ,2000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#11";
      document.getElementById("ballGif").src = eleven.ballPic;
    } ,3000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#10";
      document.getElementById("ballGif").src = ten.ballPic;
    } ,4000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#9";
      document.getElementById("ballGif").src = nine.ballPic;
    } ,5000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#8";
      document.getElementById("ballGif").src = eight.ballPic;
    } ,6000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#7";
      document.getElementById("ballGif").src = seven.ballPic;
    } ,7000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#6";
      document.getElementById("ballGif").src = six.ballPic;
    } ,8000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#5";
      document.getElementById("ballGif").src = five.ballPic;
    } ,9000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#4";
      document.getElementById("ballGif").src = four.ballPic;
    } ,10000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#3";
      document.getElementById("ballGif").src = three.ballPic;
    } ,11000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#2";
      document.getElementById("ballGif").src = two.ballPic;
    } ,12000);
      setTimeout(
    function() {
      document.getElementById("pickNumber").innerHTML = "#1";
      document.getElementById("ballGif").src = one.ballPic;
      document.getElementById("confetti").style.display = "block";
    } ,13000);
    setTimeout(
  function() {
    document.getElementById("pickNumber").classList.add("exitTopTarget");
    document.getElementById("ballGif").classList.add("exitTopTarget");

  } ,14200);
  setTimeout(
  function() {
    document.getElementById("pickNumber").classList.add("exitTopTarget");
    document.getElementById("ballGif").classList.add("exitTopTarget");
    document.getElementById("pickNumber").style.display = "none";
    document.getElementById("ballGif").style.display = "none";
    document.getElementById("nextLottoButton").style.display = "block";
    createLotteryTable();
  } ,14700);
}

function createLotteryTable() {
  var table = document.createElement("table");
  table.setAttribute("id", "lotteryTable");
  sortDraftOrderAsc();
  for (var i = 0; i < teamsArr.length; i++) {
    var row = document.createElement("tr");

    var num = document.createElement("td");
    var team = document.createElement("td");
        num.classList.add("lotteryTableCol");
        team.classList.add("lotteryTableCol");
    num.innerHTML = i + 1;
    team.innerHTML = teamsArr[i].name;
    row.style.backgroundColor = teamsArr[i].color;
    row.appendChild(num);
    row.appendChild(team);
    table.appendChild(row);
  }
  document.getElementById("tableCol").appendChild(table);
}



function createDraftTable() {
  var table = document.createElement("table");
  table.setAttribute("id", "draftTable");

  sortDraftOrderAsc();
  for (var i = 0; i < teamsArr.length; i++) {
    var row = document.createElement("tr");

    var num = document.createElement("td");
    var team = document.createElement("td");
    var player = document.createElement("td");
      player.setAttribute("id", "dp" + i);
        num.classList.add("draftTableCol");
        team.classList.add("draftTableCol");
        player.classList.add("draftTableCol", "playerDraftCol");
    num.innerHTML = i + 1;
    var logo = document.createElement("img");
    logo.setAttribute("src", teamsArr[i].logo);
    logo.classList.add("draftTeamLogo");
    team.appendChild(logo);
    team.style.textAlign = "center";
    num.style.textAlign = "center";
    // team.innerHTML = teamsArr[i].name;
    // player.innerHTML = draftPlayers[i].firstName.slice(0, 1) + ". " + draftPlayers[i].lastName;

    row.style.backgroundColor = "white";
    num.style.color = "white";
    num.style.backgroundColor = "black";
    row.appendChild(num);
    row.appendChild(team);
    row.appendChild(player);
    table.appendChild(row);
  }
  document.getElementById("draftTableCol").appendChild(table);
  fillDraftTable();
}

function fillDraftTable() {
  var knicksSpot = teamsArr.indexOf(nyk);
  var count = 0;
  for (let i = 0; i < knicksSpot; i++) {
    count += 500;
    if (i < knicksSpot - 1) {
      setTimeout(
      function() {
        /// function for simulating selecting player
        document.getElementById("dp" + i).innerHTML = draftPlayers[i].firstName.slice(0, 1) + ". " + draftPlayers[i].lastName;
        takenPlayers.push(draftPlayers[i]);
        // draftPlayers.splice(i, 1);

      } , count);
    } else {
      setTimeout(
      function() {
        document.getElementById("dp" + i).innerHTML = draftPlayers[i].firstName.slice(0, 1) + ". " + draftPlayers[i].lastName;
        takenPlayers.push(draftPlayers[i]);
        // draftPlayers.splice(i, 1);
        document.getElementById("knicksClockButton").style.display = "block";
        console.log(draftPlayers);
      } , count);
    }
  }
}

function knicksClockButton() {
  document.getElementById("draftTableDiv").classList.add("bounceOutLeft");
  document.getElementById("knicksClockButton").style.display = "none";
  setTimeout(
    function() {
      document.getElementById("draftTableDiv").style.display = "none";
      document.getElementById("draftSelectionDiv").style.display = "block";
      document.getElementById("draft").style.backgroundColor = "white";
      document.getElementById("draftLogoPic").style.display = "block";
      buildDraftSelection();
    } , 1000);

}


function buildDraftSelection() {
  for (var i = 0; i < draftPlayers.length; i++) {
    if (takenPlayers.includes(draftPlayers[i])) {
      continue;
    }
    const plyer = draftPlayers[i];
    var plyDiv = document.createElement("div");
    var pic = document.createElement("img");
    pic.setAttribute("src", draftPlayers[i].draftPic);
    pic.setAttribute("id", draftPlayers[i].firstName.slice(0, 1) + draftPlayers[i].lastName);
    pic.addEventListener('click', function() {
           draftPlayerClick(plyer);
       });
    pic.classList.add("draftPlayerPic");
    i % 2 === 0 ? pic.classList.add("slide-in-left") : pic.classList.add("slide-in-right");
    plyDiv.setAttribute("id", draftPlayers[i].firstName.slice(0, 1) + draftPlayers[i].lastName + "Div");
    plyDiv.appendChild(pic);
    document.getElementById("draftPlayersDiv").appendChild(plyDiv);
  }
}

function sortDraftOrderAsc() {
  teamsArr.sort(function(a, b){return a.pick - b.pick});
}

function sortDraftOrderDesc() {
  teamsArr.sort(function(a, b){return b.pick - a.pick});
}

function draftPlayerClick(player) {
  console.log(player.lastName);
  const pic = document.getElementById(player.firstName.slice(0, 1) + player.lastName);
  var divy = document.getElementById(player.firstName.slice(0, 1) + player.lastName + "Div");
  pic.classList.add("slide-out-left");
  setTimeout(
    function() {
      pic.style.display = "none";
      var test = document.createElement("p");
      test.innerHTML = player.lastName;
      divy.appendChild(test);
      console.log(test.clientWidth);
    }, 300);

}

console.log("\n");


for (var i = 0; i < teamsArr.length; i++) {
  console.log(teamsArr[i].name + " " + teamsArr[i].pick);
}
