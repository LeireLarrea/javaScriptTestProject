function inputCaloriesByDay(day){
    switch (day){
        case 'Monday':
            return 100;
        case 'Tuesday':
            return 200;
        case 'Wednesday':
            return 300;
        case 'Thursday':
            return 400;
        case 'Friday':
            return 500;
        case 'Saturday':
            return 600;
        case 'Sunday':
            return 700;
        default:
            alert('please type a valid day such as monday, tuesday, wednesday, thursday, friday, saturday, sunday');
            return 0;
        }
    }

function getTotalCalories (){
    return inputCaloriesByDay('Monday') + inputCaloriesByDay('Tuesday') + 
            inputCaloriesByDay('Wednesday') + inputCaloriesByDay('Thursday') + 
            inputCaloriesByDay('Friday') + inputCaloriesByDay('Saturday') + inputCaloriesByDay('Sunday');
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
