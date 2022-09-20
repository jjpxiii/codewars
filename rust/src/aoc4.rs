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
    // let max = draws.iter().max();
    // match max {
    //     Some(max) => println!("Min value: {}", max),
    //     None => println!("Vector is empty"),
    // }

    let numbers = (0..99)
        .map(|c| (c, Vec::new()))
        .collect::<HashMap<_, Vec<i8>>>();
    // dbg!(numbers);
    // let mut previous:i32 = line.trim_end().parse().unwrap();
    // println!("First line is {}", lines);
    let mut grids: Vec<Vec<i8>> = Vec::new();
    // let mut count: u8 = 1;
    loop {
        let mut buff = String::new();
        reader.read_line(&mut buff)?;
        if buff == "" {
            break;
        }

        if buff.trim().is_empty() {
            continue;
        }

        grids.push(
            buff.split_whitespace()
                .map(|s| s.parse::<i8>().unwrap())
                .collect::<Vec<i8>>(),
        );
        // count += 1;
    }

    let mut last_winner = 0;
    let mut winners_list:Vec<usize> = Vec::new();
    for number in draws {
        // for mut line in grids.iter_mut() {
        for i in 0..=grids.len()-1 {
            for j in 0..=4 {
                if &grids[i][j] == &number {
                    // println!("{}", number);
                    // l.1 = true;
                    grids[i][j] = -1 * &number;
                    // dbg!(&l);
                    // dbg!(*grids[i]);
                    // break;
                }
            }

            // check for winning boards
            // if !&winners_list.contains(&i) {
                if (i== 342 || i == 344) && !&winners_list.contains(&i) {
                if grids[i][0] < 0 && grids[i][1] < 0 && grids[i][2] < 0 && grids[i][3] < 0  && grids[i][4] < 0 {
                    println!("{}", number);
                    println!("quine ! {}", i);
                    // let grid_num = (i+1)
                    // winners_list.push((i+1)/5);
                    // winners_list.push((i+1)/5);
                    // dbg!(&grids[i-iprime]);
                    last_winner = i;
                    let toto = (i+1)%5;
                    dbg!(toto);
                    // dbg!(i-(i+1)%5);
                    dbg!(i-i%5);
                    for foo in i-i%5..=(i-i%5)+4 {
                        // println!("{}", foo);
                        winners_list.push(foo);
                    }
                    if i == 344 {
                        // dbg!(&winners_list);
                        dbg!(&grids[last_winner-4]);
                        dbg!(&grids[last_winner-3]);
                        dbg!(&grids[last_winner-2]);
                        dbg!(&grids[last_winner-1]);
                        dbg!(&grids[last_winner]);
                        println!("LAST ! {}", last_winner);
                    }
                    // dbg!(&grids[i-iprime]);
                    // dbg!(&grids[i-2]);
                    // dbg!(&grids[i-1]);
                    // dbg!(&grids[i]);
                    dbg!(&winners_list);
                    return Ok(());
                }

                else if ((i+1)%5 == 0) {
                    for j in 0..=4 {
                        // dbg!(&grids[i-4][j]);
                        // dbg!(&grids[i-3][j]);
                        // dbg!(&grids[i-2][j]);
                        // dbg!(&grids[i-1][j]);
                        // dbg!(&grids[i][j]);
                        if grids[i-4][j] < 0 && grids[i-3][j] < 0 && grids[i-2][j] < 0 && grids[i-1][j] < 0  && grids[i][j] < 0 {
                            println!("{}", number);
                            println!("colonne ! {}", i);
                            
                            last_winner = i;
                            // let toto = (i+1)%5;
                            // dbg!(toto);
                            // dbg!(i+toto);
                            // dbg!(i-i%5);
                            for foo in i-i%5..=(i-i%5)+4 {
                                // println!("{}", foo);
                                winners_list.push(foo);
                            }
                            // dbg!(&grids[i-4]);
                            // dbg!(&grids[i-3]);
                            // dbg!(&grids[i-2]);
                            // dbg!(&grids[i-1]);
                            // dbg!(&grids[i]);
                            // return Ok(());
                        }
                    }
                }
            }
        }

        
        // break;
    }

    dbg!(winners_list);
    dbg!(&grids[last_winner-4]);
    dbg!(&grids[last_winner-3]);
    dbg!(&grids[last_winner-2]);
    dbg!(&grids[last_winner-1]);
    dbg!(&grids[last_winner]);
    println!("LAST ! {}", last_winner);
    return Ok(());
}
