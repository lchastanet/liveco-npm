import moment from "moment-with-locales-es6"

const btn = document.querySelector("#switcher")
let globalTheme = "light"

btn.addEventListener("click", switchOnOff)

function switchOnOff(e) {
  const body = document.querySelector("body")
  const properties =
    globalTheme === "dark" ? ["light", "Nuit"] : ["dark", "Jour"]

  body.style.backgroundColor = getComputedStyle(body).getPropertyValue(
    `--${properties[0]}`
  )

  e.target.innerText = properties[1]

  globalTheme = properties[0]

  let frenchTime = moment().locale("fr").format("ll LTS")

  document.querySelector("#time").textContent = frenchTime
}

// function setCurrentTheme(theme = "dark") {
//   globalTheme = theme
//   return theme
// }
