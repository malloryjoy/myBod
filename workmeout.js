function workoutGen() {
    function getRandomNum() {
    return Math.floor((Math.random() * 6) + 1);
  }
 var workout = getRandomNum();
  if (workout === 6) {
      {
    workoutName: "Breathe";
        workoutDescription: "Take it easy today! A casual walk, some light yoga, or just stay in bed. Recovery is everything!";
        workoutPlaylist: "I guess";
      }
  } else if (workout === 5) {
      {
    workoutName: "Burn";
        workoutDescription: "Go for some cardio today! Run, ride a bike, go for a swim, climb a tree!";
        workoutPlaylist: "sort of";
      }
  } else if (workout === 4) {
      {
    workoutName: "Bodyweight";
        workoutDescription: "Don't worry about weights! All you need is your own body.";
        workoutPlaylist: "maybe";
      }
  } else if (workout === 3) {
      {
    workoutName: "Ballet";
        workoutDescription: "Get long. Get lean. Your core will think you're mean. Try a workout class like Pilates, Pure Barre, or Hot Yoga!";
        workoutPlaylist: "I guess";
      }
  } else if (workout === 2) {
      {
    workoutName: "Bulk";
        workoutDescription: "Grow those muscles today! Work out using a high amount of weight with a low amount of reps.";
        workoutPlaylist: "no";
      }
  } else {
      {
        workoutName: "Build";
        workoutDescription: "Today, you're gonna build those muscles! Work out using a low amount of weight and a high amount of reps.";
        workoutPlaylist: "yes";
      }
  }
  
}
workoutGen();
 
  //console.log('Your Workout Today:<br />${workoutName:}<br /><br />${workoutDescription}<br /><br />${workoutPlaylist}');
console.log(workoutGen());





//const workouts = [
  //  {
      //  workoutName: "Build",
        //workoutDescription: "Today, you're gonna build those muscles! Work out using a low amount of weight and a high amount of reps.",
        //workoutPlaylist: "",
    //},
    //{
      //  workoutName: "Bulk",
        //workoutDescription: "Grow those muscles today! Work out using a high amount of weight with a low amount of reps.",
        //workoutPlaylist: "",
   // },
  //  {
////        workoutName: "Ballet",
  //      workoutDescription: "Get long. Get lean. Your core will think you're mean. Try a workout class like Pilates, Pure Barre, or Hot Yoga!",
 //       workoutPlaylist: "",
  //  },
  //  {
     //   workoutName: "Bodyweight",
 //       workoutDescription: "Don't worry about weights! All you need is your own body.",
  //      workoutPlaylist: "",
  //  },
   // {
 //       workoutName: "Burn",
  //      workoutDescription: "Go for some cardio today! Run, ride a bike, go for a swim, climb a tree!",
 //       workoutPlaylist: "",
  //  },
  //  {
   //     workoutName: "Breathe",
  //      workoutDescription: "Take it easy today! A casual walk, some light yoga, or just stay in bed. Recovery is everything!",
  //      workoutPlaylist: "",
   // }
//]

