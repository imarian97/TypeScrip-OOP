"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.moveRight = function () {
        this.x = this.x + 1;
    };
    Point.prototype.moveLeft = function () {
        this.x = this.x - 1;
    };
    return Point;
}());
var FormaGeometrica = /** @class */ (function () {
    function FormaGeometrica() {
    }
    FormaGeometrica.prototype.perimetru = function () {
        return 0;
    };
    return FormaGeometrica;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(centerPoint, sideLength) {
        var _this = _super.call(this) || this;
        _this.sideLength = sideLength;
        var halfSideLength = sideLength / 2;
        _this.topLeft = new Point(centerPoint.x - halfSideLength, centerPoint.y + halfSideLength);
        _this.topRight = new Point(centerPoint.x + halfSideLength, centerPoint.y + halfSideLength);
        _this.bottomRight = new Point(centerPoint.x + halfSideLength, centerPoint.y - halfSideLength);
        _this.bottomLeft = new Point(centerPoint.x - halfSideLength, centerPoint.y - halfSideLength);
        return _this;
    }
    Square.prototype.moveRight = function () {
        this.topLeft.moveRight();
        this.topRight.moveRight();
        this.bottomRight.moveRight();
        this.bottomLeft.moveRight();
    };
    Square.prototype.perimetru = function () {
        return this.sideLength * this.sideLength;
    };
    return Square;
}(FormaGeometrica));
var Dreptughi = /** @class */ (function (_super) {
    __extends(Dreptughi, _super);
    function Dreptughi(centerPoint, latime, inaltime) {
        var _this = _super.call(this) || this;
        _this.latime = latime;
        _this.inaltime = inaltime;
        var halfSideLength = latime / 2;
        _this.topLeft = new Point(centerPoint.x - halfSideLength, centerPoint.y + halfSideLength);
        _this.topRight = new Point(centerPoint.x + halfSideLength, centerPoint.y + halfSideLength);
        _this.bottomRight = new Point(centerPoint.x + halfSideLength, centerPoint.y - halfSideLength);
        _this.bottomLeft = new Point(centerPoint.x - halfSideLength, centerPoint.y - halfSideLength);
        return _this;
    }
    Dreptughi.prototype.moveRight = function () {
        this.topLeft.moveRight();
        this.topRight.moveRight();
        this.bottomRight.moveRight();
        this.bottomLeft.moveRight();
    };
    Dreptughi.prototype.perimetru = function () {
        return this.latime * this.inaltime;
    };
    return Dreptughi;
}(FormaGeometrica));
var fg = [];
fg[0] = new Square(new Point(1, 1), 4);
fg[1] = new Dreptughi(new Point(1, 1), 3, 7);
fg.forEach(function (element) {
    console.log(element.perimetru());
});
