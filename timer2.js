var val = '01:59:55';

var d = new Date('20/01/2014');
var n = d.getHours(); 
alert(n);



function atualizarTimer() {
    
	var time = val;
	//span.uptimed is a string like 01:23:45
    //var time = '01:23:45';//$('span.uptimed').text();

	
    var d = new Date();
    times = time.split(':');
    d.setHours(times[0]);
    d.setMinutes(times[1]);
    d.setSeconds(times[2]);
    d.setSeconds(d.getSeconds()+1);
	
	val = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	
    document.getElementById("uptimed").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
  }
  


//etInterval(atualizarTimer, 1000);

var intervalID = setInterval(atualizarTimer, 1000); // Will alert every second.

/*setInterval(function() {
          atualizarTimer();
    }, 1000);*/