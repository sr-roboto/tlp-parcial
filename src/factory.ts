class EquipoServer {
  constructor(
    public tipo: string,
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles() {
    console.log(
      `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    );
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
    if (tipo === 'Servidor') {
      return new EquipoServer(tipo, nombre, ram, procesador);
    }
  }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo(
  'Servidor',
  'Dell PowerEdge',
  '32GB',
  'Xeon'
);

console.log(server?.detalles());
