import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import vscodeJsdoc_2 from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await vscodeJsdoc_2({
      text: this.input,
    })
    return res
  },
  context: Context,
})