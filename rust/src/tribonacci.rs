fn tribonacci(signature: &[f64], n: usize) -> Vec<f64> {
    let mut cache = signature.to_vec();
    
    cache.resize(n, 0.0);
    
    for i in 3..cache.len() {
        cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
    }
    
    cache
}

tribonacci(&[3., 2., 1.], 10);