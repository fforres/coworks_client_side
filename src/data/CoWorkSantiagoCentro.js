export default {
  nombre: 'Co-Work - Santiago Centro',
  url: 'http://www.coworklatam.com/',
  telefono:'+56985135860',
  descripcion: {
    larga:'En Co-Work creemos que la colaboración es la base del éxito de los ecosistemas de emprendimiento. Buscamos proyectos y personas de alto potencial abiertos a colaborar.',
    corta:'Acelera tu negocio trabajando en un espacio inspirador en una comunidad activa y colaborativa.'
  },
  precios: {
    moneda:'CLP',
    promedio: 200000,
    equipos: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      '5+': 0
    }
  },
  horarios: {
    lunes:      {abierto: true,  apertura: '0:00', cierre:'23:59'},
    martes:     {abierto: true,  apertura: '0:00', cierre:'23:59'},
    miercoles:  {abierto: true,  apertura: '0:00', cierre:'23:59'},
    jueves:     {abierto: true,  apertura: '0:00', cierre:'23:59'},
    viernes:    {abierto: true,  apertura: '0:00', cierre:'23:59'},
    sabado:     {abierto: true,   apertura: '0:00', cierre:'23:59'},
    domingo:    {abierto: true,   apertura: '0:00', cierre:'23:59'}
  },
  direccion: {
    calle: 'huérfanos',
    numero: '863',
    comuna: 'santiago',
    ciudad: 'santiago',
    pais: 'chile',
    geo:{
      lat:59.949123,
      lng:30.007123
    }
  },
  servicios: {
    'espacios_publicos': true,
    'mentorias':true,
    '24_7':true,
    'cafeteria': true,
    'wifi':true,
    'salas_de_reuniones':true
  }
};
