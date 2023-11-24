
// This is for the notification and the profile dropdowns

const bell = document.getElementById('bell');
const bellDropDown = document.getElementById('bell-drop-down');
const profile = document.getElementById("profile");
const profileDropDown = document.getElementById("profile-drop-down")


// for the notification bell

bell.addEventListener('click', function(event){

    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);

    bellDropDown.style.display = expanded ? 'none' : 'block';

    event.stopPropagation();
})

document.addEventListener('click', function(event) {
    const isClickInsideBell = bell.contains(event.target) || bellDropDown.contains(event.target);
    
    if (!isClickInsideBell) {
        bell.setAttribute('aria-expanded', 'false');
        bellDropDown.style.display = 'none';
    }
});

// for the profile dropdown

profile.addEventListener('click', function (event){
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded)
    profile.style.cursor = 'pointer';

    profileDropDown.style.display = expanded ? 'none' : 'block';

    event.stopPropagation()
})


document.addEventListener('click', function(event){
    const isClickInsideProfile = profile.contains(event.target) || profileDropDown.contains(event.target);

    if(!isClickInsideProfile){
       profile.setAttribute('aria-expanded', 'false') 
       profileDropDown.style.display = 'none';
    }
})

// This code is to use the cancel button to take out a container

const start = document.querySelector('.start');
const cancel = document.querySelector('.cancel');
const arrow = document.querySelector('.down-arrow')

cancel.addEventListener('click', function(){
   start.style.display = 'none'
   
})


// This is for the display of the setup-guide

const firstSetup = document.querySelector('.first-setup');
const sectTwo = document.querySelectorAll(['.section-two']);

firstSetup.addEventListener('click', function(){
    sectTwo.forEach((item)=>{
        setTimeout(()=>{
        item.classList.toggle('section-two-show');
            
        }, 200)
        arrow.classList.toggle('up-arrow')
    })
})


// const increase = document.querySelector('.increament');

// This is for the dropdowns inside the setup guide

const allSections = document.querySelectorAll('.section-two')
const customize = document.querySelectorAll('.customize');
const hidden = document.querySelectorAll('.hide')
customize.forEach((customItem, index)=>{
   customItem.addEventListener('click', function(){

    allSections.forEach((sections, i)=>{
        if( i === index){
            
                sections.classList.remove('show-hidden')
                console.log(sections)
            
        }
    })

   const currentSelection = customItem.closest('.section-two')
   currentSelection.classList.toggle('show-hidden')

   hidden.forEach((item)=>{
    if(!currentSelection.contains(item)){
        item.classList.toggle('show-hidden')
    }
   })

})

})




// for the progress bar

function updateProgressBar() {
    
    const progressBar = document.getElementById('load');
  
    progressBar.value = customize.length

    console.log(progressBar)
  }

  




