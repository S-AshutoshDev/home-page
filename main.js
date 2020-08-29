onload = () => {
    const menuButton = document.querySelector(`header .menuButton`)
    const closeButton = document.querySelector(`header .closeButton`)
    const menuBox = document.querySelector(`header .menu`)
    menuButton.addEventListener(`click`, () => {
        menuBox.classList.toggle(`hidden`)
        menuButton.classList.toggle(`hidden`)
        closeButton.classList.toggle(`hidden`)

    })
    closeButton.addEventListener(`click`, () => {
        menuBox.classList.toggle(`hidden`)
        menuButton.classList.toggle(`hidden`)
        closeButton.classList.toggle(`hidden`)

    })

    /* Nav Menu event listiners */

    const homeButton = document.querySelectorAll(`.navBtn1`)
    const projectButton = document.querySelectorAll(`.navBtn2`)
    const contactButton = document.querySelectorAll(`.navBtn3`)
    
    const homeSection = document.querySelector(`section.home`)
    const projectSection = document.querySelector(`section.project`)
    const contactSection = document.querySelector(`section.contact`)
    

    homeButton[0].addEventListener(`click`, () => {
        homeButton[0].classList.add(`activePage`)
        projectButton[0].classList.remove(`activePage`)
        contactButton[0].classList.remove(`activePage`)
        homeButton[1].classList.add(`activePage`)
        projectButton[1].classList.remove(`activePage`)
        contactButton[1].classList.remove(`activePage`)
        
        homeSection.style.display = `flex`
        projectSection.style.display = `none`
        contactSection.style.display = `none`

    
    })
    projectButton[0].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.add(`activePage`)
        contactButton[0].classList.remove(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.add(`activePage`)
        contactButton[1].classList.remove(`activePage`)

        homeSection.style.display = `none`
        projectSection.style.display = `flex`
        contactSection.style.display = `none`

    
    
    })
    contactButton[0].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.remove(`activePage`)
        contactButton[0].classList.add(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.remove(`activePage`)
        contactButton[1].classList.add(`activePage`)

        homeSection.style.display = `none`
        projectSection.style.display = `none`
        contactSection.style.display = `flex`

    
    
    })
    homeButton[1].addEventListener(`click`, () => {
        homeButton[0].classList.add(`activePage`)
        projectButton[0].classList.remove(`activePage`)
        contactButton[0].classList.remove(`activePage`)
        homeButton[1].classList.add(`activePage`)
        projectButton[1].classList.remove(`activePage`)
        contactButton[1].classList.remove(`activePage`)

        homeSection.style.display = `flex`
        projectSection.style.display = `none`
        contactSection.style.display = `none`
    
    })
    projectButton[1].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.add(`activePage`)
        contactButton[0].classList.remove(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.add(`activePage`)
        contactButton[1].classList.remove(`activePage`)

        homeSection.style.display = `none`
        projectSection.style.display = `flex`
        contactSection.style.display = `none`
    
    
    })
    contactButton[1].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.remove(`activePage`)
        contactButton[0].classList.add(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.remove(`activePage`)
        contactButton[1].classList.add(`activePage`)
    
        homeSection.style.display = `none`
        projectSection.style.display = `none`
        contactSection.style.display = `flex`

    })

    projectButton[2].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.add(`activePage`)
        contactButton[0].classList.remove(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.add(`activePage`)
        contactButton[1].classList.remove(`activePage`)

        homeSection.style.display = `none`
        projectSection.style.display = `flex`
        contactSection.style.display = `none`
    
    
    })
    contactButton[2].addEventListener(`click`, () => {
        homeButton[0].classList.remove(`activePage`)
        projectButton[0].classList.remove(`activePage`)
        contactButton[0].classList.add(`activePage`)
        homeButton[1].classList.remove(`activePage`)
        projectButton[1].classList.remove(`activePage`)
        contactButton[1].classList.add(`activePage`)
    
        homeSection.style.display = `none`
        projectSection.style.display = `none`
        contactSection.style.display = `flex`

    })


    
    



}