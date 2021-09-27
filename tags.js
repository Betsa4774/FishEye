//info individuel  

function infoTags () {  
  //Creation de la variable
   const urlParams = new URLSearchParams(window.location.search);
   console.log(urlParams);
   alert(URLSearchParams(window.location.search));
   //Accès aux valeurs
   let tagPhotographe = urlParams.get('tag');
   console.log(tagPhotographe);
   for(let p of data.photographers) {
    console.log(p.tags);
    console.log(tagPhotographe);
    if (p.tags.has(tagPhotographe)) {          
         const str =
         `<article class="photos-photographe">
            <figure class="photo" >
               <img class="photo-presentation" src="portraits/${p.portrait}" alt=""> 
               <Figcaption class="photo__legend" >            
                  <h2 id="name" class="name">${p.name}</h2>     
                  <h3 id="city" class="city">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine">${p.tagline}</p>
                  <p id="price" class="price">${p.price}€/jour</p>
                  <div id="tag" class="tag__photographe">${p.tags} </div>                           
               </figcaption>
            </figure> 
         </article>`;
         document.querySelector(".photographes").innerHTML += str 
      }
   }   
}
infoTags ();