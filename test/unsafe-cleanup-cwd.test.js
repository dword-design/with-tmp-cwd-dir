const withLocalTmpDir = require('with-local-tmp-dir')
const { basename, dirname, join } = require('path')
const { exists, outputFile, ensureDir, remove } = require('fs-extra')
const expect = require('expect')

module.exports = async () => {
  let path
  await expect(withLocalTmpDir(async () => {
    await outputFile('test.txt', '')
    path = process.cwd()
  }, { unsafeCleanup: false })).rejects.toThrow()
  expect(await exists(path)).toBeTruthy()
  await remove(path)
}
