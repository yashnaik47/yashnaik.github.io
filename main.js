var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


var insertx = ['Willy the Goblin','Big Daddy','Father Christmas'];

var inserty = ['the soup kitchen','Disneyland','the White House'];

var insertz = ['spontaneously combusted','melted into a puddle on the sidewalk00','turned into a slug and crawled away'];

var xItem = randomValueFromArray(insertx);
var yItem = randomValueFromArray(inserty);
var zItem = randomValueFromArray(insertz);

var storyText = 'It was 94 fahrenheit outside, so '+xItem+' went for a walk. When they got to '+yItem+', they stared in horror for a few moments, then '+zItem+'. Bob saw the whole thing, but was not surprised — '+xItem+' weighs 300 pounds, and it was a hot day.';
//var newStory = storyText;



function randomValueFromArray(array)
{
  return array[Math.floor(Math.random()*array.length)];
}


randomize.addEventListener('click', result);

function result() 
{
  xItem = randomValueFromArray(insertx);
  yItem = randomValueFromArray(inserty);
  zItem = randomValueFromArray(insertz);	//var newStory=storyText;
  //var newStory = storyText;
  if(customName.value !== '') 
  {
    var name = customName.value;
    var newStory = storyText.replace("Bob", name);
    //newStory.replace(/bob/g,name);
  }

  if(document.getElementById("uk").checked) 
  {
    var weight = Math.round(300*0.0714)+' stone';
    var temperature =  Math.round(94*0.55)+' centigrade';
    var newStory2 = newStory.replace("300 pounds",weight);
    var newStory3 = newStory2.replace("94 fahrenheit",temperature);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

