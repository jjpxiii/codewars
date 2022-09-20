// mod aoc4;

mod aoc5;

use std::io;

fn main() {
    println!("{}", 4/5);
    println!("{}", 5/5);
    println!("{}", 6/5);

    println!("{}", 1%5);
    println!("{}", 2%5);
    println!("{}", 3%5);
    println!("{}", 4%5);
    println!("{}", 5%5);
    println!("{}", 6%5);
    println!("{}", 7%5);
    println!("{}", 8%5);
    println!("{}", 9%5);

    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}
