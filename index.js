/* ------------------- Navbar -------------------  */

// Open/Close Mobile Navigation

const navburger = document.getElementById('navburger')

const navlinks = document.getElementById('navlinks')

const navbar = document.getElementsByTagName('nav')[0]

let navbarIsOpen = false

const navcloseIcon = document.getElementById('navclose-icon')


//Call to close navbar
const closeNavbar = () => {

    if (navbarIsOpen) {

        //Shrink navigation links
        navlinks.classList.remove('navlinks-mobile')
        navlinks.classList.add('navlinks')

        //Shrink navbar
        navbar.classList.remove('navbar-open')
        navbar.classList.add('navbar')


        //Show burger icon
        navburger.classList.remove('nav-icon-hide')
        navburger.classList.add('nav-icon-show')

        //Hide close icon
        navcloseIcon.classList.remove('nav-icon-show')
        navcloseIcon.classList.add('nav-icon-hide')
        navbarIsOpen = false
    }
}

//Call to open navbar
navburger.onclick = () => {
    if (!navbarIsOpen) {

        //Expand navigation links
        navlinks.classList.remove('navlinks')
        navlinks.classList.add('navlinks-mobile')

        //Expand navbar
        navbar.classList.remove('navbar')
        navbar.classList.add('navbar-open')

        //Hide burger icon
        navburger.classList.remove('nav-icon-show')
        navburger.classList.add('nav-icon-hide')

        //Show close icon
        navcloseIcon.classList.remove('nav-icon-hide')
        navcloseIcon.classList.add('nav-icon-show')
        navbarIsOpen = true
    }
}

/* ------------------- END of Navbar -------------------  */
