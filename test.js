// var newArray = array.filter(function(item) {
//     return condition;
//   });
  
//   const photographers = [{tags: [],},
// {tags: [sport, travel,animals],}
// ]
// const filteredPhotographers = aTags.filter(function(el, key){
//        console.log(el,key)
//     })
//     console.log(filteredPhotographers)

//     const photographers = [events, travel, art];

//     const photographerfiltered = photographers.filter(function(tag) {
//       return tag;
//     });
    
//     [ 8, 11 ]

//     const heroes = [
//         {name: “Batman”, franchise: “DC”},
//         {name: “Ironman”, franchise: “Marvel”},
//         {name: “Thor”, franchise: “Marvel”},
//         {name: “Superman”, franchise: “DC”}
//     ];
//     const marvelHeroes =  heroes.filter(function(hero) {
//         return hero.franchise == “Marvel”;
//     });
    
    // [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

    function filterPhotographes(sTag){
      let aPhotographesFiltered = {};
   
      for(let p of photographers) {  
         const aTags = p.tags;
         
         let IsFiltered = aTags.filter(sTagFiltered => {
            return  p.tags.includes(sTagFiltered)
         });
   
         console.log(IsFiltered);
         console.log(sTag);
   
         //if (IsFiltered == )
         aPhotographesFiltered.add(p);
      }
   }
   