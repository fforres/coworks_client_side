import CentroCorfo from './CentroCorfo';
import CoMunity from './CoMunity';
import Conectas from './Conectas';
const arrList = [
  CentroCorfo,
  CoMunity,
  Conectas
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
