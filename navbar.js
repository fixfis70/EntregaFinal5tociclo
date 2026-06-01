async function navbarLoad(id){
    const nav = document.createElement("nav");
    const responsePromise = await fetch('/navbar.html');
    const navbar = await responsePromise.text();
    nav.innerHTML = navbar;
    document.body.prepend(nav);

}

navbarLoad().then(() =>{
    document.getElementById(whereAmIValue).classList.add("selected");
});

let whereAmIValue

function whereAmI(id){
    whereAmIValue = id;
}