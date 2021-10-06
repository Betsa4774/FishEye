import data from "./data.js"
function infoPhotographe () {  
  //Creation de la variable
   const urlParams = new URLSearchParams(window.location.search);   
   
   //Accès aux valeurs
   let idPhotographe = urlParams.get('id'); 
   for(let p of data.photographers) {    
    if (p.id == idPhotographe) {          
         const str =
         `<article class="photo__profiles">
            <figure class="photo__presentationProfile" >
               <img class="img__profile" src="portraits/${p.portrait}" alt=""> 
               <Figcaption class="photo__legendProfile" >            
                  <h2 id="name" class="name__profile">${p.name}</h2>     
                  <h3 id="city" class="city__profile">${p.city},${p.country}</h3>                                      
                  <p id="tagLine" class="tagLine__profile">${p.tagline}</p>
                  <p id="price" class="price__profile">${p.price}€/jour</p>
                  <div id="tag" class="tag__photographeProfile">${p.tags} </div>                           
               </figcaption>
            </figure> 
         </article>`;
         document.querySelector(".photographe").innerHTML += str;                 
      }
   }   
}
infoPhotographe ();


//menu

window.onload = () => {

 //on récupere le select 
 const selectElt = document.querySelector("select"); 
 const selectDiv = document.querySelector(".custom-select"); 
 const newSelect = document.createElement("div");

 newSelect.classList.add("new-select"); 
 newSelect.innerHTML = selectElt.options[selectElt.
    selectedIndex].innerHTML;

    // on crée l'élmént dans le DOM
    selectDiv.appendChild(newSelect);   

    const newMenu = document.createElement("div");
    newMenu.classList.add("select-items", "select-hide");
    
    for(let option of selectElt.options){
    //  console.log(option)name   
    const newOption = document.createElement("div");
    newOption.innerHTML = option.innerHTML;    
    newOption.addEventListener("click", function(){
      
        for(let option of selectElt.options){
            if(option.innerHTML === this.innerHTML){
                
                selectElt.selectedIndex = option.index;
                console.log(selectElt);
                break;
            }
        }
        
        newSelect.click();
    });




    
    newMenu.appendChild(newOption);
}


selectDiv.appendChild(newMenu);

newSelect.addEventListener("click", function(e){
  
    e.stopImmediatePropagation();
    //console.log("click")
    
    this.nextSibling.classList.toggle("select-hide");
    
    this.classList.toggle("active");
});


}