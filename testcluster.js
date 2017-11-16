function kmeans() {
    // default k
    var k = 3;
    var iterations = 100;

    var data = [[0.0, 5], [0.0, 5], [0.0, 7], [0.0, 4], [0.0, 6], [0.0, 5], [0.0, 15], [0.0, 4], [0.0, 14], [0.0, 6], [0.0, 16], [0.0, 4], [0.0, 3], [0.0, 5], [0.0, 6], [0.0, 7], [0.0, 4], [0.0, 16], [0.0, 14], [0.0, 6], [0.0, 5], [0.0, 5], [0.0, 15], [0.0, 6], [0.0, 4], [0.0, 5], [0.0, 15], [0.0, 4], [0.0, 15], [0.0, 35], [0.0, 16], [0.0, 15], [0.0, 4], [0.0, 6], [0.0, 5], [0.0, 5], [0.0, 4], [0.0, 7], [0.0, 4], [0.0, 14], [0.0, 5], [0.0, 35], [0.0, 15], [0.0, 5], [0.0, 15], [0.0, 4], [0.0, 5], [0.0, 5], [0.0, 14], [0.0, 16], [0.0, 7], [0.0, 6], [0.0, 6], [0.0, 7], [0.0, 14], [0.0, 16], [0.0, 4], [0.0, 6], [0.0, 5], [0.0, 15], [0.0, 15], [0.0, 5], [0.0, 6], [0.0, 3], [0.0, 15], [0.0, 4], [0.0, 4], [0.0, 16], [0.0, 14], [0.0, 7], [0.0, 4], [0.0, 5], [0.0, 14], [0.0, 35], [0.0, 15], [0.0, 5], [0.0, 6], [0.0, 4], [0.0, 5], [0.0, 6], [0.0, 5], [0.0, 15], [0.0, 6], [0.0, 4], [0.0, 16], [0.0, 6], [0.0, 4], [0.0, 14], [0.0, 15], [0.0, 4], [0.0, 15], [0.0, 4], [0.0, 14], [0.0, 15], [0.0, 5], [0.0, 7], [0.0, 15], [0.0, 7], [0.0, 17], [0.0, 16], [0.0, 15], [0.0, 5], [0.0, 5], [0.0, 36], [0.0, 4], [0.0, 3], [0.0, 5], [0.0, 6], [0.0, 16], [0.0, 5], [0.0, 3], [0.0, 15], [0.0, 16], [0.0, 5], [0.0, 13], [0.0, 6], [0.0, 16], [0.0, 14], [0.0, 15], [0.0, 6], [0.0, 5], [0.0, 4], [0.0, 6], [0.0, 6], [0.0, 16], [0.0, 34], [0.0, 4], [0.0, 5], [0.0, 15], [0.0, 6], [0.0, 15], [0.0, 4], [0.0, 16], [0.0, 14], [0.0, 6], [0.0, 3], [0.0, 4], [0.0, 4], [0.0, 12], [0.0, 16], [0.0, 14], [0.0, 6], [0.0, 15], [0.0, 14], [0.0, 2], [0.0, 5], [0.0, 15], [0.0, 5], [0.0, 16], [0.0, 5], [0.0, 5], [0.0, 15], [0.0, 6], [0.0, 4], [0.0, 5], [0.0, 4], [0.0, 6], [0.0, 34], [0.0, 16], [0.0, 3], [0.0, 16], [0.0, 5], [0.0, 16], [0.0, 15], [0.0, 4], [0.0, 5], [0.0, 5], [0.0, 4], [0.0, 4], [0.0, 5], [0.0, 15], [0.0, 15], [0.0, 6], [0.0, 15], [0.0, 3], [0.0, 6], [0.0, 15], [0.0, 3], [0.0, 4], [0.0, 36], [0.0, 15], [0.0, 15], [0.0, 7], [0.0, 4], [0.0, 4], [0.0, 5], [0.0, 6], [0.0, 5], [0.0, 6], [0.0, 15], [0.0, 6], [0.0, 37], [0.0, 6], [0.0, 3], [0.0, 16], [0.0, 5], [0.0, 4], [0.0, 6], [0.0, 7], [0.0, 14], [0.0, 4], [0.0, 4], [0.0, 15], [0.0, 13], [0.0, 14], [0.0, 5], [0.0, 16], [0.0, 5], [0.0, 5], [0.0, 4], [0.0, 5], [0.0, 15], [0.0, 14], [0.0, 5], [0.0, 6], [0.0, 5], [0.0, 17], [0.0, 4], [0.0, 15], [0.0, 37], [0.0, 16], [0.0, 5], [0.0, 6], [0.0, 5], [0.0, 4], [0.0, 13], [0.0, 15], [0.0, 5], [0.0, 16], [0.0, 4], [0.0, 16], [0.0, 15], [0.0, 14], [0.0, 6], [0.0, 15], [0.0, 5], [0.0, 4], [0.0, 15], [0.0, 6], [0.0, 5], [0.0, 14], [0.0, 6], [0.0, 3], [0.0, 5], [0.0, 16], [0.0, 5], [0.0, 5], [0.0, 4], [0.0, 14]]
    
    // initialize point objects with data
    var points = data.map(function (vector) { return new Point(vector) });

    // intialize centroids randomly
    var centroids = [];
    for (var i = 0; i < k; i++) {
        centroids.push(new Centroid(points[i % points.length].location(), i));
    };

    // update labels and centroid locations until convergence
    for (var iter = 0; iter < iterations; iter++) {
        points.forEach(function (point) { point.updateLabel(centroids) });
        centroids.forEach(function (centroid) { centroid.updateLocation(points) });
    };

    // return points and centroids
    return centroids.map(function(centroid) {
        return {
          centroid: centroid.location(),
          points: points.filter(function(point) { return point.label() == centroid.label() }).map(function(point) { return point.label() }),
        };
      });

};

// objects
function Point(location) {
    var self = this;
    this.location = getterSetter(location);
    this.label = getterSetter();
    this.updateLabel = function (centroids) {
        var distancesSquared = centroids.map(function (centroid) {
            return sumOfSquareDiffs(self.location(), centroid.location());
        });
        self.label(mindex(distancesSquared));
    };
};

function Centroid(initialLocation, label) {
    var self = this;
    this.location = getterSetter(initialLocation);
    this.label = getterSetter(label);
    this.updateLocation = function (points) {
        var pointsWithThisCentroid = points.filter(function (point) { return point.label() == self.label() });
        if (pointsWithThisCentroid.length > 0) self.location(averageLocation(pointsWithThisCentroid));
    };
};

// convenience functions
function getterSetter(initialValue, validator) {
    var thingToGetSet = initialValue;
    var isValid = validator || function (val) { return true };
    return function (newValue) {
        if (typeof newValue === 'undefined') return thingToGetSet;
        if (isValid(newValue)) thingToGetSet = newValue;
    };
};

function sumOfSquareDiffs(oneVector, anotherVector) {
    var squareDiffs = oneVector.map(function (component, i) {
        return Math.pow(component - anotherVector[i], 2);
    });
    return squareDiffs.reduce(function (a, b) { return a + b }, 0);
};

function mindex(array) {
    var min = array.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return array.indexOf(min);
};

function sumVectors(a, b) {
    return a.map(function (val, i) { return val + b[i] });
};

function averageLocation(points) {
    var zeroVector = points[0].location().map(function () { return 0 });
    var locations = points.map(function (point) { return point.location() });
    var vectorSum = locations.reduce(function (a, b) { return sumVectors(a, b) }, zeroVector);
    return vectorSum.map(function (val) { return val / points.length });
};

console.log(kmeans())