# home contents server for standalone HMD 

## setup

install node http-server 

https://www.npmjs.com/package/http-server

for Mac 
```
> brew install http-server
```

create certification 

```
> openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout local.key -out local.crt -subj "/CN=*.local"
```

## configuration

config.js

```javascript
const Server = "https://192.168.23.4/"
const Shareroot = "share/" 
const Openlist = [
	{reg:/\.(jpg|jpeg|png|gif)$/i,open:"apps/fullimg.html?"},
	{reg:/\.(mov|mp4|m4v)$/i,open:"apps/video.html?"},
	{reg:/\.(glb|vrm)$/i,open:"https://wakufactory.jp/wxr/tools/glbview.html?"},
	{reg:/\.ply$/,open:"https://wakufactory.jp/wxr/splats/gsaf.html?"}
]
```

 - set local ip address to Server
 - place share folders under Shareroot folder
 
 
