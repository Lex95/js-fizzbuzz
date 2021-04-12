for (i = 1; i <= 100; i++){
    if (!(i % 3) && !(i % 5)) {
        document.writeln("FizzBuzz");
    } else if (!(i % 5)) {
        document.writeln("Buzz");
    } else if (!(i % 3)) {
        document.writeln("Fizz");
    } else {
        document.writeln(i);
    }
}