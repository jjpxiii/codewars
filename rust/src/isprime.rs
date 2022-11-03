fn is_prime(x: i64) -> bool {
    let last = (x as f64).sqrt() as i64 + 1;
    x > 1 && (2..last).all(|d| x % d != 0)
}

fn main() {
    println!("{:?}", is_prime(10101010101010101) ); 
}