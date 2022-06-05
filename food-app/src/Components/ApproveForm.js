export const approveForm = (course) => {
    const {name, prep_time, type, qnt_of_slices, diameter, bread_slices} = course;

    if(name === '' || typeof name !== 'string'){
        return [false, `Please enter a name for a main course.`]
    }

    const regPrepTime = /\d\d:\d\d:\d\d/;
    if (toString(regPrepTime) !== toString(prep_time)){
        return [false, 'Please enter the preparation time.'];
    }

    if (type === ''){
        return [false, `Please choose a type of dish.`];
    }

    if(type === 'pizza' && qnt_of_slices === false){
        return [false, `Please choose the number of slices.`]
    }

    if(type === 'pizza' && diameter === false){
        return [false, `Please choose diameter of pizza.`]
    }

    if(type === 'sandwich' && bread_slices === false){
        return [false, `Please choose a number of slices of bread.`]
    }

    if (qnt_of_slices < 0 || diameter < 0 || qnt_of_slices < 0)
    {
        return [false, `Soup spiciness can't be less than zero.`]
    }

    return [true, ''];
};