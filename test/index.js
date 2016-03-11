import assert from 'assert';
import typeformIo from '../lib';

describe('typeform-io', () => {
  this.timeout(5000);
  it('test the test!', done => {
    typeformIo.test(result => {
      assert(result, '');
      done();
    });
  });
});
