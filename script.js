let iconid = document.getElementById('iconid')
let navbar = document.getElementById('navid')

iconid.addEventListener('click', () => {
    if(navbar.className == 'navbar'){
        navbar.className += ' responsive'
    }
    else{
        navbar.className =  'navbar'
    }
})