function gohome(){
    window.location.href = "../../index.html";
}
let bet = 0;
let money = localStorage.getItem("money");
document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;

let ranbae = Math.round(Math.random() * 300);
if(ranbae < 100){
    ranbae += 100;
}
document.getElementById("baedang").innerHTML = `${ranbae}%`;

function holzzakgame(cho) {
    let bet = parseInt(localStorage.getItem("bet"));
    if (bet == null || bet === 0) {
        alert("베팅하세요");
        popup();
    } else {
        let num = Math.round(Math.random() * 100 + 1);
        if (num % 2 === cho) {
            money = money + Math.round(bet * (ranbae / 100));
            localStorage.setItem("bet", 0);
            localStorage.setItem("money", money);
            money = Math.round(parseInt( localStorage.getItem("money")));
            document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
            console.log("정답");
            console.log(num);
            alert("성공!");
        } else {
            alert("실패!");

            document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
            console.log("오답");
            console.log(num);
        }
    }
}
function popup(){
    window.open("../betting.html", "베팅하기", "width = 300, height = 500, top = 100, left = 200, status = no, resizable = no, scrollbars = no, toolbars=no");
}