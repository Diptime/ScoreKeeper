var b1=document.querySelector("#pb1");
var b2=document.querySelector("#pb2");
var b3=document.querySelector("#reset");
var s1=0,s2=0;
var score1=document.querySelector("#p1");
var score2=document.querySelector("#p2");
var limit=5;
var limt=document.querySelector("input");
var limtdisp=document.querySelector("#nu");
b1.addEventListener("click",function() {
    if(s1!=limit){
        s1++;
        score1.textContent=s1;
        if(s1==limit){
            score1.classList.add("winner");
            alert("Game Over-player 1 won");
        }
    }
});
b2.addEventListener("click",function() {
    if(s2!=limit){
        s2++;
        score2.textContent=s2;
        if(s2==limit){
            score2.classList.add("winner");
            alert("Game Over-player 2 won");
        }
    }
});
limt.addEventListener("change",function() {
    limit=parseInt(document.querySelector("input").value);
    limtdisp.textContent=limit;
});
function reset(params) {
    s1=0;
    s2=0;
    score1.textContent=0;
    score2.textContent=0;
    limit=5;
    limtdisp.textContent=5;
    limt.textContent="";
}
b3.addEventListener("click",function() {
    reset();
});
