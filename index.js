import data from "./data.js"
// console.log(data.photographers)
const ps = data.photographers

// info tous photographes
function displayIinfoPhotographes(photographers) {   
   for(let p of photographers) {
    console.log(p);
     
      const str =
      `<article class="photos-photographe">
         <form action="/photographe.html" id=${p.id} >
            <input type="hidden" name="id" value=${p.id} >
            
            <figure class="photo" >         
                  <img class="photo__presentation" src="portraits/${p.portrait}" alt=""> 
                  <h2 id="name" class="name">${p.name}</h2>  
               <Figcaption class="photo__legend" >         
                  <h3 id="city" class="city">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine">${p.tagline}</p>
                  <p id="price" class="price">${p.price}€/jour</p>
                  <div id="tag" class="tag__photographe">${p.tags} </div>                           
               </figcaption>
            </figure> 
         </form>
      </article>`;
      document.querySelector(".photographes").innerHTML += str          
   }   
}
displayIinfoPhotographes(ps);

const articles = document.querySelectorAll(".photos-photographe")
console.log(articles);
for (let article of articles){
   article.firstElementChild.addEventListener("click", function(e){
      article.firstElementChild.submit()
   });
}














