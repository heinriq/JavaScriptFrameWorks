const chai = require('chai')

function soma(x, y){
    return x + y
}

describe('# sum.js', function(){
    it('3+4 = 7', function(){
        chai.expect(soma(3,4)).to.equal(7)
    })
})

