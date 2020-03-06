const menu = document.getElementById('menu')
var isMenuOpen = false;

menu.style.height= 0
menu.style.opacity= '0' 

const menuToogle = () =>{
    if (isMenuOpen=== true){
        menu.style.opacity= '0'
        menu.style.height= 0       
        isMenuOpen = false
    }
    else{
        menu.style.opacity= '1' 
        menu.style.height= '55vh'
        isMenuOpen = true
    }
}
