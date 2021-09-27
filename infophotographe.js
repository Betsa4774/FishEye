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