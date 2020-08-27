onload = () => {
    document.querySelector(`.hamBtn`).addEventListener(`click`, () => {
        document.querySelector(`.hamBtn`).classList.toggle(`activeHamBtn`)
        document.querySelector(`.sideSection`).classList.toggle(`menuOpen`)
    })











}