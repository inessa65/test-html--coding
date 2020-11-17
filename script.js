const sidebarToggle=document.querySelector('.toggle-sidebar')
const sideBar=document.querySelector('.side-bar')
const btnShowCards=document.querySelector('.btn-more')
const hiddenCard = document.querySelector('.hidden-card');
const widgets =document.querySelectorAll('.widget')

sidebarToggle.addEventListener('click', function(){
sideBar.classList.toggle('side-bar--active');
})

btnShowCards.addEventListener('click', function(){

hiddenCard.classList.remove('hidden-card')
})

widgets.forEach(function(widget) {
    widget.addEventListener('click', function(e){
        if(e.target.classList.contains("widget__title") ){
e.target.classList.toggle('widget__title--active');
e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
});

const checkBoxAny = document.getElementById('location-05');
const topLocationCheckBox =document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function(){
    if(checkBoxAny.checked){
        topLocationCheckBox.forEach(function(item){
            item.checked =false;
        })
    }
})
topLocationCheckBox.forEach(function(item){
    item.addEventListener('change', function(){
       if(checkBoxAny.checked){
        checkBoxAny.checked = false;
    }  
    })
   
})