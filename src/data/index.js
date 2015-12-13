import CentroCorfo from './CentroCorfo';
import CoMunity from './CoMunity';
import Conectas from './Conectas';

const list = () => {
  const l = [
    CentroCorfo,
    CoMunity,
    Conectas
  ];

  return l.map((el, i, as)=>{
    return el;
  });
};

module.exports = {
  list, CentroCorfo, CoMunity, Conectas
};
