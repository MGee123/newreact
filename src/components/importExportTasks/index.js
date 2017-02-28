import React from 'react' //ignore this
import Banana from './banana'
import  { apple } from './apple'
import { myfunction } from './myfunction'
import Fruits from './fruits'
import { apple2, banana } from './fruits'
import pieMenu, {applePie, blueberryPie} from './pies/pieMenu'
const catNames = require('cat-names');
 
catNames.random();
console.log(Banana)
console.log(apple)
console.log(myfunction(2,3))
console.log(Fruits)
console.log(apple2)
console.log(banana)
console.log(pieMenu)
console.log(applePie)
console.log(blueberryPie)
console.log(catNames.random())
// Ignore this!
export default () => <p>Import Export Tasks. Open your debugger :)</p>
