export default {
  _id:1,
  nombre: 'Co-Munity',
  url: 'http://www.co-munity.co',
  telefono:'',
  descripcion: {
    larga:'Somos una comunidad de emprendedores trabajando en productos y tecnologías que tendrán un impacto positivo en el mundo.Nuestro iluminado y amplio espacio de coworking permite el libre flujo de las ideas y colaboración. La ambientación está orientada a motivar la discusión y el desarrollo de ideas y negocios.',
    corta:'Somos una incubadora de Startups, una aceleradora de emprendedores, un centro de experimentación y un espacio de educación y eventos de emprendimiento e innovación.'
  },
  precios: {
    moneda:'CLP',
    promedio: 100000,
    equipos: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      '5+': 0
    }
  },
  horarios: {
    lunes:      {abierto: true,   apertura: '9:00', cierre:'19:00'},
    martes:     {abierto: true,   apertura: '9:00', cierre:'19:00'},
    miercoles:  {abierto: true,   apertura: '9:00', cierre:'19:00'},
    jueves:     {abierto: true,   apertura: '9:00', cierre:'19:00'},
    viernes:    {abierto: true,   apertura: '9:00', cierre:'19:00'},
    sabado:     {abierto: false,  apertura: '', cierre:''},
    domingo:    {abierto: false,  apertura: '', cierre:''}
  },
  direccion: {
    calle: 'coimbra',
    numero: '149',
    comuna: 'las condes',
    ciudad: 'santiago',
    pais: 'chile',
    geo: {
      lat:59.955413,
      lng:30.337844
    }
  },
  servicios: {
    'espacios_publicos': true,
    'mentorias':true,
    '24/7':true,
    'cafeteria': false,
    'wifi':true,
    'salas_de_reuniones':false
  }
};
