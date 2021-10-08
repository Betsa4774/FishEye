//info individuel du photographe 
import data from "./data.js"
function displayTags () {  
  //Creation de la variable
   const urlParams = new URLSearchParams(window.location.search);   
   //Accès aux valeurs
   let tagPhotographe = urlParams.get('tag');   
   var i;
   for(let p of data.photographers) {
    console.log(p.tags);
    console.log(tagPhotographe);
    const aTags =p.tags;
    if (p.tags.includes(tagPhotographe)) {          
         // const str =
         var str =
         `<article class="photo__tags">
            <figure class="photo__Tags" >
               <img class="img__tags" src="information/Sample Photos/Photographers ID Photos/${p.portrait}" alt=""> 
               <Figcaption class="photo__legendTags" >            
                  <h2 id="name" class="name__tags">${p.name}</h2>     
                  <h3 id="city" class="city__tags">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine__tags">${p.tagline}</p>
                  <p id="price" class="price__tags">${p.price}€/jour</p>`;

                  for (i = 0; i < aTags.length; i++) {
                     str = str + `<li class="header-nav-tag">
                      <a class="tag1" href="tags.html?tag=`+aTags[i].toString() +`">#`+aTags[i].toString() +`</a>
                      </li>`; 
                    //    console.log(aTags[i]);
                  } 
  
                  str = str + `
               </figcaption>                 
            </figure> 
         </article>`;
         document.querySelector(".photographe").innerHTML += str;                 
      }
   }   
}
displayTags();