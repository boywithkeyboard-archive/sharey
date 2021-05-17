// handle file upload
function uploadHandler(endpoint, param, file, callback) {
  const formData = new FormData()
  formData.append(param, file)

  fetch(endpoint, { method: 'POST', body: formData })
    .then((response) => {
      response.json()
        .then((data) => { 
          callback(data) 
        })
    })
}

// get readable size
function readableSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const sharey = {
  // azury.gg
  azury(file, callback) {
    uploadHandler('https://azury.gg/api/accountless/files/new', 'upload', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.id,
        'size': file.size,
        'readableSize': readableSize(file.size),
        'type': file.type,
        'url': res.url,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  },

  // starfiles.co
  starfiles(file, callback) {
    uploadHandler('https://api.starfiles.co/upload/upload_file', 'upload', file, (res) => {
      const data = {
        'name': file.name,
        'token': res.file,
        'size': file.size,
        'readableSize': readableSize(file.size),
        'type': file.type,
        'url': `https://starfiles.co/file/${res.file}`,
        'uploadedAt': Date.now()
      }

      if (callback) callback(data)
    })
  },

  // gofile.io
  async gofile(file, callback) {
    fetch('https://api.gofile.io/getServer', { method: 'GET' })
    .then((response) => {
      response.json()
        .then((service) => { 
          uploadHandler(`https://${service.data.server}.gofile.io/uploadFile`, 'file', file, (res) => {
            const data = {
              'name': file.name,
              'token': res.data.code,
              'size': file.size,
              'readableSize': readableSize(file.size),
              'type': file.type,
              'url': res.data.downloadPage,
              'uploadedAt': Date.now()
            }
      
            if (callback) callback(data)
          })
        })
    })
  }
}