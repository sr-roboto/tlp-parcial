export default class Configuracion {
  private static instancia: Configuracion;
  private static modo: string;
  private static estado: string;
  private constructor() {}

  static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  set(opcion: string, estado: string) {
    if (opcion === 'modo') {
      Configuracion.estado = estado;
    }
  }

  get(opcion: string) {
    if (opcion === 'modo') {
      Configuracion.estado;
    }
  }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set('modo', 'produccion');
console.log(conf2.get('modo'));
