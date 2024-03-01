const myImg = document.getElementById("myImg");
let isGradPic = true;

myImg.addEventListener("click", () => {
  myImg.src = isGradPic ? "images/blu.png" : "images/grad.png";
  isGradPic = !isGradPic;
});

/*
create 2 files -> light.css, dark.css
of all the stylesheets, the array picks the first so make sure light.css is first
with a mpa it's hard b/c navbar isn't a shared component so no state tracking -> duplicated code
problems changing body's color

function switchMode() {
        let theme = document.getElementsByTagName('link')[0];
        if (theme.getAttribute('href') == 'light.css') { 
                theme.setAttribute('href', 'dark.css'); 
        } 
        else { 
                theme.setAttribute('href', 'light.css'); 
        } 
}
*/
