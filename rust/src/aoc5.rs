#![allow(dead_code, unused)]
use std::collections::HashMap;
use std::fs;
use std::io::{BufRead, BufReader};

fn main() -> std::io::Result<()> {
    let mut reader = BufReader::new(fs::File::open("aoc4_input.txt")?);
    let mut line = String::new();
    let mut count = 0;
    reader.read_line(&mut line)?;

    let draws = line
        .trim_end()
        .split(",")
        .map(|s| s.parse::<i8>().unwrap())
        .collect::<Vec<i8>>();

    return Ok(()); 
}