const allStars = document.querySelectorAll('.star');
allStars.forEach( (star,i)=> {
    star.onclick = function() {
        let current_star_level = i+1;
        allStars.forEach( (star,j) =>{
            if (current_star_level >= j+1) {
                star.innerHTML = '&#9733'
            } else {
                star.innerHTML = '&#9734';
            }
            
        })
    }
});

const allRestaurant = document.querySelectorAll('.star_restaurant');
allRestaurant.forEach( (star,i)=> {
    star.onclick = function() {
        let current_star_level = i+1;
        allRestaurant.forEach( (star,j) =>{
            if (current_star_level >= j+1) {
                star.innerHTML = '&#9733'
            } else {
                star.innerHTML = '&#9734';
            }
            
        })
    }
});
const allCancel = document.querySelectorAll('.bus_star');
allCancel.forEach( (star,i)=> {
    star.onclick = function() {
        let current_star_level = i+1;
        allCancel.forEach( (star,j) =>{
            if (current_star_level >= j+1) {
                star.innerHTML = '&#9733'
            } else {
                star.innerHTML = '&#9734';
            }
            
        })
    }
});
const allQuality = document.querySelectorAll('.star_quality');
allQuality.forEach( (star,i)=> {
    star.onclick = function() {
        let current_star_level = i+1;
        allQuality.forEach( (star,j) =>{
            if (current_star_level >= j+1) {
                star.innerHTML = '&#9733'
            } else {
                star.innerHTML = '&#9734';
            }
            
        })
    }
});
const allComfort = document.querySelectorAll('.star_comfort');
allComfort.forEach( (star,i)=> {
    star.onclick = function() {
        let current_star_level = i+1;
        allComfort.forEach( (star,j) =>{
            if (current_star_level >= j+1) {
                star.innerHTML = '&#9733'
            } else {
                star.innerHTML = '&#9734';
            }
            
        })
    }
});




