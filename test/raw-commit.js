var git = require( 'nodegit2' ).git2,
    rimraf = require( '../vendor/rimraf');

// Helper functions
var helper = {
  // Test if obj is a true function
  testFunction: function( test, obj, label ) {
    // The object reports itself as a function
    test( typeof obj, 'function', label +' reports as a function.' );
    // This ensures the repo is actually a derivative of the Function [[Class]]
    test( toString.call( obj ), '[object Function]', label +' [[Class]] is of type function.' );
  },
  // Test code and handle exception thrown 
  testException: function( test, fun, label ) {
    try {
      fun();
      test( false, label );
    }
    catch (ex) {
      test( true, label );
    }
  }
};

// Oid
exports.constructor = function( test ){
  test.expect( 3 );

  // Test for function
  helper.testFunction( test.equals, git.Commit, 'Commit' );
  
  // Ensure we get an instance of Oid
  test.ok( new git.Commit() instanceof git.Commit, 'Invocation returns an instance of Commit' );

  test.done();
};

// Oid::Mkstr
exports.lookup = function( test ) {
  var testCommit = new git.Commit();

  test.expect( 2 );

  // Test for function
  helper.testFunction( test.equals, testCommit.lookup, 'Commit::Lookup' );

  // Test path argument existence
//  helper.testException( test.ok, function() {
//    testOid.mkstr();
//  }, 'Throw an exception if no hex String' );
// 
//  // Test that both arguments result correctly
//  helper.testException( test.ifError, function() {
//    testOid.mkstr( "somestr" );
//  }, 'No exception is thrown with proper arguments' );
//
//  // Test invalid hex id string
//  test.equals( -2, testOid.mkstr( '1392DLFJIOS' ), 'Invalid hex id String' );
//
//  // Test valid hex id string
//  test.equals( 0, testOid.mkstr( '1810DFF58D8A660512D4832E740F692884338CCD' ), 'Valid hex id String' );

  test.done();
};