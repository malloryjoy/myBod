function theWorkout (){ 
  function getRandomNum() {
      return Math.floor((Math.random() * 6) + 1);
    }
    const workout = getRandomNum();
  
    var yourWorkout = '';
    var workoutDescription ='';
    var workoutPlaylist = '';
    var workoutGuide ='';
  if (workout === 1){
    var yourWorkout = 'Build';
    var workoutDescription ='Today, you are gonna build those muscles! Work out using a low amount of weight and a high amount of reps.';
    var workoutPlaylist = 'https://open.spotify.com/playlist/7rD6HCQqdIaZ1VB7RSba48';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Build.png';
  } else if (workout === 2){
    var yourWorkout = 'Bulk';
    var workoutDescription ='Grow those muscles today! Work out using a high amount of weight with a low amount of reps.';
    var workoutPlaylist = 'https://open.spotify.com/playlist/7MjzJYu4WUfS9tB8jJ0WJj';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Bulk.png';
  } else if (workout === 3){
    var yourWorkout = 'Bodyweight';
    var workoutDescription ='Forget about weights today! All you need is your own body.';
    var workoutPlaylist = 'https://open.spotify.com/playlist/1YvPVHEGGbxga1iH25Sdxj';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Bodyweight.png';
  } else if (workout === 4){
    var yourWorkout = 'Ballet';
    var workoutDescription ='Lengthen. Elongate. Channel your inner giant squid. Try a workout class like Pilates, Pure Barre, or Hot Yoga!';
    var workoutPlaylist = 'https://open.spotify.com/playlist/45A55BgoTPU8NP4kUZ8tI5';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Ballet.png';
  } else if (workout === 5){
    var yourWorkout = 'Burn';
    var workoutDescription ='Do some cardio today! Run, ride a bike, go for a swim, climb a tree!';
    var workoutPlaylist = 'https://open.spotify.com/playlist/04HzOkV3lvPNP49ciwM8dz';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Burn.png';
  }
  else {
    var yourWorkout = 'Breathe';
    var workoutDescription ='Take it easy today! A casual walk, some light yoga, or just stay in bed. Recovery is everything!';
    var workoutPlaylist = 'https://open.spotify.com/playlist/0koOFGnTnbCYOguBSBeaP6';
    var workoutGuide = 'https://malloryjoy.dev/myBod/Breathe.png';
  }
    var myWorkout = yourWorkout.toUpperCase();
    console.log("Your workout today is \n" + myWorkout + "\n" + workoutDescription);
  myBodContainer.innerHTML = `<h3>Your workout today is</h3><br /><span class="soul">${myWorkout}</span><br /><br />${workoutDescription}<br /><div class="spmeotjny"></div><button class="resultButton"><a class="ren" href="${workoutPlaylist}" target="_blank"><span class="resultFront"> <i class="fab fa-spotify"></i>  Open Targeted Workout Playlist</a></span> </button>    <button class="resultButton"><a class="ren" href="${workoutGuide}" target="_blank"><span class="resultFront"><i class="fas fa-heartbeat"></i>   Open Basic Workout Guide</a></span></button>`; //framework for results display
  }
  
  const myBodContainer = document.getElementById('myBod'); //displays the workout results

  
  const genWorkout = document.getElementById('workitout'); //assigns the workout generator to the Work Me Out button
  genWorkout.addEventListener('click', theWorkout); //initates the generation of the workout when the button is clicked 


// Get the modal
var modal = document.getElementById("theproj");

// Get the button that opens the modal
var btn = document.getElementById("workitout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the button that chooses a new workout
const doOver = document.getElementById("newWorkout");

//When the user clicks the doover button, the process starts again
doOver.addEventListener('click', theWorkout);

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}