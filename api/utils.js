module.exports.generateUUID = () => {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

const pl2 = n => n >= 10 ? n : `0${n}`;

module.exports.normalizedate = function normalizeDate(d) {
  console.log(d);
  if (!d || !d.getFullYear) return 'Not a Date';
  return [
    {f: 'getFullYear', 's': '-'},
    {f: 'getMonth', 's': '-', p: 1},
    {f: 'getDate', s: ' '},
    {f: 'getHours', s: ':'},
    {f: 'getMinutes', s:':'},
    {f: 'getSeconds', s: ''}]
    .reduce(
      function(acc, op) { return acc + pl2(d[op.f]() + (op.p || 0)) + op.s; },
      ''
    );
};
