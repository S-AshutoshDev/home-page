onload = () => {
    const menuButton = document.querySelector(`header .menuButton`)
    const closeButton = document.querySelector(`header .closeButton`)
    const menuBox = document.querySelector(`header .menu`)
    menuButton.addEventListener(`click`, () => {
        console.log(true)
        menuBox.classList.toggle(`hidden`)
        menuButton.classList.toggle(`hidden`)
        closeButton.classList.toggle(`hidden`)

    })
    closeButton.addEventListener(`click`, () => {
        console.log(true)
        menuBox.classList.toggle(`hidden`)
        menuButton.classList.toggle(`hidden`)
        closeButton.classList.toggle(`hidden`)

    })




}