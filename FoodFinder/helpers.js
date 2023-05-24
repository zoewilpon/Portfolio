exports.valueConvertor = (rating) => {
    // let rating = element.rating

    if (rating === 0){
        return './assets/0.png'
    } else if (rating === 1){
        return './assets/1.png'
    } else if (rating === 1.5){
        return './assets/1.5.png'
    } else if (rating === 2){
        return './assets/2.png'
    } else if (rating === 2.5){
        return './assets/25.png'
    } else if (rating === 3){
        return './assets/3.png'
    } else if (rating === 3.5){
        return './assets/35.png'
    } else if (rating === 4){
        return './assets/4.png'
    } else if (rating === 4.5){
        return './assets/45.png'
    }   
    return './assets/5.png'
}