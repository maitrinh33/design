function greet(name, callback) {
    console.log('Hello', + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

//Goij hamf greet vaf truyeebf hamf sayGoodbye lamf callback
greet('Alice', sayGoodbye)