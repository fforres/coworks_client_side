import CentroCorfo from './CentroCorfo';
import CoMunity from './CoMunity';
import Conectas from './Conectas';
import CoWorkElGolf from './CoWorkElGolf';
import CoWorkEncomenderos from './CoWorkEncomenderos';
import CoWorkSanJoaquin from './CoWorkSanJoaquin';
import CoWorkSanSebastian from './CoWorkSanSebastian';
import CoWorkSantiagoCentro from './CoWorkSantiagoCentro';
import LaOfi from './LaOfi';

const arrList = [
  CentroCorfo,
  CoMunity,
  Conectas,
  CoWorkElGolf,
  CoWorkEncomenderos,
  CoWorkSanJoaquin,
  CoWorkSanSebastian,
  CoWorkSantiagoCentro,
  LaOfi
];
const list = () => {
  return arrList;
};

const searchById = (id) => {
  arrList.forEach((el, i, as) => {
    if (el._id === id) {
      return el;
    }
  });
  return null;
};

module.exports = {
  list, CentroCorfo, CoMunity, Conectas
};
