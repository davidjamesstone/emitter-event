module.exports = function EmitterEvent(name, target, detail) {
  this.name = name;
  this.target = target;
  
  if (detail) {
    this.detail = detail;
  }
};