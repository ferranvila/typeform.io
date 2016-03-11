import assert from 'assert';
import typeformIoPoc from '../lib';

describe('typeform-io-poc', function () {
  it('test the test!', function (done) {
    typeformIoPoc.test(result => {
      assert(result, '');
      done();
    });
  });
});
