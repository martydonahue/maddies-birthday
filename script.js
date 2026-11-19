/*
  YOUR JAVASCRIPT PROJECT 💗
  The HTML and CSS are ready. YOU write the interactions.
  Open index.html in a browser to see the design.

  Suggested order:
  1. Make the Start button switch from welcome-screen to mood-screen.
  2. Detect which mood button she clicks (hint: data-mood).
  3. If mood === 'sad', show reason-screen.
  4. Otherwise, show message-screen with a message for that mood.
  5. Detect which reason button she clicks (hint: data-reason).
  6. Show a different love note for each reason.
  7. Make the Restart button return to mood-screen.

  Helpful JavaScript tools:
  document.getElementById('welcome-screen')
  document.querySelectorAll('[data-mood]')
  element.addEventListener('click', () => { ... })
  element.classList.add('hidden')
  element.classList.remove('hidden')
  element.textContent = 'Your message here!'

  Bonus: write a reusable showScreen(screenId) function.
  Challenge: store messages in an object and choose by mood/reason.
*/

// TODO 1: Find the screen elements and buttons.
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", function() {
    console.log("She clicked the button!");
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("mood-screen").classList.remove("hidden");
});
// TODO 2: Write a function to switch visible screens.

// TODO 3: Add a click listener to the Start button.

// TODO 4: Add click listeners to the mood buttons.
const moodButtons = document.querySelectorAll("[data-mood]");

console.log(moodButtons.length);
// TODO 5: Add click listeners to the reason buttons.

// TODO 6: Add your own love messages and display them.
moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.dataset.mood);

        if (button.dataset.mood === "Sad :( ") {
    console.log("Maddie is feeling sad!");
    document.querySelector("#reason-screen h2").textContent = "What's going on?";
    reasonButtons[0].textContent = "Today just sucked";
    reasonButtons[1].textContent = "I don't feel pretty / I don't feel confident";
    reasonButtons[2].textContent = "Nothing is going my way";
    reasonButtons[3].textContent = "I don't really know";
    reasonButtons[0].dataset.reason = "rough-day";
    reasonButtons[1].dataset.reason = "insecure";
    reasonButtons[2].dataset.reason = "overwhelmed";
    reasonButtons[3].dataset.reason = "unsure";
    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("reason-screen").classList.remove("hidden");
      }

      if (button.dataset.mood === "Happy :)") {
    console.log("Maddie is feeling happy!");
    document.querySelector("#reason-screen h2").textContent = "I'm SO glad to hear you are happy. Tell me more!";
    console.log(document.querySelector("#reason-screen h2").textContent);
    reasonButtons[0].textContent = happyReasons["good-news"];
    reasonButtons[1].textContent = happyReasons["proud"];
    reasonButtons[2].textContent = happyReasons["excited"];
    reasonButtons[3].textContent = happyReasons["good-day"];
    reasonButtons[0].dataset.reason = "good-news";
    reasonButtons[1].dataset.reason = "proud";
    reasonButtons[2].dataset.reason = "excited";
    reasonButtons[3].dataset.reason = "good-day";
    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("reason-screen").classList.remove("hidden");
      }


if (button.dataset.mood === "Stressed :/") {
    console.log("Maddie is feeling stressed!");
    document.querySelector("#reason-screen h2").textContent = "What's stressing you out?";
    reasonButtons[0].textContent = stressedReasons["school"];
    reasonButtons[1].textContent = stressedReasons["too-much"];
    reasonButtons[2].textContent = stressedReasons["future"];
    reasonButtons[3].textContent = stressedReasons["relax"];
    reasonButtons[0].dataset.reason = "school";
    reasonButtons[1].dataset.reason = "too-much";
    reasonButtons[2].dataset.reason = "future";
    reasonButtons[3].dataset.reason = "relax";
    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("reason-screen").classList.remove("hidden");
}


if (button.dataset.mood === "Feeling Lonely") {
    console.log("Maddie is feeling lonely!");
    document.querySelector("#reason-screen h2").textContent = "What's making you feel lonely?";
    reasonButtons[0].textContent = missingYouReasons["wish-here"];
    reasonButtons[1].textContent = missingYouReasons["hug"];
    reasonButtons[2].textContent = missingYouReasons["memories"];
    reasonButtons[3].textContent = missingYouReasons["see-you"];
    reasonButtons[0].dataset.reason = "wish-here";
    reasonButtons[1].dataset.reason = "hug";
    reasonButtons[2].dataset.reason = "memories";
    reasonButtons[3].dataset.reason = "see-you";
    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("reason-screen").classList.remove("hidden");
}




if (button.dataset.mood === "Need Love") {
    console.log("Needs love");

    document.getElementById("message-text").textContent = "I am literaly on the way right now, just give me like 5 minutes for traffic. Every day I dream about hugging you forever and not letting go. I wish it was possible to do. The day we can sleep in the same bed, and hug forever is the day my life begins. Nobody loves you more than God, your family, and me Maddie. You give the best hugs ever. I cant wait to wrap my arms around you and just stay there forever. I love you so much Maddie";
    console.log("Love note text updated!");

    document.getElementById("mood-screen").classList.add("hidden");
    document.getElementById("reason-screen").classList.add("hidden");
    document.getElementById("message-screen").classList.remove("hidden");

    console.log("Message screen is now:",
        document.getElementById("message-screen").className);
}



    });



    
});

const reasonButtons = document.querySelectorAll("[data-reason]");

console.log(reasonButtons.length);
// TODO 7: Add a click listener to the Restart button.

const loveNotes = {
    "rough-day": "I'm sorry to hear you had a bad day Maddie. Take some deep breaths, rememeber that I am always one call away if you need someone to talk to, and there is never a bad time to reach out. The sun will come up tomorrow and you will get another chance. I believe in you and I love you! Let's have a great tommorow!",
    "insecure": "Hey Maddie. The first thing I want you to know is that it is perfectly okay to feel insecure. Some days are just better than others. Think about a time where you felt really pretty. Thats how I see you every day x1000!! You will always be the prettiest girl to me, no matter what you see in the mirror. Remember to love yourself, because you really are beautiful queen.",
    "overwhelmed": "I am sorry to hear that Maddie. I know you have so much going on and it is hard to concentrate on everything. Rememeber that this is temporary, and you will get through it. I am always by your side if you ever need to take off some stress. If you need to laugh, call me. If you need to cry, call me. If you need to just distract yourself, call me. Whatever you need, just know that I am always here to help you.",
    "unsure": "Hey, life can be weird sometimes. You are upset and you don't even know why you are upset. Don't try to spend so much time trying to figure out what it is that you are upset about. That will not solve anything. Instead, just try to think if whatever is causing you sadness is in your control or not. If it is, there is nothing to worry about. If it isn't, there is nothing you can do, so why worry? I know it's a lot easier said than done, but try to focus on controlling what you can control (emotions, responses, how you spend your time). I love you Maddie."
};

const happyReasons = {
    "good-news": "Something good happened today!",
    "proud": "I'm just Maddie and I'm always slaying",
    "excited": "I'm excited about something!",
    "good-day": "I'm just having a good day!"
};

const stressedReasons = {
    "school": "I'm overwhelmed with school",
    "too-much": "There is just a lot going on around me",
    "future": "I'm worried about the future",
    "relax": "I have worked so much and am tired",
};

const happyNotes = {
    "good-news": "YESSS!! That's so awesome Maddie! That makes my day as well. If you haven't already texted me about it, please do because I would love to know what made your day so great. You are so deserving of all the good that happens to you. Keep smiling, it looks so good on you! You have the most contagious smile ever :) I love you so much!",
    "proud": "Hell yeah you are! Keep doing you Maddie, nobody does it better. You are the goat! Keep slaying queen!",
    "excited": "Ooooo that makes me excited too! Let me know what it is so I can be excited with you! Honestly, you should be excited every day just because you get to wake up as Maddie Sise: the prettiest, smartest, and most awesome girl on the planet. Whatever you are excited about, just know that I am somewhere smiling because you are happy. I hope whatever it is that is exciting you is as awesome as you dream it to be",
    "good-day": "YESSS LETS GOOO I am so happy to hear that! Tell me, what's making you have a good day? Did something happen? Are you excited about something? Or are you just in a good mood because you are Maddie Sise? All of those are valid reasons to be having a good day. I am happy that you are happy, I love you so much Maddie!"
};

const stressedNotes = {
    "school": "School can be really frustrating. If someone is giving you any problems, I wish I could just come over and take care of them for you. Take some deep breaths, everything will be okay. I know it is hard to see that right now, but I promise you it will work out. You are a smart and harworking girl and you always figure these things out. Just know that I am always here if you ever need to talk to someone to. I love you Maddie, keep your head up!",
    "too-much": "I understand what you are feeling, and it is completely valid to feel stressed out. Overstimulation is a real thing, and I'm really sorry you are feeling that way. Remind yourself that this is all temporary, and soon you will be in bed getting some rest. I know this might be hard, but try your best to just focus on one thing at a time instead of trying to process everything around you all at once. You can do this Maddie, I love you.",
    "future": "Okay, I know exactly what you are feeling right now. Everybody thinks about the future and it can definitely be overwhelming when you look at all the different outcomes and possibilities of the future. Remember that what is out of your control is out of your control, and was always meant to happen. Control what you can control. Your actions and reactions are gonna put you on the right path for the future. Stay strong Maddie. You've got this",
    "relax": "Hey, that is good news! I know you are stressed out because you did everything you could and the results are not revealing themselves. The reason I say this is good news is because God sees everything that you do, and he has a plan for you. He sees you working so hard, even if you don't believe so. Trust in him, and things will turn out in your favor in no time, I promise you that. Keep your head up Maddie, everything is gonna work out great!"
};

const missingYouReasons = {
    "wish-here": "I wish you were here right now",
    "hug": "My social interactions today just didn't go well",
    "memories": "I miss my family and my home",
    "see-you": "I am getting FOMO"
};


const lonelyNotes = {
    "wish-here": "I do too Maddie. I wish I could be with you every second of every minute of my life. But unfortunately that is just not how it works. And it sucks. But just try to remind yourself how AMAZING it will be when we can finally live together and spend so many nights in together AND so many nights out together! I think about our future every day, and it makes me so excited. One day at a time Maddie, we can do this",
    "hug": "Okay, I am on the way right now to give you a hug. Whether it was an argument with someone, or you were in an environment with people you don't know or like, or someone was making you uncomfortable, just know I am always here for you if you ever need to fall back on someone. Just tell me what I need to do and I will either listen, make you laugh, get emotional with you, or all of the above. You are my favorite person on the planet, and anyone that gives you a hard time just doesn't deserve you or your time.",
    "memories": "Hey Maddie, I am really sorry to hear you are missing your family and friends. You surround yourself with great people, and I know it is hard to look at it this way right now, but how lucky are you to be able to miss someone so much? It is okay to be sad, and perfectly okay to miss people. In fact, it's good to miss people! I hope you know that they miss you just as much, and maybe even more because you have such an amazing way with connecting with people emotionally. I love you Maddie",
    "see-you": "FOMO stinks, it truly does. If there was a way I could take that feeling away from you right now I would. The bad thing about FOMO is that it lingers, it isn't just an instantaneous moment. I get FOMO a lot, especially being at a school without you, my friends, and without the fun scenes. I can promise you though, whatever person, place, or event you are missing out on will be thrown in the garbage once you experience something bigger and better. And you will, just give it time. You've got this Maddie, stay strong."
};


reasonButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.dataset.reason);
        

        

if (happyNotes[button.dataset.reason]) {
    document.getElementById("message-text").textContent =
        happyNotes[button.dataset.reason];

} else if (stressedNotes[button.dataset.reason]) {
    document.getElementById("message-text").textContent =
        stressedNotes[button.dataset.reason];

} else if (lonelyNotes[button.dataset.reason]) {
    document.getElementById("message-text").textContent =
        lonelyNotes[button.dataset.reason];

} else {
    document.getElementById("message-text").textContent =
        loveNotes[button.dataset.reason];
}


        document.getElementById("reason-screen").classList.add("hidden");
        document.getElementById("message-screen").classList.remove("hidden");
        console.log("Message screen is now:", document.getElementById("message-screen").className);
    });
});

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", function() {
    document.getElementById("message-screen").classList.add("hidden");
    document.getElementById("mood-screen").classList.remove("hidden");
});
