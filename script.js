
var elementos = document.querySelectorAll('.player-options div > img');
var playeropt = "";
var enemyOpt = "";

function winner(){
    const win = document.querySelector(".win")
   
    if(playeropt == "paper"){
        if( enemyOpt == "rock"){
            win.innerHTML = "você ganhou!!"
           
        }else if( enemyOpt == "scisor"){
            win.innerHTML  = "você Perdeu!!"
        }
    }
    if(playeropt == "rock"){
        if( enemyOpt == "scisor"){
            win.innerHTML  = "você Ganhou!!"
           
        }else if(enemyOpt == "paper"){
            win.innerHTML  = "você Perdeu!!"
        }

    }
    if(playeropt == "scisor" && enemyOpt == "paper"){
        win.innerHTML  = "você Ganhou!!"
    }else if(playeropt == "scisor" && enemyOpt == "rock"){
        win.innerHTML  = "você Perdeu!!"
    }


    if(playeropt == "paper" && enemyOpt == "paper"){
        win.innerHTML  = "empate!!"
    }else if(playeropt == "rock" && enemyOpt == "rock"){
        win.innerHTML  = "empate!!"
    }
   if(playeropt == "scisor" && enemyOpt == "scisor"){
    win.innerHTML  = "empate!!"
   }
}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){

        enemyOptions[i].childNodes[0].style.opacity = 0.3;

    }

}

function enemyPlay(){
   let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if( i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
        }
    }
    }

    winner();
 
 function resetOptions(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.2;

    }
 }

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click", (t)=>{
        resetOptions();
        t.target.style.opacity = 1;
        playeropt = t.target.getAttribute('op');
        enemyPlay();
        winner();
      

    })
   
}
