Date.prototype.normalize = function () {
  function pl2(n) { return n >= 10 ? n : ('0'+n); };
  var self = this;
  return [
    {f: 'getFullYear', 's': '-'},
    {f: 'getMonth', 's': '-', p: 1},
    {f: 'getDate', s: ' '},
    {f: 'getHours', s: ':'},
    {f: 'getMinutes', s:':'},
    {f: 'getSeconds', s: ''}]
    .reduce(
      function(acc, op) { return acc + pl2(self[op.f]() + (op.p || 0)) + op.s; },
      ''
    );
};
