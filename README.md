# Sharey.js

Sharey is a powerful addon with a size of less than **1.5 KB** that is designed to help you upload files to third parties with ease.

![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge/rank?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://data.jsdelivr.com/v1/package/npm/sharey/badge?style=rounded) ![https://www.jsdelivr.com/package/npm/sharey](https://img.shields.io/npm/dt/sharey?label=Downloads)

> I'm only fixing bugs at the moment and do not add any new features, because I've found no other accountless file-sharing services with a public API.

### Setup w/ CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/sharey@1"></script>
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

### Providers
- [azury](https://azury.gg)
- [starfiles](https://starfiles.co)
- [gofile](https://gofile.io)
