
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

    const markAsDone = 'checkbox-done'
    let totalStep = customizeButton.length;
    let currentStep= totalStep;

    const checkboxButton = document.querySelectorAll('.checkbox-button')

    
    function markSelected( checkboxNotSelected){
        checkboxNotSelected.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.classList.add('hidden');
                spin();
                markDone();
            })
         
        })  
    }

    function spin (checkboxSpinning){
        checkboxSpinning.forEach((spinner)=>{
            spinner.classList.remove('hidden')            
        })
    }

    function markDone(checkboxSelected, checkboxSpinning, checkboxButton) {
        setTimeout(() => {
          checkboxSelected.forEach((selected) => {
            selected.classList.remove('hidden');
          });
      
          checkboxSpinning.forEach((spinner) => {
            spinner.classList.add('hidden');
          });

          checkboxButton.forEach((box)=>{
            box.classList.add(markAsDone);
          })
        }, 1500);
      }

      function markAsDoneOrNot(checkboxButton, checkboxNotSelected, checkboxSelected, checkboxSpinning){
        checkboxButton.forEach((box)=>{
            let checkMark = box.classList.contains(markAsDone)
            
            if(checkMark){
                checkboxSpinning.forEach((spinner)=>{
                    spinner.classList.remove('hidden');
                });
                checkboxSelected.forEach((selected)=>{
                    selected.classList.add('hidden');
                });
              
                box.classList.remove(markAsDone)
               

            } else{
                checkboxNotSelected.forEach((item)=>{
                    item.classList.remove('hidden');
                });
                checkboxSelected.forEach((selected)=>{
                    selected.classList.remove('hidden')
                });

                checkboxSpinning.forEach((spinner)=>{
                    spinner.classList.add('hidden')
                });

                box.classList.add(markAsDone);
            }

        })
        
      }
  


    
    customizeButton.forEach((button, index)=>{
        button.addEventListener('click', ()=>{
            // let parentContainer = button.closest('.section-two')

            let parentContainer = button.closest('.section-two');
            let targetDope = parentContainer.querySelector('.dope');
            targetDope.classList.toggle('show-hidden');


            let cuBox = checkboxButton[index];
            let checkboxNotSelected = cuBox.querySelectorAll('.checkbox-not-selected');
            let checkboxSpinning = cuBox.querySelectorAll('.checkbox-spinning')
            let checkboxSelected = cuBox.querySelectorAll('.checkbox-selected')

            markSelected(checkboxNotSelected, checkboxSpinning, checkboxSelected)
 
    

    customizeButton.forEach((otherButton, otherIndex)=>{

        let otherParentsContainer = otherButton.closest('.section-two')
        let otherTargetDope = otherParentsContainer.querySelector('.dope')

        if( otherIndex !== index){
            otherTargetDope.classList.remove('show-hidden')
        }

        
    })
            checkboxNotSelected.forEach((item)=>{
                item.classList.toggle('hidden');
            });

            
            // spin(checkboxSpinning);
            markDone(checkboxSelected, checkboxSpinning);
            markAsDoneOrNot(checkboxButton,checkboxNotSelected, checkboxSelected, checkboxSpinning)

        })
    })
})



// for the progress bar


    
  

    

  




