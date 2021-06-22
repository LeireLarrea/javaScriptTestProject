function inputCaloriesByDay(day){
    switch (day){
        case 'monday':
            return 100;
        case 'tuesday':
            return 200;
        case 'wednesday':
            return 300;
        case 'thursday':
            return 400;
        case 'friday':
            return 500;
        case 'saturday':
            return 600;
        case 'sunday':
            return 700;
        default:
            alert('please type a valid day such as monday, tuesday, wednesday, thursday, friday, saturday, sunday');
            return 0;
        }
    }

function getTotalCalories (){
    return inputCaloriesByDay('monday') + inputCaloriesByDay('tuesday') + inputCaloriesByDay('wednesday') + inputCaloriesByDay('thursday') + inputCaloriesByDay('friday') + inputCaloriesByDay('saturday') + inputCaloriesByDay('sunday') ;
}

function getIdealCalories (){
    var idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}

function calculateHealthPlan(){
    var actualCalories = getTotalCalories ();
    var idealCalories = getIdealCalories();
    var calorieDifference = idealCalories - actualCalories;
    if (calorieDifference == 0)
        console.log('Well done! you got the right calories');
    else if (calorieDifference > 0)
        console.log('opps you ate ' + calorieDifference + ' too little calories' );
    else
    console.log('opps you ate ' + calorieDifference + ' too many calories' );
}


calculateHealthPlan();
