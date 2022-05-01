import encHex from 'crypto-js/enc-hex'
import secp256k1 from 'secp256k1'

const CryptoJS = require('crypto-js')

const genPrivateKey = (password, currentDate) => {
  const hash = CryptoJS.algo.SHA256.create()
  hash.update(password)
  hash.update(CryptoJS.SHA256(currentDate))
  // hash.update(process.env.REACT_APP_SECRET_KEY)
  return hash.finalize().toString(CryptoJS.enc.Hex)
}

const getPrivateKeyFromWallet = (privateKeyHex) => {
  return encHex.parse(privateKeyHex)
}

const convertStringHexToUint8Array = (privateKeyHex) => {
  const wordArray = encHex.parse(privateKeyHex)
  const length = wordArray?.sigBytes
  const words = wordArray?.words
  const result = new Uint8Array(length)
  let i = 0
  let j = 0
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (i == length) break
    var w = words[j++]
    result[i++] = (w & 0xff000000) >>> 24
    if (i == length) break
    result[i++] = (w & 0x00ff0000) >>> 16
    if (i == length) break
    result[i++] = (w & 0x0000ff00) >>> 8
    if (i == length) break
    result[i++] = w & 0x000000ff
  }

  return result
}

const getPublickKeyFromWallet = (privateKey) => {
  const uint8array = secp256k1.publicKeyCreate(
    convertStringHexToUint8Array(privateKey),
  )
  return Array.from(uint8array, (i) => i.toString(16).padStart(2, '0')).join('')
}

const createKeystoreFile = (password) => {
  const privateKey = genPrivateKey(password)
  const publicKey = getPublickKeyFromWallet(privateKey)
  const currentDate = new Date().toUTCString()
  const obj = {
    privatekey: privateKey,
    address: publicKey,
    currentdate: currentDate,
  }
  const blob = new Blob([JSON.stringify(obj)], {
    type: 'text/plain;charset=utf-8',
  })

  return { blob, fileName: currentDate + '.' + publicKey }
}

export {
  genPrivateKey,
  createKeystoreFile,
  getPublickKeyFromWallet,
  getPrivateKeyFromWallet,
}
