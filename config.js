const Server = "https://192.168.23.4/"
const Shareroot = "share/" 
const Openlist = [
	{reg:/\.(jpg|jpeg|png|gif|bmp)$/i,open:"apps/fullimg.html?"},
	{reg:/\.(mov|mp4|m4v|webm)$/i,open:"apps/video.html?"},
	{reg:/\.pdf$/i,open:"apps/pdf/?"},
	{reg:/\.(glb|vrm)$/i,open:"https://wakufactory.jp/wxr/tools/glbview.html?"},
	{reg:/\.ply$/,open:"https://wakufactory.jp/wxr/splats/gsaf.html?"}
]