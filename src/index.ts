class Point {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x=x;
        this.y=y;
    }

    moveRight(): void{
        this.x = this.x + 1;
    }

    moveLeft(): void{
        this.x = this.x - 1;
    }
}



class FormaGeometrica {
    perimetru(): number {
        return 0;
    }
}


class Square extends FormaGeometrica {
    topLeft: Point;
    topRight: Point;
    bottomRight: Point;
    bottomLeft: Point;
    sideLength: number;

    constructor(centerPoint: Point, sideLength: number) {
        super();
        this.sideLength = sideLength;
        const halfSideLength = sideLength/2;
        this.topLeft = new Point(centerPoint.x-halfSideLength, centerPoint.y+halfSideLength);
        this.topRight = new Point(centerPoint.x+halfSideLength, centerPoint.y+halfSideLength);
        this.bottomRight = new Point(centerPoint.x+halfSideLength, centerPoint.y-halfSideLength);
        this.bottomLeft = new Point(centerPoint.x-halfSideLength, centerPoint.y-halfSideLength);
    }

    moveRight(): void{
        this.topLeft.moveRight();
        this.topRight.moveRight();
        this.bottomRight.moveRight();
        this.bottomLeft.moveRight();
    }

    perimetru() {
        return this.sideLength*this.sideLength;
    }
    
}


class Dreptughi extends FormaGeometrica {
    topLeft: Point;
    topRight: Point;
    bottomRight: Point;
    bottomLeft: Point;
    latime: number;
    inaltime: number;

    constructor(centerPoint: Point, latime: number, inaltime: number) {
        super();
        this.latime = latime;
        this.inaltime = inaltime;
        const halfSideLength = latime/2;
        this.topLeft = new Point(centerPoint.x-halfSideLength, centerPoint.y+halfSideLength);
        this.topRight = new Point(centerPoint.x+halfSideLength, centerPoint.y+halfSideLength);
        this.bottomRight = new Point(centerPoint.x+halfSideLength, centerPoint.y-halfSideLength);
        this.bottomLeft = new Point(centerPoint.x-halfSideLength, centerPoint.y-halfSideLength);
    }

    moveRight(): void{
        this.topLeft.moveRight();
        this.topRight.moveRight();
        this.bottomRight.moveRight();
        this.bottomLeft.moveRight();
    }

    perimetru() {
        return this.latime*this.inaltime;
    }
    
}


const fg: FormaGeometrica[] = [];

fg[0] = new Square(new Point(1, 1), 4)
fg[1] = new Dreptughi(new Point(1, 1), 3, 7)

fg.forEach(element=>{
    console.log(element.perimetru());
})