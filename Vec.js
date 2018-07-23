/**
 * a 2D-Vector representation
 */
class Vec {
    /**
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    mul(other) {
        return new Vec(this.x * other.x, this.y * other.y);
    }

    div(other) {
        return new Vec(this.x / other.x, this.y / other.y);
    }
}

module.exports = Vec;