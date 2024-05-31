#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
        if ((w > 0) && (h > 0)) {
            this.width = w;
            this.height = h;
        }
    }

    print () {
        for (let i = 0; i < this.width; i++){
            for (let i = 0; i < this.width; i++) {
                let b = '';
                for (let j = 0; j < this.height; j++){
                    let b = 'X';
                }
                console.log(b);
            }
        }
    }
    rotate () {
        const exchange = this.width;
        this.width = this.height;
        this.height = exchange;

    }
    double () {
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;