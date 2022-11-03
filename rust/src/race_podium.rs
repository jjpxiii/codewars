pub fn race_podium(blocks: u32) -> (u32, u32, u32) {
    if blocks < 6 {
        return (0, 0, 0);
    }

    let mut atemp = blocks / 3 + u32::from(blocks % 3 != 0);
    loop {
        let mut adj = 1;
        loop {
            if blocks - atemp - (atemp - adj) < atemp - adj
                && blocks - atemp - (atemp - adj) > 0
            {
                return (atemp - adj, atemp, blocks - atemp - (atemp - adj));
            }
            if adj == 2 {
                break;
            }
            adj = 2;
        }
        atemp += 1;
        if atemp > blocks {
            break;
        }
    }
    (0, 0, 0)
}

fn dotest(n: u32, expected: (u32, u32, u32)) {
    let actual = race_podium(n);
    assert!(
        actual == expected,
        "With n = {n}\nExpected {expected:?} but got {actual:?}"
    )
}

#[test]
fn fixed_tests() {
    dotest(11, (4, 5, 2));
    dotest(6, (2, 3, 1));
    dotest(10, (4, 5, 1));
    dotest(100000, (33334, 33335, 33331));
    dotest(7, (2, 4, 1));
    dotest(8, (3, 4, 1));
}
