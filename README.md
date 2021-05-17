# Sharey.js

Sharey is a powerful addon with a size of less than **1.5 KB** that is designed to help you upload files to third parties with ease.

### Setup w/ CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/sharey@1/sharey.min.js"></script>
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

### Services
- [Azury](https://azury.gg)
- [Starfiles](https://starfiles.co)
- [Gofile](https://gofile.io)
