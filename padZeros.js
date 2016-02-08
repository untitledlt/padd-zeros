String.prototype.padZeros = function ( length ) {
  length = length || 5;
  var s = "000000000000000" + this;
  return s.substr(s.length-length);
};

Number.prototype.padZeros = function ( lenght ) {
  return this.toString().padZeros(length);
}
