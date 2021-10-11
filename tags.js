//info individuel du photographe 
import data from "./data.js"
function displayTags () {  
  //Creation de la variable
   const urlParams = new URLSearchParams(window.location.search);   
   //Accès aux valeurs
   let tagPhotographe = urlParams.get('tag');   
   var i;
   for(let p of data.photographers) {
   
    const aTags =p.tags;
    if (p.tags.includes(tagPhotographe)) {          
         // const str =
         var str =
         `<article class="photo__tags">        
            <figure >
            <a href="photographe.html?id=${p.id}">
               <img class="img__tags" src="information/Sample Photos/Photographers ID Photos/${p.portrait}" alt=""> 
            </a>
               <Figcaption class="photo__legendTags" >            
                  <a href="photographe.html?id=${p.id}">
                     <h2 id="name" class="name__tags">${p.name}</h2>   
                  </a>    
                  <h3 id="city" class="city__tags">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine__tags">${p.tagline}</p>
                  <p id="price" class="price__tags">${p.price}€/jour</p>`;

                  for (i = 0; i < aTags.length; i++) {
                     str = str + `<span class="header-nav-tag">
                      <a class="tag__legend" href="tags.html?tag=`+aTags[i].toString() +`">#`+aTags[i].toString() +`</a>
                      </span>`; 
                    //    console.log(aTags[i]);
                  }   
                  str = str + `
               </figcaption>                 
            </figure>           
         </article>`;
         document.querySelector(".photographe__tags").innerHTML += str;                 
      }
   }   
}
displayTags();
//const articles = document.querySelectorAll(".photos-photographe");
// const names = document.querySelectorAll(".name__tags");
// const images = document.querySelectorAll(".img__tags")
//console.log(articles);
// const articles = document.querySelectorAll(".photos-photographe")
// console.log(articles);
// for (let article of articles){
//    article.firstElementChild.addEventListener("click", function(e){
//       article.firstElementChild.submit()
//    });
// }

// for (let name of names){
//    name.addEventListener("click", function(e){
//       name.submit()
//    });
// }

// for (let image of images){
//    image.addEventListener("click", function(e){
//       image.submit()
//    });
// }