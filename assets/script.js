var topics = ['CLI' , 'Git' , 'HTML' , 'CSS' , 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }
}

function selectTopic(){
    if (randomTopic === 'CLI') {
        console.log("Let's study Command Line Interface!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'HTML') {
     console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
     console.log("Let's study CSS!");
    } else if (randomTopic === 'JavaScript') {
     console.log("Let's study JavaScript!");
    } else {
     console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics ();
console.log('Which topic should we study first?');
selectTopic();