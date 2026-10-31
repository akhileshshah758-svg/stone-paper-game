let userscore=0;
let compscore=0;

const msg=document.querySelector("#msg");
const images=document.querySelectorAll(".image");

const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_score");

const gencomp = () =>{
    const options=["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};

const drawgame=()=>{
    msg.innerText="GAme was draw ... play again. ";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="#FF0000";
    }
};

const playgame=(userchoice)=>{

    const compchoice=gencomp();

    if(compchoice===userchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userwin=(compchoice==="paper"?false:true);
        }else if(userchoice==="paper"){
            //rock,scissor
            userwin=(compchoice==="scissor"?false:true);
        }
        else  {
            //rock,paper
            userwin=(compchoice==="rock"?false:true);
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

images.forEach((image) =>{
    image.addEventListener("click",()=>{
        const userchoice=image.getAttribute("id");
        playgame(userchoice);
    });
});