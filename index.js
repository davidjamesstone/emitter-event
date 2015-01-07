module.exports = function EmitterEvent(name, target, value) {
  var e = {
    name: name,
    target: target
  };

  if (value) {
    e.value = value;
  }

  return e;
};