fn print(n: i32) -> Option<String> {
    if n < 0 || n % 2 == 0 {
        return None;
    }

    let n = n as usize;
    let diamond = (1..=n) // creates a range from 1 to n included
        .chain(
            (1..n).rev() //creates a range from 1 to n-1 and reverses it
        ) 
        .step_by(2)
        .map(|i| format!("{}{}\n", " ".repeat((n - i) / 2), "*".repeat(i)))
        .collect();

    Some(diamond)
}

#[test]
fn basic_test() {
  assert_eq!(print(3), Some(" *\n***\n *\n".to_string()) );
  assert_eq!(print(5), Some("  *\n ***\n*****\n ***\n  *\n".to_string()) );
  assert_eq!(print(-3),None);
  assert_eq!(print(2),None);
  assert_eq!(print(0),None);
  assert_eq!(print(1), Some("*\n".to_string()) );
}