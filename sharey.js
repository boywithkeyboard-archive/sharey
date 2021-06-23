/*!
 *  Sharey 1.1.2 by @unrealazury - https://azury.dev - @azuryofficial
 *  License - Apache 2.0
 */

/**************** HANDLE UPLOAD ****************/

async function shareyHandler(endpoint, param, file, callback) {
  const formData = new FormData()
  formData.append(param, file)

  let code = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'
  const charactersLength = characters.length
  for ( var i = 0; i < 32; i++ ) {
    code += characters.charAt(Math.floor(Math.random() * 
    charactersLength))
  }

  const response = await fetch(endpoint, { method: 'POST', body: formData })
  const data = response.json()
  data.shareyKey = code
  callback(data)
}

/**************** GET READABLE SIZE ****************/

function shareySize(size) {
  size = size.toString()
  const length = size.length
  const round = (number, decimalPlaces) => {
    number = Math.round(number + 'e' +decimalPlaces)
    return Number(number + 'e' + -decimalPlaces)
  }

  if (length < 4) return `${size} B`
  if (length >= 4 && length < 7) return `${round(size / 1000, 2)} KB`
  if (length >= 7 && length < 10) return `${round(size / 1000000, 2)} MB`
  if (length >= 10 && length < 13) return `${round(size / 1000000000, 2)} GB`
  if (length >= 13) return `${round(size / 1000000000000, 2)} TB`
}

const sharey = {

  /**************** AZURY.GG ****************/

  azury(file, callback) {
    shareyHandler('https://azury.gg/api/accountless/files/new', 'upload', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.shareyKey,
        'size': file.size,
        'readableSize': shareySize(file.size),
        'type': file.type,
        'url': res.url,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  },

  /**************** FILE.COFFEE ****************/

  coffee(file, callback) {
    shareyHandler('https://file.coffee/api/file/upload', 'file', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.shareyKey,
        'size': file.size,
        'readableSize': shareySize(file.size),
        'type': file.type,
        'url': res.url,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  },

  /**************** GOFILE.IO ****************/

  async gofile(file, callback) {
    const response = await fetch('https://api.gofile.io/getServer', { method: 'GET' })
    const service = response.json()

    shareyHandler(`https://${service.data.server}.gofile.io/uploadFile`, 'file', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.shareyKey,
        'size': file.size,
        'readableSize': shareySize(file.size),
        'type': file.type,
        'url': res.data.downloadPage,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  },

  /**************** STARFILES.CO ****************/

  starfiles(file, callback) {
    shareyHandler('https://api.starfiles.co/upload/upload_file', 'upload', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.shareyKey,
        'size': file.size,
        'readableSize': shareySize(file.size),
        'type': file.type,
        'url': `https://starfiles.co/file/${res.file}`,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  }

}