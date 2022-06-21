var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        console.log("Creating television ".concat(brand));
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("\n    Initializating...\n    ".concat(this.brand, "\n    ").concat(this.size, "''\n    ").concat(this.resolution, "\n    ").concat(this.connections, "\n    "));
    };
    return Tv;
}());
var tv1 = new Tv('Philco', 42, '1900x1200', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();
