
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

const sectionOne = document.querySelector('.section-one');
const container = document.querySelector(['.container']);

sectionOne.addEventListener('click', function(event){
    
        setTimeout(()=>{
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded)
    
            container.style.display = expanded ? 'none' : 'block';
            
        }, 200)
        arrow.classList.toggle('up-arrow')
        event.stopPropagation()


})


// const increase = document.querySelector('.increament');

// This is for the dropdowns inside the setup guide


const customizeButton = document.querySelectorAll('.customize');
const progressBar = document.getElementById('load');


document.addEventListener('DOMContentLoaded', ()=>{

    let totalStep = customizeButton.length;
    let currentStep=0;

    const checkboxButton = document.querySelectorAll('.checkbox-button')

    function markSelected( checkboxNotSelected){
        checkboxNotSelected.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.add('hidden')
            })
        })
    }
    // checkboxNotSelected.forEach((box)=>{
    //     box.addEventListener('click', ()=>{
    //         box.classList.add('hidden')
    //     })
    // })
    
    customizeButton.forEach((button, index)=>{
        button.addEventListener('click', ()=>{
            // let parentContainer = button.closest('.section-two')

            let parentContainer = button.closest('.section-two');
            let targetDope = parentContainer.querySelector('.dope');
            targetDope.classList.toggle('show-hidden');


            let cuBox = checkboxButton[index];
            let checkboxNotSelected = cuBox.querySelectorAll('.checkbox-not-selected');
            // let checkboxNotSelected = buttons.querySelectorAll('.checkbox-not-selected')
            // let checkboxSpinning = buttons.querySelectorAll('.checkbox-spinning');
            // let checkboxSelected = buttons.querySelectorAll('.checkbox-selected')
           
            // this might be deleted
            markSelected(checkboxNotSelected)
           

         
            
            // buttons.addEventListener('click', ()=>{
            //     markSelected(checkboxNotSelected)
            // } )
    

    // button.addEventListener('click', () => {
    //     checkboxButton.forEach((buttons) => {
    //         let checkboxNotSelected = buttons.querySelectorAll('.checkbox-not-selected');
    //         markSelected(checkboxNotSelected);
    //     });
    // });

 
    

    customizeButton.forEach((otherButton, otherIndex)=>{

        let otherParentsContainer = otherButton.closest('.section-two')
        let otherTargetDope = otherParentsContainer.querySelector('.dope')

        if( otherIndex !== index){
            otherTargetDope.classList.remove('show-hidden')
        }
    })
        })
    })
})



// for the progress bar


    
  

    

  




