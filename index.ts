// Add your Circle class here

class Circle {
    radius: number;
    
    constructor (radius: number) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference () {
        return 2 * Math.PI * this.radius
    }

    get area () {
        return Math.PI * this.radius * this.radius
    }

    set diameter(d: number) {
        this.radius = d / 2
    }

    set circumference(c: number) {
        this.radius = c / (2 * Math.PI)
    }

    set area (a: number) {
        this.radius = Math.sqrt(a / Math.PI)
    }
}