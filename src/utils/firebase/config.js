import FirebaseMaker  from 'firebase';
const firebaseURL = 'https://coworkscl.firebaseio.com';
const Ref = new FirebaseMaker(firebaseURL);
let Dispatch = null;

exports.setDispatcher = ({dispatch}) => {
  Dispatch = dispatch;
  debugger;
};
exports._Ref = Ref;
exports._Dispatch = Dispatch;
