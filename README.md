# Sharey.js

Sharey is a powerful addon with a size of less than **1.5 KB** that is designed to help you upload files to third parties with ease.

![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge/rank?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://img.shields.io/npm/dt/sharey?label=Downloads)

### Key Features
- handle file uploads
- generate unique IDs for each upload
- get upload date for each upload

### Setup w/ CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/sharey@1.1.0"></script>
```

### Local Setup
```HTML
<script src="path/to/sharey.min.js"></script>
```

### Usage
```JavaScript
// get value of file input
const file = document.querySelector('.fileInput').files[0]

// upload file to azury
sharey.azury(file, (res) => { // replace 'azury' with your desired service
  console.log(res)
})
```

### Sample Response
```JavaScript
{
  name: "file.png",
  readableSize: "346.71 KB",
  size: 346711,
  token: "DfBQ1FytcPZMz06c4mvgRE25Lg_wtsCD",
  type: "image/png",
  uploadedAt: 1623503959635,
  url: "https://azury.gg/a/file.png"
}
```

### Providers
- [azury](https://azury.gg)
- [starfiles](https://starfiles.co)
- [gofile](https://gofile.io)
- [coffee](https://file.coffee)
