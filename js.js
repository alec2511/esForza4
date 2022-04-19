var giocatore=1;
var array=[0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,
           0,0,0,0,0,0,0]

function premo(bot){
    console.log("sono qui");
    var celle=document.getElementsByClassName("c");
    for(var i=42-7+bot;i>0;i=i+7){
        if(array[i]==0){
            if(giocatore==1){
                array[i]=1;
                giocatore=2;
                celle[i].style.backgroundColor="red";
                 console.log("sono qui");
            }else{
                
            array[i]=2;
                giocatore=1;
                celle[i].style.backgroundColor="yellow";
           
            }
        }
    }
}