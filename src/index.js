import generateJoke from "./generateJoke";
import './styles/main.scss'
import icon from './assets/icon.svg'
console.log(generateJoke())
const svgicon = document.getElementById('icon')
svgicon.src = icon
console.log('aa')