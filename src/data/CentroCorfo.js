export default {
  nombre: 'Centro Corfo',
  url: 'http://www.corfo.cl/centro-colaborativo/acerca-del-centro-colaborativo',
  telefono:'+56226318200',
  descripcion: {
    larga:'Ponemos a tu disposición cómodas y modernas instalaciones que permiten realizarun trabajo individual y grupal, con acceso a Internet y colecciones especializadas que marcan tendencia en el ámbito de los negocios, la industria y la innovación, además de una agradable cafetería.',
    corta:'La Biblioteca recibe a un importante número de personas que como tú, buscan un espacio para intercambiar ideas y dar un impulso a sus proyectos'
  },
  precios: {
    moneda:'CLP',
    promedio: 0,
    equipos: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      '5+': 0
    }
  },
  horarios: {
    lunes: {abierto: false, apertura: '9:00', cierre:'17:00'},
    martes: {abierto: false, apertura: '9:00', cierre:'17:00'},
    miercoles: {abierto: false, apertura: '9:00', cierre:'17:00'},
    jueves: {abierto: false, apertura: '9:00', cierre:'17:00'},
    viernes: {abierto: false, apertura: '9:00', cierre:'06:00'},
    sabado: {abierto: true, apertura: '', cierre:''},
    domingo: {abierto: true, apertura: '', cierre:''}
  },
  direccion: {
    calle: 'moneda',
    numero: '912',
    comuna: 'santiago',
    ciudad: 'santiago',
    pais: 'chile',
    geo: {
      lat:59.724465,
      lng:30.080121
    }
  },
  servicios: {
    'espacios_publicos': true,
    'mentorias':false,
    '24_7':false,
    'cafeteria': true,
    'wifi':true,
    'salas_de_reuniones':true
  }
};
