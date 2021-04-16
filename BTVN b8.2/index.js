let count;
function chay() {
    let countNumber = Number(document.getElementById("So").value);
    countNumber --;
    document.getElementById("So").value = countNumber ;
}


function start() {
   count = setInterval(() => {
        document.getElementById("So").textContent = count;
        chay();
    }, 1000)
}
function stop(){
    clearInterval(count);
}
