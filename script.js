const websitename =  document.querySelector('.left')
const header = document.querySelector('.firstsection')
const aboutsec = document.querySelector('.secondsection')
const projectsec = document.querySelector('#gallery')
const footersec = document.querySelector('footer')

const home = document.querySelector('#home')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact-me')

websitename.addEventListener('click',()=>{
    header.scrollIntoView({ behavior : "smooth" })
})

home.addEventListener('click',()=>{
    header.scrollIntoView({ behavior : "smooth" })
    
})
about.addEventListener('click',()=>{
    aboutsec.scrollIntoView({ behavior : 'smooth' })
    
    
})
projects.addEventListener('click',()=>{
    projectsec.scrollIntoView({ behavior : 'smooth' })
    
})
contact.addEventListener('click',()=>{
    footersec.scrollIntoView({ behavior : 'smooth' })
    
})