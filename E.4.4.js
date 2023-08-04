function ElectroDevice(name, power){
    this.name = name;
    this.power = power;
    this.connect = false;
}

ElectroDevice.prototype.connected = function() {
    this.connected = true;
    console.log(this.name + 'was connected');
}

ElectroDevice.prototype.unconnected = function(){
    this.connected = false
    console.log(this.name + 'was unconnected')
}

function Laptop(name, power, processor){
    ElectroDevice.call(this, name, power);
    this.processor = processor;
}

Laptop.prototype = Object.create(ElectroDevice.prototype);
Laptop.prototype.constructor = Laptop;
Laptop.prototype.processor = function(newProcessor){
    this.processor = newProcessor;
    console.log('The processor was edited to' + this.processor);
}

function Lamp(name, power, brightness) {
    ElectroDevice.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(ElectroDevice.prototype)
Lamp.prototype.constructor = Lamp;
Lamp.prototype.brightness = function(newsBrightness) {
    this.brightness = newsBrightness;
    console.log('The brightness was edit to' + this.brightness);
}

const lamp = new Lamp('Desk Lamp', 60, 'Medium');
const laptop = new Laptop('MSI GF65', 500, 'Intel i7');

laptop.unconnected();
lamp.connected();
