
let itemsFaq = document.querySelectorAll(".item");

itemsFaq.forEach(function(item){
    item.addEventListener("click", function(){

        const itemActive = document.querySelector(".active");

        if(itemActive){
            itemActive.classList.remove("active");
        }

        item.classList.add("active");
    });
});
