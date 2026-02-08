console.log("Start")

setTimeout(function xyz(){ console.log("timer callBack")},1000);

console.log("End")

//  million line of code
let startDate = new Date().getTime();
let endDate = startDate
while(endDate < startDate+10000) {
    endDate = new Date().getTime();
}

console.log("while expires")