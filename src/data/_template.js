export default {
  _id:0,
  nombre: '',
  url: '',
  descripcion: {
    larga:'',
    corta:''
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
    lunes:      {abierto: false,  apertura: '', cierre:''},
    martes:     {abierto: false,  apertura: '', cierre:''},
    miercoles:  {abierto: false,  apertura: '', cierre:''},
    jueves:     {abierto: false,  apertura: '', cierre:''},
    viernes:    {abierto: false,  apertura: '', cierre:''},
    sabado:     {abierto: false,   apertura: '', cierre:''},
    domingo:    {abierto: false,   apertura: '', cierre:''}
  },
  direccion: {
    calle: '',
    numero: '',
    comuna: '',
    ciudad: '',
    pais: '',
    geo:{
      lat:0,
      lng:0
    }
  },
  servicios: {
    'espacios_publicos': false,
    'mentorias':false,
    '24_7':false,
    'cafeteria': false,
    'wifi':false,
    'salas_de_reuniones':false
  }
};
