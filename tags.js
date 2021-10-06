//info individuel du photographe 
import data from "./data.js"
function displayInfoTags () {  
  //Creation de la variable
   const urlParams = new URLSearchParams(window.location.search);   
   //Accès aux valeurs
   let tagPhotographe = urlParams.get('tag');   
   for(let p of data.photographers) {
    console.log(p.tags);
    console.log(tagPhotographe);
    if (p.tags.includes(tagPhotographe)) {          
         const str =
         `<article class="photo__tags">
            <figure class="photo__tags" >
               <img class="img__tags" src="portraits/${p.portrait}" alt=""> 
               <Figcaption class="photo__legendTags" >            
                  <h2 id="name" class="name__tags">${p.name}</h2>     
                  <h3 id="city" class="city__tags">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine__tags">${p.tagline}</p>
                  <p id="price" class="price__tags">${p.price}€/jour</p>
                  <div id="tag" class="tag__photographeTags">${p.tags} </div>                           
               </figcaption>
            </figure> 
         </article>`;
         document.querySelector(".photographe").innerHTML += str;                 
      }
   }   
}
displayInfoTags();