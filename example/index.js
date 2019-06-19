/* alanode example/ */
import vscodeJsdoc_2 from '../src'

(async () => {
  const res = await vscodeJsdoc_2({
    text: 'example',
  })
  console.log(res)
})()