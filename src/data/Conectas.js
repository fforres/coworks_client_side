export default {
  _id:2,
  nombre: 'Conectas',
  url: 'http://www.conectas.cl/',
  telefono:'+56225031826',
  descripcion: {
    larga:'Conectas es un espacio de coworking para que profesionales independientes, emprendedores y trabajadores de empresas, puedan reunirse y trabajar en un ambiente abierto, colaborativo y con excelente conectividad.',
    corta:'Conectas es un espacio de coworking para que profesionales independientes, emprendedores y trabajadores de empresas, puedan reunirse y trabajar en un ambiente abierto, colaborativo y con excelente conectividad.'
  },
  precios: {
    moneda:'CLP',
    promedio: 136851,
    equipos: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      '5+': 0
    }
  },
  horarios: {
    lunes:      {abierto: true,  apertura: '8:00', cierre:'20:00'},
    martes:     {abierto: true,  apertura: '8:00', cierre:'20:00'},
    miercoles:  {abierto: true,  apertura: '8:00', cierre:'20:00'},
    jueves:     {abierto: true,  apertura: '8:00', cierre:'20:00'},
    viernes:    {abierto: true,  apertura: '8:00', cierre:'20:00'},
    sabado:     {abierto: true,   apertura: '9:00', cierre:'13:00'},
    domingo:    {abierto: false,   apertura: '', cierre:''}
  },
  direccion: {
    calle: 'santa beatriz',
    numero: '91',
    comuna: 'providencia',
    ciudad: 'santiago',
    pais: 'chile',
    geo: {
      lat:59.849123,
      lng:30.207123
    }
  },
  servicios: {
    'espacios_publicos': true,
    'mentorias':false,
    '24/7':false,
    'cafeteria': true,
    'wifi':true,
    'salas_de_reuniones':true
  }
};
