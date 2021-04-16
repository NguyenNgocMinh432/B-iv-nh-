// let count = 0;
// function cong() {
//     let tang = document.getElementById("tang");
//     count++;
//     tang.innerText = count;
// }

// function tru() {
//     let giam = document.getElementById("tang");
//     count--;
//     giam.innerText = count;
// }

let count;
function chay() {
    let input = Number(document.getElementById("clockStrike").value);
    input--;
    document.getElementById("clockStrike").value = input;
}

}
function start(){

    count= document.querySelector(`So`).value;
    document.getElementById("time").textContent = count;
    chay();
}

