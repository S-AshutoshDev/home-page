onload = () => {
  //stars()
  //textSwap()
  onhoverSkillAnime()
  menuInit()
}



const stars = () => {
  let NUM_STARS = 100
  let DIS_X
  let DIS_Y
  let SIZE
  let DURATION
  let BACK_EDIT = document.querySelector(`section#Home`)

  for (let index = 0; index < NUM_STARS; index++) {

    DIS_X = Math.ceil(Math.random() * 100)
    DIS_Y = Math.ceil(Math.random() * 100)
    SIZE = Math.ceil(Math.random() * 2)
    DURATION = Math.ceil(Math.random() * 10)

    BACK_EDIT.innerHTML += `<div class="star" style="left: ${DIS_X}%; top: ${DIS_Y}%; height:${1 + SIZE}px; width: ${1 + SIZE}px; animation-delay: ${DURATION}s; animation-duration: ${5 + DURATION}s"></div>`
    if (index > NUM_STARS)
      break
  }
}

const textSwap = () => {
  let job = [`Web Developer`, `UI/UX Designer`, `Creater`]
  let jobSwitch = 1
  let text = document.querySelector(`section#Home span.Title span.animated`)
  text.innerTEXT = job[0]
  setInterval(() => {
    text.innerHTML = job[jobSwitch]
    jobSwitch++
    if (jobSwitch > 2) {
      jobSwitch = 0
    }
  }, 2500);

}


const onhoverSkillAnime = (e) => {
  let WIDTH_X
  let HEIGHT_Y
  let CORD_X
  let CORD_Y

  let SKILL_CARD = document.querySelectorAll(`section#Skills div.SkillSet div.SkillCard`)
  for (let index = 0; index < SKILL_CARD.length; index++) {
    const element = SKILL_CARD[index];
    WIDTH_X = element.clientWidth
    HEIGHT_Y = element.clientHeight
    element.addEventListener(`mousemove`, (e) => {
      CORD_X = e.offsetX
      CORD_Y = e.offsetY
      let FRAC_X = ((CORD_X - (WIDTH_X / 2)) / WIDTH_X) * 20
      let FRAC_Y = ((CORD_Y - (HEIGHT_Y / 2)) / HEIGHT_Y) * 20
      element.style = `transform: perspective(500px) rotateX(${-FRAC_Y}deg) rotateY(${FRAC_X}deg);`
    })
    element.addEventListener(`mouseout`, (e) => {
      element.style = `transform: perspective(0) rotate3d(0, 0, 0, 0);`
    })
  }

}

const menuInit = () => {
  const MENU_BTN = document.querySelector(`header nav div.MenuBtn`)
  const MENU_BAR = document.querySelector(`header div.Menu`)
  MENU_BTN.addEventListener(`click`, () => {
    MENU_BTN.classList.toggle(`Sliced`)
    MENU_BAR.classList.toggle(`Sliced`)
  })
  const LINK = document.querySelectorAll(`header div.Menu a`)
  LINK.forEach(NavBtn => {
    NavBtn.addEventListener(`click`, () => {
      MENU_BTN.classList.toggle(`Sliced`)
      MENU_BAR.classList.toggle(`Sliced`)  
    })
  });
}