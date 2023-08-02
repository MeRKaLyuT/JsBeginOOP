class ElectroDevice {
  static baseInfo(name, power) {
    this.name = name;
    this.power = power;
    this.connected = false;
  }

  connected() {
    this.connected = true;
    console.log(`${this.name} is connected`)
  }

  unconnected() {
    this.connected = false;
    console.log(`${this.name} is unconnected`)
  }
}

class Laptop extends ElectroDevice {
  static laptopInfo(name, power, quality, processor){
    super.name();
    super.power();
    this.quality = quality;
    this.processor = processor;
  }
  
  newProcessor(newProcessor){
    this.processor = newProcessor;
    console.log(`Your processor has been upgraded to ${this.processor}`)
  }
}

class SolderingIron extends ElectroDevice{
  static solderingIronInfo(power, maxTemperature) {
    super.power();
    this.temperature = maxTemperature;
  }
}

const laptop = new Laptop('MSI gf65', 240, '1920x1080', 'Intel core I5 9300h')
const solderingIron = new SolderingIron(60, 940)

laptop.connected()
laptop.newProcessor("Intel core i7")

solderingIron.connected()
