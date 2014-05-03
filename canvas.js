function iniciar()
{
	var elem=document.getElementById('lienzo');
	
	var lienzo=elem.getContext('2d');
	
	
	elem.width=500;
	elem.height=300;
	
	/*
	console.log(elem.width);
	console.log(elem.height);
	*/
	
	lienzo.strokeRect(100, 100, 50, 50);
	lienzo.strokeRect(11, 11, 18, 18);
	lienzo.fillStyle="#FF0000";
	lienzo.fillRect(10, 35, 20, 20);
	lienzo.fillStyle="#00FF00";
	lienzo.fillRect(10, 60, 20, 20);
	lienzo.fillStyle="#0000FF";
	lienzo.fillRect(10, 85, 20, 20);
	
	var gradiente = lienzo.createLinearGradient(0, 0, 0, 300);
	gradiente.addColorStop(0.5, '#0000FF');
	gradiente.addColorStop(1, '#00FF00');
	lienzo.fillStyle=gradiente;
	
	lienzo.fillRect(10, 180, 130, 100);
	lienzo.fillRect(150, 180, 230, 100);
	
	lienzo.fillStyle="#FF0000";
	
	
	//lienzo.fillRect(110, 110, 100, 100);
	//lienzo.clearRect(120, 120, 80, 80);
}
addEventListener("load", iniciar);
