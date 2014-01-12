var BtcOpcode = require('../')

require('terst')

describe('BtcOpcode', function() {
  it('-ctor should create new Opcode obj', function() {
    var oc = new BtcOpcode(166);
    EQ (oc.code, 166);
  })

  describe('- toString()', function() {
    it('should return the string corresponding to the code', function() {
      var oc = new BtcOpcode(166);
      EQ (oc.toString(), 'OP_RIPEMD160')
    })
  })

  describe('+ map(string)', function() {
    it('should return the code corresponding to the string', function() {
      EQ (BtcOpcode.map['OP_RIPEMD160'], 166)
    })
  })

  describe('+ reverseMap(code)', function() {
    it('should return the string corresponding to the code', function() {
      EQ (BtcOpcode.reverseMap[166], 'OP_RIPEMD160')
    })
  })
})


