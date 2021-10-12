import data from "./data.js"
// console.log(data.photographers)
const infoPhotographes = data.photographers

// info tous photographes
function displayPhotographes(photographers) {   
  let i;
  for(let p of photographers) {  
      const aTags =p.tags;
      let spanTags = ""
      for (i = 0; i < aTags.length; i++) {
      spanTags += `<span class="tag__photographes">${aTags[i].toString()}</span>`                 
      }                     

      let str =
      `<article class="photos-photographe">
         <form action="/photographe.html" id=${p.id} >
            <input type="hidden" name="id" value=${p.id} >            
            <figure class="photo" >         
               <img class="photo__presentation" src="information/Sample Photos/Photographers ID Photos/${p.portrait}" alt="photo distinctive du photographe"> 
               <h2 id="name" class="name">${p.name}</h2>  
               <Figcaption class="photo__legend" >         
                  <h3 id="city" class="city">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine">${p.tagline}</p>
                  <p id="price" class="price">${p.price}€/jour</p>
                  ${spanTags}              
               </figcaption>
            </figure> 
         </form>
      </article>`;
      document.querySelector(".photographes").innerHTML += str          
   }
  
}
displayPhotographes(infoPhotographes);

function filterPhotographes(photographers, filtre) {
const filteredPhotographers = photographers.filter(p =>{
  return  p.tags.includes(filtre)    
})
return filteredPhotographers
}

document.querySelectorAll(".tag__photographes").forEach(tag => {
   tag.addEventListener("click", function(e){

      const filterPhotographes = filterPhotographes(ps, e.target.nodeValue)
      displayIinfoPhotographes(filterPhotographes)
      })
})

const articles = document.querySelectorAll(".photos-photographe")
console.log(articles);
for (let article of articles){
   article.firstElementChild.addEventListener("click", function(e){
      article.firstElementChild.submit()
   });
}














