class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: Array<string>;
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: Array<string>) {
    console.log(`Creating television ${brand}`);

    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(`
    Initializating...
    ${this.brand}
    ${this.size}''
    ${this.resolution}
    ${this.connections}
    `);
  }
}

const tv1 = new Tv('Philco', 42, '1900x1200', ['HDMI', 'Ethernet', 'Wi-Fi']);

tv1.turnOn();