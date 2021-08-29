function theWorkout (){ 
  function getRandomNum() {
      return Math.floor((Math.random() * 6) + 1);
    }
    const workout = getRandomNum();
  
    var yourWorkout = '';
    var workoutDescription ='';
  if (workout === 1){
    var yourWorkout = 'Build';
    var workoutDescription ='Today, you"re gonna build those muscles! Work out using a low amount of weight and a high amount of reps.';
  } else if (workout === 2){
    var yourWorkout = 'Bulk';
    var workoutDescription ='Grow those muscles today! Work out using a high amount of weight with a low amount of reps.';
  } else if (workout === 3){
    var yourWorkout = 'Bodyweight';
    var workoutDescription ='Forget about weights today! All you need is your own body.';
  } else if (workout === 4){
    var yourWorkout = 'Ballet';
    var workoutDescription ='Lengthen. Elongate. Channel your inner giant squid. Try a workout class like Pilates, Pure Barre, or Hot Yoga!';
  } else if (workout === 5){
    var yourWorkout = 'Burn';
    var workoutDescription ='Do some cardio today! Run, ride a bike, go for a swim, climb a tree!';
  }
  else {
    var yourWorkout = 'Breathe';
    var workoutDescription ='Take it easy today! A casual walk, some light yoga, or just stay in bed. Recovery is everything!';
  }
    
    console.log("Your workout today is \n" + yourWorkout + "\n" + workoutDescription);
  myBodContainer.innerHTML = `<h3 style="color: #ff0000;">Your workout today is</h3><br />${yourWorkout}<br /><br />${workoutDescription}`; //framework for results display
  }
  const myBodContainer = document.getElementById('myBod');
   
  
  const hitTheNos = document.getElementById('workitout');
  hitTheNos.addEventListener('click', theWorkout);
  
    
  