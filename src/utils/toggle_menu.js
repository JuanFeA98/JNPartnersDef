const toggle_menu = ()=>{
    const menu = document.getElementById('toggle__menu')
    menu.classList.toggle('active')

    const test = document.getElementById('options__menu')
    test.classList.toggle('options__menu--active')

}

export default toggle_menu