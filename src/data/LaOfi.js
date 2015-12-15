export default {
  _id:8,
  nombre: 'La Ofi',
  url: 'http://www.coworkinglaofi.cl/',
  telefono:'+56229854768',
  descripcion: {
    larga:' La Ofi, permite adaptar tu lugar de trabajo según tus necesidades en cuanto al tiempo que pasaras en la oficina. También te permitirá crear redes profesionales con los mismos usuarios de este coworking, con esto esperamos que nuestros clientes tengan todo el apoyo que necesitan para llevar a cabo su proyecto, trabajo o emprendimiento',
    corta:'Coworkinglaofi, dispone de amplios lugares de trabajo, sector de descanso y sala de reunion bien equipada'
  },
  precios: {
    moneda:'CLP',
    promedio: 310000,
    equipos: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      '5+': 0
    }
  },
  horarios: {
    lunes:      {abierto: true,  apertura: '9:00', cierre:'19:00'},
    martes:     {abierto: true,  apertura: '9:00', cierre:'19:00'},
    miercoles:  {abierto: true,  apertura: '9:00', cierre:'19:00'},
    jueves:     {abierto: true,  apertura: '9:00', cierre:'19:00'},
    viernes:    {abierto: true,  apertura: '9:00', cierre:'19:00'},
    sabado:     {abierto: false,   apertura: '', cierre:''},
    domingo:    {abierto: false,   apertura: '', cierre:''}
  },
  direccion: {
    calle: 'seminario',
    numero: '140',
    comuna: 'santiago',
    ciudad: 'santiago',
    pais: 'chile',
    geo:{
      lat:59.819123,
      lng:30.507123
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
