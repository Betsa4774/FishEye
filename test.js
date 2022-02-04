// const filteredNavTags = data.photographers.filter(function(filteredNavTags)
// {
//    return filteredNavTags === tagPhotographer;
// })
// console.log(filteredNavTags);


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
   
    let vals = [5,4,9,2,1];
   // function isEven(num) {
   //    return (num % 2 == 0)
   // }
   // vals = vals.filter(isEven);
   // console.log(vals);//peut etre avant es6
   //vals = vals.filter(x => x % 2 == 0); 1er option
   //vals = vals.filter(x => x % 2 == 1); 2eme option
   //vals = vals.filter(x => !(x % 2 == 1));//3era option los numeros que no son impares o sea pares-

   console.log(vals);

