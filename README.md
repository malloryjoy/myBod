# myBod

myBod is a workout randomizer to help the user determine how they should exercise for the day. 

## Project Origins

In the beginning of 2020, I embarked on an admittedly failed adventure titled the 75Hard Challenge. With a goal of performing at your utmost, the challenge requires the partaker to complete the following for 75 days straight:

1. Pick a diet and stick to it. No cheat days. 
2. No alcohol.
3. One gallon of water a day. 
4. Read ten pages (minimum) of a non-fiction book. 
5. Two 45-minute workouts a day, one of which MUST be completed outdoors. 
6. Take a daily progress photo. 

If you miss a day (even if you're at day 72), you have to start over with Day 1 the next day! If you're sitting there thinking this could be fun, good luck. If you're scratching your head wondering if this is medically sound, please note that this was NOT created by a health professional and while you probably won't die in this endeavor, you're not a loser if you say "Thanks, but no thanks" (in my eyes, anyway). 

As tough as this challenge was/is, it got me thinking about the nature of a workout. I'm willing to bet most fitness experts would agree that you don't need to workout ninety minutes a day to be fit. In fact, they probably advocate that 20 minute high-intensity workouts are where it's at with effectiveness! All that said, I realized that there are about six different workout methods: 

1. Build (Low amount of weight, high amount of reps)
2. Bulk (high amount of weight, low amount of reps)
3. Ballet (bodyweight sculpting, like hot yoga or pilates classes)
4. Bodyweight (Bodyweight movement, like burpees or pushups)
5. Burn (Cardio!)
6. Breathe (Stretching, long walk, yoga, or a rest day)


Combine all six throughout the week, and you're on your way to a fitter you! 

Does the thought of doing one of these make you want to not even try at all? Same! 

>"Jogging is the worst... I mean, yes, it keeps you healthy, but GOD, at what cost?!" 
>>--Ann Perkins, "Parks and Recreation"


With that in mind, I created this random workout generator. This generator takes the choice out of your hands. Chances are, if you get yourself to the park, the gym, your yoga mat, you'll mentally already be in the state of mind to workout. Do the hard part of showing up. The rest will be a breeze!

## How It Works 

This app uses a "Random" number generator, with each workout option assigned a number. Upon pressing the "Work Me Out" button, the generator gets triggered! A workout for the user will be generated, with a corresponding workout playlist (with Spotify). The result will also provide a random workout/health tip to keep in mind throughout their fitness journey! 



## Where Does the Code Come In 

This project uses HTML, CSS, and continues my journey through Javascript. The different workout options exist as an object in a list.  Each "object" contains the workout, a link to a corresponding playlist, and suggested moves to incorporate into the workout. The .random() function grabs an object from the list. An additional .random() calculation occurs with the workout tip, pulling a tip from a separate list of about fifty tips. A one-page (using Bootstrap) contains the project, making for easy use on mobile devices, with an App look in mind! 

## My Process 

1. Create the "workout" object: 
 * Workout
 * 45 minute playlist for each workout
 * Ideas for workout (reps, sets)

2. Create the list of workout objects. 

3. Create the random() function to generate the workout. 

4. Create a list of wellness tips. 

5. Create the random() function to generate the workout tip for the day.

6. Create the function to call both random generators. 

7. Add the onclick function to call the function created in step 6 when the "Work Me Out" button is pressed. 

8. Create a landing page to house the application.




## Challenges and Hopeful Future Adjustments 

I am a fitness enthusiast, and I have no certifications nor medical experience in the world of exercise. Much like the challenge that inspired this program, iBod is not FDA approved, nor was it created with the help of physicians, certified trainers, or otherwise verified exercise experts. This is a rudimentary introduction to working out regularly, and is meant for entertainment purposes, not as a medically approved weight loss MO. 

From a technical standpoint, some may see the ability to randomly generate without removing a workout from the list as a limitation. In other words, you could technically see "Burn" as an option two days, even ten days, in a row! I don't see this as a limitation, but rather as an opportunity to challenge, grow, and connect with your body. As well, if you get to the gym and know in your heart "I cannot do a fifth day in a row of bodyweight workouts," there is the "generate another" option to give yourself another chance to find a different workout!

I would love to use this app, in the future, to allow for goal-setting on a greater scope. I would expand to include six goals, allowing the user to pick one goal a day to work on over time.  As well, I would love to grow this into a personalized experience, where a user can create an account through which they can log their workouts, goals, and achievements! I do feel there is potential to grow this app with the influence of exercise and wellness experts, to create a program that helps the average beginner (but why stop there, as long as expansion is on the brain?) get started on a healthier lifestyle. 

If all else fails, myBod is an excellent name that I will patent and then Apple can pay me eleventy billion dollars to sell it to them. At this point, I will retool this program to generate a random house to buy with my new money (a mansion in Hawaii or a Pied-à-terre in Monaco? I do so love the ocean). 


## Conclusion 

Staying healthy and getting fit is a challenge, but it shouldn't feel like one. I hope this program guides and inspires anyone looking to inject some activity in their life.  
