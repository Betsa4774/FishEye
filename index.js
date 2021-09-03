import data from "./data.js"
console.log(data.photographers)
for(let p of data.photographers) {
    console.log(p.city)
}
    
 const nameMK = document.getElementById("name__photographeMK"); 
 const countryMK = document.getElementById("name__photographe-countryMK");
 const tagLineMK = document.getElementById("tagLine__photographe-MK");
 const priceMK = document.getElementById("price__photographeMK");

 const nameERW = document.getElementById("name__photographeERW"); 
 const countryERW = document.getElementById("name__photographe-countryERW");

 const nameTG = document.getElementById("name__photographeTG"); 
 const countryTG = document.getElementById("name__photographe-countryTG");
 const nameNB = document.getElementById("name__photographeNB"); 
 const countryNB = document.getElementById("name__photographe-countryNB");
 const nameRD= document.getElementById("name__photographeRD"); 
 const countryRD = document.getElementById("name__photographe-countryRD");
 const nameMN = document.getElementById("name__photographeMN"); 
 const countryMN = document.getElementById("name__photographe-countryMN");



 function namePhotographes () {
    for(let p of data.photographers) {
       if (p.id == 243) { nameMK.innerHTML= p.name;countryMK.innerHTML= p.city + "," + p.country;tagLineMK.innerHTML= p.tagline;priceMK.innerHTML=p.price + "/jour";}
        if (p.id == 930) { nameERW.innerHTML= p.name;countryERW.innerHTML= p.city + "," + p.country;}
         if (p.id == 82) { nameTG.innerHTML= p.name;countryTG.innerHTML= p.city + "," + p.country;}
          if (p.id == 527) { nameNB.innerHTML= p.name;countryNB.innerHTML= p.city + "," + p.country;}
          if (p.id == 925) { nameRD.innerHTML= p.name;countryRD.innerHTML= p.city + "," + p.country;}
          if (p.id == 195) { nameMN.innerHTML= p.name;countryMN.innerHTML= p.city + "," + p.country;}
    }
    //  data.photographers.id(243)
    //  console.log(name)
 }

 namePhotographes ();

//  console.log(p.name); 