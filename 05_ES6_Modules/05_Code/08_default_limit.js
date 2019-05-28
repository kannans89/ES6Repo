// import firstDefault and then non default components
import company, {name} from './07_default_limit.js'

console.log(name)
console.log(company.getName())
company.setName("Mohtashim")
console.log(company.getName())