import assert from 'assert';
import typeformIo from '../lib';

describe('typeform-io', function () {
  it('test the test!', function (done) {
    typeformIo.test(result => {
      assert(result, '');
      done();
    });
  });
});
