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

//Event Listner: navTag 
let tagsNav = document.querySelectorAll('li');
tagsNav.forEach(function(i){
   i.addEventListener('click', function(){
       //alert('funciona');
      
   })
});

//Event Listener photographerTag
let tagPhotographer = document.querySelectorAll('span');
tagPhotographer.forEach(function(i){
   i.addEventListener('click', function(){
     // alert('funciona');
   })
});



   // const filteredPhotographers = atags.filter(p =>{
   //   return  p.tags.includes(filtre)    
   // })
   // return filteredPhotographers
   // }
// const filteredNavTags = data.photographers.filter((filteredNavTags)=> {
//    return filteredNavTags === tagPhotographer;
// })
// console.log(filteredNavTags);


const articles = document.querySelectorAll(".photos-photographe")
console.log(articles);
for (let article of articles){
   article.firstElementChild.addEventListener("click", function(e){
      article.firstElementChild.submit()
   });
}














