class TvPrivate {
    constructor(_brand, _size, _resolution, _connections) {
        console.log(`Creating television ${_brand}`);
        this._brand = _brand;
        this._size = _size;
        this._resolution = _resolution;
        this._connections = _connections;
    }
    turnOn() {
        console.log(`
    Initializating...
    ${this._brand}
    ${this._size}''
    ${this._resolution}
    ${this._connections}
    ${this._connectedTo}
    `);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(connection) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
        ;
    }
}
const tv2 = new TvPrivate('Samsung', 32, '1900x1200', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv2.connectedTo = 'HDMI';
tv2.turnOn();
