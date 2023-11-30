
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



// This is for the dropdowns inside the setup guide

const increase = document.querySelector('.add-up');
const customizeButton = document.querySelectorAll('.customize');
const progressBar = document.getElementById('load');


document.addEventListener('DOMContentLoaded', ()=>{

    const tickAsDone = 'checkbox-done'
    
    console.log(progressBar.value)
    console.log(progressBar.max)

    const HIDDEN = 'hidden'

    const checkboxButton = document.querySelectorAll('.checkbox-button')


function markAsDone(checkboxNotSelected, checkboxSpinning, checkboxSelected, clickedCheckbox){
    
            checkboxNotSelected.forEach((selected)=>{
                selected.addEventListener('click',()=>{
                    selected.classList.add(HIDDEN)
                })
            checkboxSpinning.forEach((spin)=>{
                spin.classList.remove(HIDDEN)
            })
            // checkboxButton.forEach((box)=>{
            //     box.classList.add(tickAsDone)
                
            // })
        })  
            setTimeout(()=>{
                checkboxSpinning.forEach((spin)=>{
                    spin.classList.add(HIDDEN)
                })

                checkboxSelected.forEach((item)=>{
                    item.classList.remove(HIDDEN)
                })
            
            }, 1000)

            clickedCheckbox.classList.add(tickAsDone);

}

    function markAsNotDone(checkboxSelected, checkboxNotSelected, checkboxSpinning, clickedCheckbox){
        checkboxSelected.forEach((item)=>{
            item.classList.add(HIDDEN)
        })
        checkboxSpinning.forEach((spin)=>{
            spin.classList.remove(HIDDEN)
        })
        // checkboxButton.forEach((box)=>{
        //     box.classList.add(tickAsDone)
            
        // })

        setTimeout(()=>{
            checkboxSpinning.forEach((spin)=>{
                spin.classList.add(HIDDEN)
            })
            checkboxNotSelected.forEach((item)=>{
                item.classList.remove(HIDDEN)
            });
            
        },1000)

        clickedCheckbox.classList.remove(tickAsDone);
    }

    function updateProgressBar(valueChange) {
        // Get the current value of the progress bar
        let currentValue = parseInt(progressBar.value);
        
        // Update the progress bar value by adding the change
        progressBar.value = currentValue + valueChange;

        // Ensure the value doesn't go below 0 or exceed the max value
        progressBar.value = Math.max(0, Math.min(progressBar.value, progressBar.max));

        increase.textContent = progressBar.value;
    }
    
    customizeButton.forEach((button, index)=>{
        button.addEventListener('click', ()=>{
            // let parentContainer = button.closest('.section-two')

            let parentContainer = button.closest('.section-two');
            let targetDope = parentContainer.querySelector('.dope');
            targetDope.classList.toggle('show-hidden');

            let cuBox = checkboxButton[index];
            let checkboxNotSelected = Array.from(cuBox.querySelectorAll('.checkbox-not-selected'));
            let checkboxSpinning = Array.from(cuBox.querySelectorAll('.checkbox-spinning'))
            let checkboxSelected = Array.from(cuBox.querySelectorAll('.checkbox-selected'))
           

            let done = cuBox.classList.contains(tickAsDone)

            if(done){
            markAsNotDone(checkboxSelected, checkboxNotSelected, checkboxSpinning, cuBox)
                updateProgressBar(-1)
            } else {
            markAsDone(checkboxNotSelected, checkboxSpinning, checkboxSelected, cuBox)
                updateProgressBar(1)
            } 

            checkboxNotSelected.forEach((item)=>{
                
                item.classList.toggle('hidden');
            });
          
            
    customizeButton.forEach((otherButton, otherIndex, Box)=>{

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


    
  

    

  




