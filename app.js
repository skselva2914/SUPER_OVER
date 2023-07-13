let rcbruns=["_","_","_","_","_","_"];
let lsgruns=["_","_","_","_","_","_"];

let rcbscore=0;
let lsgscore=0;

let ballcounter=0;
function strikeBall(){
    ballcounter++;
    let run=Math.floor(Math.random()*5)*2;

    if(run==8)
    {
        run='W';
    }

    //rcb
    if(ballcounter<=6)
    {
        if(run !='W')
        {
            rcbscore=rcbscore+run;
            document.getElementById("rcbscore").textContent=rcbscore;
           
        }
        rcbruns[ballcounter-1]=run;
        document.getElementById("rcbruns").textContent=rcbruns;
    }
    else if(ballcounter<=12&& ballcounter>6)
    {
        if(run !='W')
        {
            lsgscore=lsgscore+run;
            document.getElementById("lsgscore").textContent=lsgscore;
           
        }
        lsgruns[ballcounter-7]=run;
        document.getElementById("lsgruns").textContent=lsgruns;
        if(lsgscore>rcbscore)
        {
            ballcounter=12;
        }
    }
    if(ballcounter>=12)
    {
        document.getElementById("bat").disabled=true;

        let maxScore=Math.max(rcbscore,lsgscore);
        if(rcbscore==maxScore)
        {
            document.getElementById("rcb").classList.add('winner');
        }
       else if(lsgscore==maxScore)
        {
            document.getElementById("lsg").classList.add('winner');
        }
    }
}
