const div = document.createElement('div')

const p = document.createElement('p')
const ul = document.createElement('ul')
const intocode = document.createElement('a')
const google = document.createElement('a')
const instagram = document.createElement('a')

p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos non alias cumque eligendi, perspiciatis maiores nihil?'
intocode.textContent = 'intocode'
google.textContent = 'google'
instagram.textContent = 'instagram'

intocode.href = 'https://intocode.ru/'
intocode.target = '_blank'

google.href = 'https://www.google.ru/'
google.target = '_blank'

instagram.href = 'https://instagram/intocode'
instagram.target = '_blank'



p.style.border = '2px solid red'
p.style.padding = '10px'
p.style.borderRadius = '10px'

ul.style.display = 'flex'
ul.style.justifyContent = 'space-between'
ul.style.padding = '0'


div.style.width = '220px'


ul.append(intocode, google, instagram)
div.append(p, ul)

document.body.append(div)