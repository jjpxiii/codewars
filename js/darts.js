function getDartboardScore(x, y) {
    const unit = 170;
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    var theta = Math.atan(y / x)
    var res = ""
    if (z > unit)
        return "X";
    if (z < 6.35)
        return "DB";
    if (z < 15.9)
        return "SB";
    if (z > 99 && z < 107)
        res = "T"
    if (z > 162)
        res = "D"

    if (x > 0 && y > 0) {
        if (theta < Math.PI / 20)
            res += "6"
        else if (theta < 3 * Math.PI / 20)
            res += "13"
        else if (theta < 5 * Math.PI / 20)
            res += "4"
        else if (theta < 7 * Math.PI / 20)
            res += "18"
        else if (theta < 9 * Math.PI / 20)
            res += "1"
        else
            res += "20"
    }
    else if (x < 0 && y > 0) {
        theta += Math.PI / 2
        if (theta < Math.PI / 20)
            res += "20"
        else if (theta < 3 * Math.PI / 20)
            res += "5"
        else if (theta < 5 * Math.PI / 20)
            res += "12"
        else if (theta < 7 * Math.PI / 20)
            res += "9"
        else if (theta < 9 * Math.PI / 20)
            res += "14"
        else
            res += "11"
    }
    else if (x < 0 && y < 0) {
        if (theta < Math.PI / 20)
            res += "11"
        else if (theta < 3 * Math.PI / 20)
            res += "8"
        else if (theta < 5 * Math.PI / 20)
            res += "16"
        else if (theta < 7 * Math.PI / 20)
            res += "7"
        else if (theta < 9 * Math.PI / 20)
            res += "19"
        else
            res += "3"
    }
    else {
        theta += Math.PI / 2
        if (theta < Math.PI / 20)
            res += "3"
        else if (theta < 3 * Math.PI / 20)
            res += "17"
        else if (theta < 5 * Math.PI / 20)
            res += "2"
        else if (theta < 7 * Math.PI / 20)
            res += "15"
        else if (theta < 9 * Math.PI / 20)
            res += "10"
        else
            res += "6"
    }

    return res;
}

// X
// console.log(getDartboardScore(-133.69, -147.38))
// DB
// console.log(getDartboardScore(4.06, 0.71))
// SB
// console.log(getDartboardScore(2.38, -6.06))
// 20
// console.log(getDartboardScore(-5.43, 117.95))
// 7
//console.log(getDartboardScore(-73.905, -95.94))
// T2
// console.log(getDartboardScore(55.53, -87.95))
// D9
// console.log(getDartboardScore(-145.19, 86.53))
console.log(getDartboardScore(-51.78994641674416, 85.27310883031703))