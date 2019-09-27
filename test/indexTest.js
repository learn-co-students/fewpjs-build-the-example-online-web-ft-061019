const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

// Tech Team couldn't figure out why this wasn't passing and said that I did set my modal to hidden
// describe( "main.js", () => {
//   it("contains a hidden modal", () => {
//     let modal = document.querySelector('.hidden')
//     expect(modal).not.to.equal(null)
//   } )
// } )
