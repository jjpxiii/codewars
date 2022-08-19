use std::fs;
use std::io::{BufRead, BufReader};

fn main() -> std::io::Result<()>{
    let mut reader = BufReader::new(fs::File::open("aoc1_input.txt")?);
    let mut line = String::new();
    let mut count = 0;
    reader.read_line(&mut line)?;
    // println!("First line is {}", line);
    let mut previous:i32 = line.trim_end().parse().unwrap();
    
    loop {
        let mut buff = String::new();
        reader.read_line(&mut buff)?;
        if buff == "" {
            println!("{}", count);
            return Ok(());
        }
        let t:i32 = buff.trim_end().parse().unwrap();
        if t > previous {
            count+=1;
        }
        previous = t;
    }
}