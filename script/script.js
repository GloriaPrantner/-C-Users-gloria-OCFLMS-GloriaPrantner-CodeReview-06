var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var arr = [];
    // creating base class
    var Location = /** @class */ (function () {
        function Location(name, city, zip, adress, img, date, time) {
            this.name = "";
            this.city = "";
            this.adress = "";
            this.img = "";
            this.date = "";
            this.time = "";
            this.name = name;
            this.city = city;
            this.zip = zip;
            this.adress = adress;
            this.img = img;
            this.date = date;
            this.time = time;
            arr.push(this);
        }
        ;
        Location.prototype.display = function () {
            return " \n\t\t\t<img class=\"rounded w-100 d-sm-none d-md-block\" src=\"" + this.img + "\" alt=\"" + this.name + "\"> <br>\n\t\t\t<span class=\"font-weight-bold\">" + this.name + "</span> <br>\n\t\t\t" + this.adress + " <br>\n\t\t\t" + this.zip + " " + this.city + " <br>\n\t\t\t<sup>Created: " + this.date + " " + this.time + "</sup><br>";
        };
        ;
        return Location;
    }());
    ;
    // child class 1
    var Restaurant = /** @class */ (function (_super) {
        __extends(Restaurant, _super);
        function Restaurant(name, city, zip, adress, img, date, time, num, type, webSite) {
            var _this = _super.call(this, name, city, zip, adress, img, date, time) || this;
            _this.num = num;
            _this.type = type;
            _this.webSite = webSite;
            return _this;
        }
        ;
        Restaurant.prototype.display = function () {
            return "\n\t\t\t" + _super.prototype.display.call(this) + " \n\t\t\t" + this.name + " is a " + this.type + " restaurant. <br>\n\t\t\tMore infos: <br>\n\t\t\tTel: " + this.num + " <br>\n\t\t\tWebsite: <a href=\"" + this.webSite + "\">" + this.webSite + "</a>";
        };
        ;
        return Restaurant;
    }(Location));
    ;
    // child class 2
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event(name, city, zip, adress, img, date, time, eventDate, eventTime, price, webSite) {
            var _this = _super.call(this, name, city, zip, adress, img, date, time) || this;
            _this.eventDate = eventDate;
            _this.eventTime = eventTime;
            _this.price = price;
            _this.webSite = webSite;
            return _this;
        }
        ;
        Event.prototype.display = function () {
            return "\n\t\t\t" + _super.prototype.display.call(this) + " \n\t\t\t" + this.name + " is on " + this.eventDate + " at " + this.eventTime + " <br>\n\t\t\tCost: <br>\n\t\t\t" + this.price + "\u20AC<br>\n\t\t\t<a href=\"" + this.webSite + "\">More infos</a>";
        };
        ;
        return Event;
    }(Location));
    ;
    // data
    var loc0 = new Location("Schönbrunn Park", "Vienna", 1130, "Maxingstraße 13b", "img/loc0.jpg", "02.05.2020", "14:21");
    var loc1 = new Location("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/loc1.jpg", "05.05.2020", "10:12");
    var rest0 = new Restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/rest0.jpg", "03.05.2020", "15:40", "+43(1) 9529215", "Indian", "biofrische.wien");
    var rest1 = new Restaurant("Ebi", "Vienna", 1210, "Leopoldauer Str 45-47", "img/rest1.jpg", "02.06.2020", "9:01", "+43 (1) 2703838", "Chinese", "https://www.ebi-vienna.at/ebi21");
    var eve0 = new Event("Die Toten Hosen", "Vienna", 1150, "Stadthalle", "img/eve0.jpg", "30.03.2020", "12:01", "4.7.2020", "20:00", "64,50", "https://www.dietotenhosen.de/");
    var eve1 = new Event("Pizzera & Jaus", "Vienna", 1150, "Stadthalle", "img/eve1.jpg", "19.06.2020", "13:05", "17.04.2021", "19:30", "41", "http://www.paulpizzera.at/pizzera-jaus/");
    // loop for printing in HTML
    for (var i = 0; i < arr.length; i++) {
        $("#wrapping").append("<div id= \"box" + i + "\" class=\"location bg-info text-center rounded mt-3 p-3 col-sm-12 col-md-5 offset-md-1 col-lg-2 offset-lg-1\"> </div>");
        $("#box" + i).append(arr[i].display());
    }
    ;
});
