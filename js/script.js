document.addEventListener("DOMContentLoaded", function () {
   const headerHeight = document.querySelector('.header').offsetHeight;
   const navLinks = document.querySelectorAll('.links-navbar');

   navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
         event.preventDefault();
         const targetId = this.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);

         if (targetElement) {
            const offsetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
               top: offsetPosition,
               behavior: 'smooth'
            });
         }
      });
   });
   setTimeout(() => {
      const textAbout = document.getElementById("text-about");
      const imageAbout = document.getElementById("image-about");
      textAbout.style.opacity = "1";
      textAbout.style.transform = "translateX(0)";
      imageAbout.style.opacity = "1";
      imageAbout.style.transform = "translateX(0)";
   }, 200);
});

const changeThemeBtn = document.querySelector("#changeTheme")

//toggle dark mode

function toggleDarkMode(){
   document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme(){
   const darkMode = localStorage.getItem("dark")

   if(darkMode){
      toggleDarkMode()
   }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
   toggleDarkMode()

   localStorage.removeItem("dark")
   if(document.body.classList.contains("dark")){
      localStorage.setItem("dark", 1)
   }

})