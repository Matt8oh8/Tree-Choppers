var log = 0;
var money = 0;
var upgrade = 1;
var upgradecost = 1;
var worker = 0;
var equipment = 1;
var workercost = 1;

window.onload = function() {
  workerwork();
  police();
};




function addlog() {
	 log = log + upgrade;
	console.log('logs' + log);
	document.getElementById('log').innerHTML = log;
	// body...
}
function addmoney() {
	if(log > 0){
	log--;
	money++;
	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{ 
		console.log('you have no logs');
		alert('you have no logs, click on the log button to get more');
	};
}
function sell10() {
	if(log >= 10){
		 log = log - 10
		 money = money + 10
		 	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{
		alert('you do not have enough logs to sell');
	};
	// body...
}
function upgradelog() {
	if(money >= 30 * upgradecost){
		money = money - 30 * upgradecost; 
		upgrade++;
		upgradecost++;
		console.log('upgrade' + upgrade)
		console.log('upgradecost' + upgradecost)
		document.getElementById('upgrade').innerHTML = upgrade;
		document.getElementById('money').innerHTML = money;
	document.getElementById('upgradecost').innerHTML = upgradecost * 30;
	}else{
		alert('you dont have enough money to upgrade');
		console.log(money + 'is not enough');
	};
}
function autoclicker(){
	if (money >= 300 * workercost) {
		money = money-300*workercost;
		workercost = workercost * 1;
		worker++;
		document.getElementById('money').innerHTML = money
		console.log('bought worker,worker total is' + worker)
	}else{
		alert('You do not have enough money to buy a worker');
	}
}
var workerwork = function(){
	setInterval(function(){
		log = log+(worker*5);
		document.getElementById('log').innerHTML = log;
		console.log('logged with ' + worker)
	}, 1000)
}
var police = function(){

	setInterval(function(){
		console.log("police");
		if (worker > equipment){
			money = money-(300*worker-equipment);
			alert('you have been fined 300 for not paying for safety equipment');
			document.getElementById('money').innerHTML = money;
			console.log('checked the workers');
		}else{
			money = money + 50;
			document.getElementById('money').innerHTML = money;
		};
	}, 300000);
}
function buyequipment() {
	if (money >= 100){
		money = (money-200)
		equipment++;
	document.getElementById('money').innerHTML = money;
	document.getElementById('equipment').innerHTML = equipment;
}else{
	alert('You do not have enough money to buy worker equipment');
	};
}
//audio
var boom = new Audio("music/tetris.mp3");
var countUp = function (){
	var condition = true;
	boom.loop = condition;
	boom.play()
}
countUp();
//end of audio