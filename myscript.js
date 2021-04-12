for (i = 1; i <= 100; i++){
    if (!(i % 3) && !(i % 5)) {
        document.getElementById("myId").innerHTML += "<p>FizzBuzz</p>";
    } else if (!(i % 5)) {
        document.getElementById("myId").innerHTML += "<p>Buzz</p>";
    } else if (!(i % 3)) {
        document.getElementById("myId").innerHTML += "<p>Fizz</p>";
    } else {
        document.getElementById("myId").innerHTML += "<p>" + i + "</p>";
    }
}