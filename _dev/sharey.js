function getReadableSize(size) {
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
  // upload handler
  async upload(config, callback) {
    if (config == null) return null

    // config
    let object = config.object ?? config
    ,mirror = config.mirror ?? false
    ,size = config.size ?? false
    ,host = config.host ?? 'fileCoffee'
    ,readableSize = config.readableSize ?? false
    ,token = config.token ?? false
    ,type = config.type ?? false
    ,uploadDate = config.date ?? false
    ,url = config.url ?? true

    // request parameters
    let endpoint = ''
    let field = ''

    // upload file
    switch(host) {
      case 'azury':
      endpoint = 'https://api.azury.gg/files/new'
      field = 'upload'
      break
      case 'fileCoffee':
      endpoint = 'https://file.coffee/api/file/upload'
      field = 'file'
      break
      default:
      return null
    }

    let reqData
    let reqDataMirror

    // upload file
    if (mirror == true) {
      const formData = new FormData()
      formData.append('upload', object)

      const formDataMirror = new FormData()
      formDataMirror.append('file', object)
    
      const req = await fetch('https://api.azury.gg/files/new', { method: 'POST', body: formData })
      const reqMirror = await fetch('https://file.coffee/api/file/upload', { method: 'POST', body: formDataMirror })

      reqData = await req.json()
      reqDataMirror = await reqMirror.json()
    } else {
      const formData = new FormData()
      formData.append(field, object)
    
      const req = await fetch(endpoint, { method: 'POST', body: formData })
      reqData = await req.json()
    }

    const data = {}

    if (size) data.size = object.size
    if (readableSize) data.readableSize = getReadableSize(reqData.size)
    if (token) {
      let generatedToken = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'
      const charactersLength = characters.length
      for (let i = 0; i < 32; i++) {
        code += characters.charAt(Math.floor(Math.random() * 
        charactersLength))
      }
      data.token = generatedToken
    }
    if (size) data.size = object.size
    if (type) data.type = object.type
    if (uploadDate) data.uploadDate = Date.now()
    if (url) {
      if (mirror == false) {
        data.url = reqData.url
      } else {
        data.url = [reqData.url, reqDataMirror.url]
      }
    }

    if (callback) callback(data)
  }
}

if (typeof exports === 'object' && typeof module != 'undefined') module.exports = sharey