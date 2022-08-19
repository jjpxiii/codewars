#![allow(dead_code, unused)]
use std::fs;
use std::io::{BufRead, BufReader};

fn main() -> std::io::Result<()>{
    let mut reader = BufReader::new(fs::File::open("aoc4_input.txt")?);
    let mut line = String::new();
    let mut count = 0;
    reader.read_line(&mut line)?;
    
    let first = line.trim_end();
    // let mut previous:i32 = line.trim_end().parse().unwrap();
    println!("First line is {}", first);
    loop {
        let mut buff = String::new();
        reader.read_line(&mut buff)?;
        if buff == "" {
            println!("{}", count);
            return Ok(());
        }
 
    }
}