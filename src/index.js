import { debuglog } from 'util'

const LOG = debuglog('@idio/vscode-jsdoc-2')

/**
 * The jsdoc test 2.
 * @param {_@idio/vscode-jsdoc-2.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
export default async function vscodeJsdoc_2(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@idio/vscode-jsdoc-2 called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_@idio/vscode-jsdoc-2.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _@idio/vscode-jsdoc-2.Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
