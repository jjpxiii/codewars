var minOrders = 5
var minPrice = 20
var customers = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
}

function pizzaRewards(customers, minOrders, minPrice) {
    var result = []
    for (var i in customers) {
        result.push([i, customers[i].filter(function(a) { return a >= minPrice }).length]);
    }
    return result.filter(function(a) { return a[1] >= minOrders }).map(function (a) { return a[0] })
}

console.log(pizzaRewards(customers, minOrders, minPrice))