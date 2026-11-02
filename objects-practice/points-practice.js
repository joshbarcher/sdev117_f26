let plane = {
    name: "cartesian plane",
    origin: {
        x: 0,
        y: 0
    },
    points: [
        { x: 2, y: 4 },
        { x: 1, y: 1 },
        { x: -3, y: 2 },
        { x: 0, y: 1 }
    ],
    onAnAxis: function(x, y) {
        return x == 0 || y == 0;
    },
    distance: function(point1, point2) {
        return Math.sqrt((point1.x - point2.x) ** 2 +
                         (point1.y - point2.y) ** 2);
    }
}

//name of plane
console.log("Name", plane.name)
console.log();

//coordinates of origin
console.log(`(${plane.origin.x}, ${plane.origin.y})`);
//console.log("(" + plane.origin.x + ", " + plane.origin.y + ")");
console.log();

//print out points in plane 
for (let point of plane.points) {
    console.log(`(${point.x}, ${point.y})`);
}
console.log();

//print distance between points
const p1 = { x: 3, y: 2 }
const p2 = { x: 13, y: -4 }

const distance = plane.distance(p1, p2);
console.log("Distance is", distance);