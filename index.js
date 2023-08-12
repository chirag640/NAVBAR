const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      darkLight_searchBox = document.querySelector(".darkLight-searchBox") 
      siderbarClose = document.querySelector(".siderbarClose");


      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
    darkLight_searchBox.classList.add("new-darkLight-searchBox");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
        darkLight_searchBox.classList.remove("new-darkLight-searchBox");
    }
});


let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".page-links")
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY,
            offset = sec.offsetTop,
            height = sec.offsetHeight,
            id=sec.getAttribute('id');

            if(top >= offset && top < offset+height){
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector('.page-links [href*=' + id +']').classList.add("active");
                })
            }
    })
}