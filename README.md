# sharey.js

sharey is a powerful addon with a size of less than **2 KB** that is designed to help you upload files to third parties with ease.

![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge/rank?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://img.shields.io/npm/dt/sharey?label=Downloads)

### key keatures
- handle file uploads
- generate unique IDs for each upload
- get the upload date for each upload

### setup w/ cdn
```HTML
<script src="https://cdn.jsdelivr.net/npm/sharey@1.1.2"></script>
```

### local setup
```HTML
<script src="path/to/sharey.min.js"></script>
```

### usage
```JavaScript
// get value of file input
const file = document.querySelector('.fileInput').files[0]

// upload file to azury
sharey.azury(file, (res) => { // replace 'azury' with your desired service
  console.log(res)
})
```

please refer to [this](https://github.com/unrealazury/sharey/tree/main/example) for a full example.

### sample response
```JavaScript
{
  name: "file.png",
  readableSize: "346.71 KB",
  size: 346711,
  token: "DfBQ1FytcPZMz06c4mvgRE25Lg_wtsCD",
  type: "image/png",
  uploadedAt: 1623503959635,
  url: "https://azury.gg/a/654743ef4111e60a0c8667f5"
}
```

### providers
- [azury](https://azury.gg)
- [starfiles](https://starfiles.co)
- [gofile](https://gofile.io)
- [coffee](https://file.coffee)
