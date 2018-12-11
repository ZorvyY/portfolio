import V from './Vec.js';

export default class Rect {
  constructor(x, y, w, h, m) {
    if (typeof(m) =='undefined') {
      this.m = 1;
    } else {
      this.m = m;
    }

    this.width = w; this.height = h;

    this.center = new V(x + w/2, y + h/2);
    this.v = new V(0,0);
    this.a = new V(0,0);

    this.theta = 0;
    this.omega = 0;
    this.alpha = 0;

    this.J = this.m * (h * h + w * w) / 12;
  }

  get topLeft() {
    return (
      this.center.plus(
        (new V(-this.width, -this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  get topRight() {
    return (
      this.center.plus(
        (new V(this.width, -this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  get bottomLeft() {
    return (
      this.center.plus(
        (new V(-this.width, this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }
  
  get bottomRight() {
    return (
      this.center.plus(
        (new V(this.width, this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  move(v) {
    this.center = this.center.plus(v);
  }

  rotate(angle) {
    this.theta += angle;
  }

  intersects(other) {
    let processVectors= v => v.normalize().rotate(Math.PI/2,new V(0,0));
    let vectors = [
      this.topLeft.minus(this.topRight).normalize(),
      this.topRight.minus(this.bottomRight).normalize(),
      other.topLeft.minus(other.topRight).normalize(),
      other.topRight.minus(other.bottomRight).normalize()
    ];

    vectors = vectors.map(processVectors);

    let overlapping = [];

    //Let it be noted that the vector in each case is perpendicular
    //to the separating axis of that vector. In other words the 
    //"seeing axis" is perpendicular to the vector.
    for (let i = 0; i < 4; i++) {
      let axis = vectors[i];
      let box1 = this, box2 = other;
      if (this.center.dot(axis) > other.center.dot(axis))
        vectors[i] = axis = axis.times(-1);
      
      let crosses1 = [
        box1.topLeft, 
        box1.topRight, 
        box1.bottomLeft, 
        box1.bottomRight
      ].map(v => v.dot(axis));
      let crosses2 = [
        box2.topLeft, 
        box2.topRight, 
        box2.bottomLeft, 
        box2.bottomRight
      ].map(v => v.dot(axis));

      overlapping[i] = Math.max(...crosses1) - Math.min(...crosses2);
      //The amount of overlap between the shapes
    }
    if (overlapping.every(a => a >= 0)) {
      //If there is no distance for any axis
      var i = overlapping.indexOf(Math.min(...overlapping));
      //Find the least overlapping vector
      return vectors[i];
    } else {
      return false;
    }
    //If the rectangles are overlapping for every test vector, 
    //Then they must be in contact.
  }

}
