export class InventarioViejo {
  public inventario: Object[] = [];

  agregarItem(nombre: string, tipo: string, estado: string) {
    this.inventario.push(nombre, tipo, estado);
  }
}

export class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {
    this.inventarioViejo = new InventarioViejo();
  }

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  listarEquipos() {
    console.log(`${JSON.stringify(this.inventarioViejo.inventario)}`);
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo('Router Cisco', 'Red', 'Disponible');
console.log(adaptador.listarEquipos());
