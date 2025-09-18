addEventListener('DOMContentLoaded', mainfun);
function mainfun() {
    // const imgbtn = document.querySelectorAll(".imgbtn");
    const playerdiv = document.getElementById("playerdiv");
    const computerdiv = document.getElementById("computerdiv");
    const start = document.getElementById("start");
    // const Reset = document.getElementById("Reset");
    var img = document.getElementById("img");
    const play = document.getElementById("play");
    const save = document.getElementById("save");
    const playerinput = document.getElementById("playerinput");
    const matchInput = document.getElementById("match");
    const name = document.getElementById("name");
    const mat = document.getElementById("mat");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const win = document.getElementById("win");
    const gn = document.getElementById("gn");
    const clicksound = new Audio("click.mp3");


    // var bgm = new Audio('bgm.mp3');
    var namediv = document.getElementById("namediv");
    var point = document.getElementById("point");
    var pn = document.getElementById("pn");
    var ppd = document.getElementById("ppd");
    var cpd = document.getElementById("cpd");
    var pwl = document.getElementById("pwl");
    var cwl = document.getElementById("cwl");
    console.log(pwl.innerText, cwl.innerText);
    var playername;
    var pp = parseInt(ppd.innerText)
    var cp = parseInt(cpd.innerText)
    var noMatch = 0;
    var matchCount = 1;
    var playerselect;
    var computerselect;
    playerdiv.innerHTML = ""


    // createImg

    function createImg(sr) {
        let y = document.createElement("IMG");
        y.setAttribute("src", sr);
        y.setAttribute("width", "200");
        y.setAttribute("height", "200");
        y.style.borderRadius = "40px"
        y.style.border = "10px"
        y.style.borderStyle = "solid"
        y.style.borderColor = "#bafffa"
        playerdiv.appendChild(y);

    }

    function rockfun() {
        playerdiv.innerHTML = ""
        createImg("rock.png")
        rock.removeEventListener('click', rockfun)
        paper.removeEventListener('click', paperfun)
        scissors.removeEventListener('click', scissorsfun)
        clicksound.play()
        playerselect = "rock"


        computerchoose()
        setTimeout(() => {

            playerdiv.innerHTML = ""
            computerdiv.innerHTML = ""
            rock.addEventListener('click', rockfun)
            paper.addEventListener('click', paperfun)
            scissors.addEventListener('click', scissorsfun)
            pwl.style.display = "none"
            cwl.style.display = "none"

        }, 3000)

    }

    function paperfun() {
        playerdiv.innerHTML = ""
        createImg("paper.png")
        rock.removeEventListener('click', rockfun)
        paper.removeEventListener('click', paperfun)
        scissors.removeEventListener('click', scissorsfun)
        clicksound.play()
        computerchoose()
        playerselect = "paper"

        setTimeout(() => {

            playerdiv.innerHTML = ""
            computerdiv.innerHTML = ""
            rock.addEventListener('click', rockfun)
            paper.addEventListener('click', paperfun)
            scissors.addEventListener('click', scissorsfun)
            pwl.style.display = "none"
            cwl.style.display = "none"

        }, 3000)

    }

    function scissorsfun() {
        playerdiv.innerHTML = ""
        createImg("scissors.png")
        rock.removeEventListener('click', rockfun)
        paper.removeEventListener('click', paperfun)
        scissors.removeEventListener('click', scissorsfun)
        clicksound.play()
        computerchoose()
        playerselect = "scissors"

        setTimeout(() => {

            playerdiv.innerHTML = ""
            computerdiv.innerHTML = ""
            rock.addEventListener('click', rockfun)
            paper.addEventListener('click', paperfun)
            scissors.addEventListener('click', scissorsfun)
            pwl.style.display = "none"
            cwl.style.display = "none"

        }, 3000)
    }

    function creategif(sr) {
        let y = document.createElement("IMG");
        y.setAttribute("src", sr);
        y.setAttribute("width", "200");
        y.setAttribute("height", "200");
        computerdiv.appendChild(y);

    }
    // bgm.play()
    // // createcomputerImg

    function createcomputerImg(sr) {
        let y = document.createElement("IMG");
        y.setAttribute("src", sr);
        y.setAttribute("width", "200");
        y.setAttribute("height", "200");
        y.style.borderRadius = "40px"
        y.style.border = "10px"
        y.style.borderStyle = "solid"
        y.style.borderColor = "#bafffa"
        computerdiv.appendChild(y);
    }

    // //creategif



    // // reset

    // function reset() {
    //     setTimeout(() => {
    //         Reset.style.display = "flex"
    //     }, 1000)

    // }

    // // point
    // function rpsselect() {

    //     imgbtn.forEach(x => {

    //         var id = x.id
    //         x.addEventListener('click', () => {

    //             if (id === 'rock') {

    //                 Reset.style.display = "none"
    //                 playerdiv.innerHTML = ""
    //                 computerdiv.innerHTML = ""
    //                 createImg("rock.png")
    //                 creategif("load.gif")
    //                 reset()
    //                 computerchoose()
    //                 playerselect = id
    //                 img.style.display = "none"

    //             }
    //             if (id === 'paper') {

    //                 Reset.style.display = "none"
    //                 playerdiv.innerHTML = ""
    //                 computerdiv.innerHTML = ""
    //                 createImg("paper.png")
    //                 creategif("load.gif")
    //                 reset()
    //                 computerchoose()
    //                 playerselect = id
    //                 img.style.display = "none"

    //             }


    //             if (id === 'scissors') {

    //                 Reset.style.display = "none"
    //                 playerdiv.innerHTML = ""
    //                 computerdiv.innerHTML = ""
    //                 createImg("scissors.png")
    //                 creategif("load.gif")
    //                 reset()
    //                 computerchoose()
    //                 playerselect = id
    //                 img.style.display = "none"

    //             }

    //         })

    //     });

    // }



    // random

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    // computerchoose

    function computerchoose() {

        creategif("load.gif")
        setTimeout(() => {

            computerdiv.innerHTML = ""
            const computerimg = ["rock.png", "paper.png", "scissors.png"]
            const comclass = ["rock", "paper", "scissors"]
            let num = getRandomInt(0, 3)
            let n = num

            createcomputerImg(computerimg[n])

            computerselect = comclass[n]
            // console.log(comclass[n]);


            if (playerselect === computerselect) {
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pwl.style.color = "#00fbff"
                cwl.style.color = "#00fbff"
                pwl.innerText = "Draw"
                cwl.innerText = "Draw"
                pp += 0;
                cp += 0;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "rock" && computerselect === "paper") {
                pwl.style.color = "#ff0000"
                cwl.style.color = "#ffe600"
                pwl.innerText = "LOSE"
                cwl.innerText = "WIN"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 0;
                cp += 1;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "rock" && computerselect === "scissors") {
                pwl.style.color = "#ffe600"
                cwl.style.color = "#ff0000"
                pwl.innerText = "WIN"
                cwl.innerText = "LOSE"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 1;
                cp += 0;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "paper" && computerselect === "rock") {
                pwl.style.color = "#ffe600"
                cwl.style.color = "#ff0000"
                pwl.innerText = "WIN"
                cwl.innerText = "LOSE"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 1;
                cp += 0;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "paper" && computerselect === "scissors") {
                pwl.style.color = "#ff0000"
                cwl.style.color = "#ffe600"
                pwl.innerText = "LOSE"
                cwl.innerText = "WIN"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 0;
                cp += 1;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "scissors" && computerselect === "rock") {
                pwl.style.color = "#ff0000"
                cwl.style.color = "#ffe600"
                pwl.innerText = "LOSE"
                cwl.innerText = "WIN"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 0;
                cp += 1;
                cpd.innerText = cp
                ppd.innerText = pp
            } else if (playerselect === "scissors" && computerselect === "paper") {
                pwl.style.color = "#ffe600"
                cwl.style.color = "#ff0000"
                pwl.innerText = "WIN"
                cwl.innerText = "LOSE"
                pwl.style.display = "flex"
                cwl.style.display = "flex"
                pp += 1;
                cp += 0;
                cpd.innerText = cp
                ppd.innerText = pp
            }
            console.log("playerselect : " + playerselect + ":" + pp);
            console.log("computerselect : " + computerselect + ":" + cp);

        }, 1000)
        if (matchCount == noMatch ) {
            playerdiv.style.display = "none"
            computerdiv.style.display = "none"
            img.style.display = "none"
            namediv.style.display = "none"
            point.style.display = "none"
            console.log("player ==>" + pp)
            console.log("computer ==>: " + cp)
            if (pp === cp) {
                win.innerHTML = "DRAW"
                win.style.display = "flex"
                win.style.backgroundColor = "blue"
            } else if (pp > cp) {
                win.innerHTML = "WIN"
                win.style.display = "flex"
                win.style.backgroundColor = "green"
            } else {
                win.innerHTML = "LOSE"
                win.style.display = "flex"
                win.style.backgroundColor = "red"
            }
        }
        matchCount++;

    }







    // start.addEventListener('click', () => {
    //     // img.style.display = "flex"
    //     start.style.display = "none"
    //     playerinput.style.display = "flex"
    //     save.style.display = "flex"
    //     save.style.cursor = "default";

    // })

    // Reset.addEventListener('click', () => {
    //     // playerdiv.innerHTML = ""
    //     // computerdiv.innerHTML = ""
    //     Reset.style.display = "none"
    //     img.style.display = "flex"
    //     img.addEventListener('click', rpsselect)
    // })

    // save.addEventListener('click', () => {
    //     playername = name.value
    //     save.style.display = "none"
    //     play.style.display = "flex"
    //     play.style.cursor = "default";
    // })

    // play.addEventListener('click', () => {

    //     img.style.display = "flex"
    //     play.style.display = "none"
    //     playerinput.style.display = "none"
    //     console.log(playername);
    //     img.addEventListener('click', rpsselect)

    // })


    start.addEventListener('click', () => {
        start.style.display = "none"
        playerinput.style.display = "flex"
        matchInput.style.display = "flex"
        save.style.display = "flex"
        clicksound.play().catch(err => {
            console.error("Sound failed:", err);
        });

    })

    save.addEventListener('click', () => {

        if (name.value === "") {
            // alert("put Player name")
            name.placeholder = "put player name"
            playerinput.style.display = "flex"
            save.style.display = "flex"
            play.style.display = "none"
        } else {
            if (mat.value === "") {
                noMatch = 3;
            } else {
                noMatch = parseInt(mat.value);
            }
            console.log(name.value);
            console.log(noMatch);
            playername = name.value
            playerinput.style.display = "none"
            matchInput.style.display = "none"
            save.style.display = "none"
            play.style.display = "flex"
            clicksound.play()

        }


    })

    play.addEventListener('click', () => {

        play.style.display = "none"
        img.style.display = "flex"
        namediv.style.display = "flex"
        point.style.display = "flex"
        gn.style.color = "#00a284"
        clicksound.play()
        pn.innerText = playername

    })

    rock.addEventListener('click', rockfun)

    paper.addEventListener('click', paperfun)

    scissors.addEventListener('click', scissorsfun)

}
