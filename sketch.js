function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
};

function draw() {
    background(0);
    translate(300, 300)
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();


    strokeWeight(20);
    stroke(188, 47, 51);
    noFill();
    let scEnd = map(sc, 0, 60, 0, 360);
    arc(0, 0, 340, 340, 0, scEnd);

    strokeWeight(20);
    stroke('#5bc236');
    noFill();
    let mnEnd = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, mnEnd);

    strokeWeight(20);
    stroke(35, 107, 171);
    noFill();
    let hrEnd = map(hr, 0, 24, 0, 360);
    arc(0, 0, 220, 220, 0, hrEnd);

    rotate(scEnd);
    strokeWeight(10);
    stroke(255);
    line(0, 0, 80, 0);

    fill(255);
    noStroke();
    text(hr + ':' + mn + ':' + sc, 190, 10);


}
