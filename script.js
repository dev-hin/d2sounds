const classes = ['amazon', 'assassin', 'necromancer', 'barbarian', 'paladin', 'sorceress', 'druid']
const heroes = document.querySelectorAll('.hero')
const starBtn = document.querySelector('.star-btn')
const daggerBtn = document.querySelector('.dagger-btn')
const skullBtn = document.querySelector('.skull-btn')

let selectedHero = ""

starBtn.addEventListener('click', function(){
  playRandomSpeech()
});


daggerBtn.addEventListener('click', function(){
  playRandomSkill()
});


skullBtn.addEventListener('click', function(){
  playRandomDeath()
});

heroes.forEach((hero) => {
  hero.addEventListener('click', function(){
    removeActiveClasses()
    hero.classList.add('active')
  });
})

function removeActiveClasses() {
  heroes.forEach(hero => {
    hero.classList.remove('active')
  })
}

function playRandomSpeech(){
  selectedHero = document.querySelector('.hero.active p').innerHTML.toLowerCase()
  const speechSounds = [ `/audio/${selectedHero}/speech1.wav`,
  `/audio/${selectedHero}/speech2.wav`
  ]
      
  //This line will select a random sound to play out of your provided URLS
  const soundFile = speechSounds[Math.floor(Math.random()*speechSounds.length)];
      
  //Find the player element and generate an embed file to play the sound within it
  document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playRandomSkill(){
  selectedHero = document.querySelector('.hero.active p').innerHTML.toLowerCase()
  const skillSounds = [ `/audio/${selectedHero}/skill1.wav`,
  `/audio/${selectedHero}/skill2.wav`
  ]
      
  //This line will select a random sound to play out of your provided URLS
  const soundFile = skillSounds[Math.floor(Math.random()*skillSounds.length)];
      
  //Find the player element and generate an embed file to play the sound within it
  document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playRandomDeath(){
  selectedHero = document.querySelector('.hero.active p').innerHTML.toLowerCase()
  const deathSounds = [ `/audio/${selectedHero}/death1.wav`,
  `/audio/${selectedHero}/death2.wav`
  ]
      
  //This line will select a random sound to play out of your provided URLS
  const soundFile = deathSounds[Math.floor(Math.random()*deathSounds.length)];
      
  //Find the player element and generate an embed file to play the sound within it
  document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

// function stopSounds() {
//   audio.pause()
//   audio.currentTime = 0;
//   console.log(audio);
// }