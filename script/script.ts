$(document).ready(function (){

let arr = [];

// creating base class
class Location {
	name= "";
	city: string= "";
	zip: number; 
	adress="";
	img="";
	date="";
	time="";

constructor(name, city, zip, adress, img, date, time) {
		this.name = name;
		this.city = city;
		this.zip = zip;
		this.adress = adress;
		this.img = img;
		this.date= date;
		this.time= time;
		arr.push(this);
	};

	display(){
		return ` 
			<img class="rounded w-100 d-sm-none d-md-block" src="${this.img}" alt="${this.name}"> <br>
			<span class="font-weight-bold">${this.name}</span> <br>
			${this.adress} <br>
			${this.zip} ${this.city} <br>
			<sup>Created: ${this.date} ${this.time}</sup><br>`;
	};
};


// child class 1
class Restaurant extends Location {
	num;
	type;
	webSite;
constructor(name, city, zip, adress, img, date, time, num, type, webSite){
		super(name, city, zip, adress, img, date, time);
		this.num= num;
		this.type= type;
		this.webSite= webSite;
	};
	display(){
		return `
			${super.display()} 
			${this.name} is a ${this.type} restaurant. <br>
			More infos: <br>
			Tel: ${this.num} <br>
			Website: <a href="${this.webSite}">${this.webSite}</a>`;
	};
};

// child class 2
class Event extends Location {
	eventDate;
	eventTime;
	price;
	webSite;

constructor(name, city, zip, adress, img, date, time, eventDate, eventTime, price, webSite){
		super(name, city, zip, adress, img, date, time);
		this.eventDate= eventDate;
		this.eventTime= eventTime;
		this.price= price;
		this.webSite=webSite;
	};
	display(){
		return `
			${super.display()} 
			${this.name} is on ${this.eventDate} at ${this.eventTime} <br>
			Cost: <br>
			${this.price}€<br>
			<a href="${this.webSite}">More infos</a>`;
	};
};


// data
let loc0 = new Location ("Schönbrunn Park", "Vienna", 1130, "Maxingstraße 13b", "img/loc0.jpg", "02.05.2020", "14:21");
let loc1 = new Location ("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/loc1.jpg", "05.05.2020", "10:12");

let rest0 = new Restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/rest0.jpg", "03.05.2020", "15:40",  "+43(1) 9529215", "Indian", "biofrische.wien");
let rest1 = new Restaurant("Ebi", "Vienna", 1210, "Leopoldauer Str 45-47", "img/rest1.jpg", "02.06.2020", "9:01", "+43 (1) 2703838", "Chinese", "https://www.ebi-vienna.at/ebi21");

let eve0 = new Event("Die Toten Hosen", "Vienna", 1150, "Stadthalle", "img/eve0.jpg","30.03.2020", "12:01", "4.7.2020", "20:00", "64,50", "https://www.dietotenhosen.de/");

let eve1 = new Event("Pizzera & Jaus", "Vienna", 1150, "Stadthalle", "img/eve1.jpg","19.06.2020", "13:05", "17.04.2021", "19:30", "41", "http://www.paulpizzera.at/pizzera-jaus/");


// loop for printing in HTML
for(let i = 0; i < arr.length; i++){
	$("#wrapping").append(`<div id= "box${i}" class="location bg-info text-center rounded mt-3 p-3 col-sm-12 col-md-5 offset-md-1 col-lg-2 offset-lg-1"> </div>`)
	$("#box" + i).append(arr[i].display());
	};
})