import data from "./data.js"
// console.log(data.photographers)
const ps = data.photographers

// info tous photographes
function displayIinfoPhotographes(photographers) {   
   var i;
   for(let p of photographers) {  
  const aTags =p.tags;

      var str =
      `<article class="photos-photographe">
         <form action="/photographe.html" id=${p.id} >
            <input type="hidden" name="id" value=${p.id} >
            
            <figure class="photo" >         
                  <img class="photo__presentation" src="information/Sample Photos/Photographers ID Photos/${p.portrait}" alt="photo distinctive du photographe"> 
                  <h2 id="name" class="name">${p.name}</h2>  
               <Figcaption class="photo__legend" >         
                  <h3 id="city" class="city">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine">${p.tagline}</p>
                  <p id="price" class="price">${p.price}€/jour</p>`;

                  for (i = 0; i < aTags.length; i++) {
                   str = str + `<li class="header-nav-tag">
                    <a class="tag1" href="tags.html?tag=`+aTags[i].toString() +`">#`+aTags[i].toString() +`</a>
                    </li>`; 
                  //    console.log(aTags[i]);
                   } 

                  str = str + `</figcaption>
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














