import { sayHi } from "./contact";
import "./styles/main.scss";
import baby from "./assets/img/baby-elephant.jpg";

const body = document.body;
const page = document.createElement('div')
const header = document.createElement('div')
const main = document.createElement('div')
const footer = document.createElement('div')

body.append(page)
page.append(header)
page.append(main)
page.append(footer)

const welcome = document.createElement('img')
welcome.src=baby;
main.append(welcome);
sayHi();