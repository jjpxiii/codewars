function SecretCodeDetector(sequence) {
  this.sequence = sequence
  this.cpt = 0
  this.isTrigged = false
}

SecretCodeDetector.prototype.processInput = function (input) {
  if (this.isTrigged) return true
  if (input == this.sequence[this.cpt]) {
    if (this.cpt == this.sequence.length - 1) {
      this.isTrigged = true
      return true
    }
    this.cpt = this.cpt + 1
  }
  else {
    if (input == this.sequence[this.cpt]) {
      this.cpt = this.cpt + 1
    }
    else
      this.cpt = 0
  }

  var konamiCode = '^^vv<><>BA';
  var konamiCodeDetector = new SecretCodeDetector(konamiCode);
  var inputs = '^^vv^vBBA>XABACRL^>^^vv<><>BAABB<>^^vv<><>BA';
  console.log(`code: ${konamiCode}`);
  console.log(`inputs: ${'^^vv^vBBA>XABACRL^><span style="color:red">^^vv<><>BA</span>ABB<>^^vv<><>BA'}`)
  console.log(`Konami code should be activated at the 29th input`);

  var results = [...inputs].map(input => konamiCodeDetector.processInput(input));
  // console.log(results.slice(0,27).every(a=>a===undefined))
  console.log(results.slice(28).every(a => a === true))