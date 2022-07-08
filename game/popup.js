let money = localStorage.getItem("money");
document.getElementById("money").innerHTML = `${money}`;
function betting(){
    bet = document.getElementById("bet").value;
    if(bet > money){
        alert("돈이 부족합니다.");
    }else{
        money = money - bet;
        localStorage.setItem("money", money);
        localStorage.setItem("bet", bet);
        money = localStorage.getItem("money");
        document.getElementById("money").innerHTML = `${money}`;
    }
}