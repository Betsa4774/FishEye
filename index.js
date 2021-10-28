//création de la nav var 
function addTags(tags) {
   const newTag = document.createElement("li");
   newTag.classList.add("header-nav-tag");
   newTag.innerHTML = `<p>#${tags}</p>`;
   document.querySelector("ul").appendChild(newTag);

}
addTags("Portrait");
addTags("Fashion");
addTags("Art");
addTags("Architecture");
addTags("Travel");
addTags("sport");
addTags("Animals");
addTags("Events");


import data from "./data.js"
// console.log(data.photographers)
const infoPhotographes = data.photographers

// info tous photographes
function displayPhotographes(photographers) {   

  for(let p of photographers) {  
      const aTags = p.tags;
      let spanTags = "";

      aTags.forEach(sTag => {
         spanTags += `<span class="tag__photographes">#${sTag}</span>`
      });
      
      let str =
      `<article class="photos-photographe">
         <form action="/photographe.html" id=${p.id} >
            <input type="hidden" name="id" value=${p.id} >            
            <figure class="photo" >         
               <img class="photo__presentation" src="information/Sample Photos/Photographers ID Photos/${p.portrait}" alt="photo distinctive du photographe"> 
               <h2 id="name" class="name">${p.name}</h2>  
            </figure> 
         </form>         
         <Figcaption class="photo__legend" >         
            <h3 id="city" class="city">${p.city},${p.country}</h3>                                      
            <p id="tagLine" class="tagLine">${p.tagline}</p>
            <p id="price" class="price">${p.price}€/jour</p>
            ${spanTags}              
         </figcaption>                 
      </article>`;
      document.querySelector(".photographes").innerHTML += str          
   }  
}
displayPhotographes(infoPhotographes);
//yo

//eventlistener -filterPhotographes est la fonction
// const filterNavTags = document.querySelectorAll(".header-nav-tag");
// function filterPhotographes(){
//  // alert('funciona'); 
// // console.log(funciona)
// }

// for (let filterNavTag of filterNavTags){
//    filterNavTag.firstElementChild.addEventListener("click",
//     filterPhotographes(filterNavTag.firstElementChild.textContent));

// }

//christian
// const filterNavTags = document.querySelectorAll(".header-nav-tag")
// for (let filterNavTag of filterNavTags){
//    filterNavTag.addEventListener("click",
//     filterPhotographes(filterNavTag.firstElementChild.textContent));
// }

// const filterTagPhotographers = document.querySelectorAll(".tag__photographes") //event para los clicks delas fotos
// for (let filterTagPhotographer of filterTagPhotographers){
//    filterTagPhotographer.addEventListener("click",
//       filterPhotographes(filterTagPhotographer.textContent));
// }

//function appel l'event-christian
// function filterPhotographes(sTag){
//    let oPhotographesFiltered = {};
//    for(let p of infoPhotographes) { 
//       const aTags = p.tags;
      
//       let IsFiltered = aTags.filter(sTagFiltered => {
//          return  p.tags.includes(sTagFiltered)
//       });

//       console.log(IsFiltered);
//       console.log(sTag);

//       // if (IsFiltered == )
//       //  oPhotographesFiltered.add(p);
//   }
// }
// 
// function filterPhotographes(atags, filtre) {

// const filteredPhotographers = atags.filter(p =>{
//   return  p.tags.includes(filtre)    
// })
// return filteredPhotographers
// }

// filterPhotographes((atags, filtre))

// document.querySelectorAll(".tag__photographes").forEach(tag => {
//    tag.addEventListener("click", function(e){

//       const filterPhotographes = filterPhotographes(atags, e.target.nodeValue)
//       displayIinfoPhotographes(filterPhotographes)
//       })
// })

const articles = document.querySelectorAll(".photos-photographe")
console.log(articles);
for (let article of articles){
   article.firstElementChild.addEventListener("click", function(e){
      article.firstElementChild.submit()
   });
}














