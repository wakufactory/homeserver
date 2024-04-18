export {getdir}

function getdir(path,filter=null) {
	return new Promise((resolve,reject)=>{
		fetch(path).then(resp=>{
			resp.text().then(data=>{
				let list = [] 
				function month(m) {
					let ret = null
					const en = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(m)
					if(en>=0) ret = en+1 
					if(m.match(/([0-9]*)月/)) ret = parseInt(RegExp.$1)+1 
					return ("0"+ret.toString()).substr(-2)
				}
				let flag = false 
				data.split("\n").forEach(l=>{
					const m = l.match(/<tr><td><i class="icon (.*)"><\/i><\/td><td class="perms"><code>(.*)<\/code><\/td><td class="last-modified">(.*)<\/td><td class="file-size"><code>(.*)<\/code><\/td><td class="display-name"><a href="(.*)">(.*)<\/a><\/td><\/tr>/)
					if(m) {
						flag = true 
						if(!m[6].match(/^\./)) {
						const doc = new DOMParser().parseFromString(m[6], 'text/html')
						const dt = m[3].match(/([0-9]*)-(.*)-([0-9]*) ([0-9]*):([0-9]*)/)
						const name = doc.documentElement.textContent
						if(filter && !name.match(filter)) return
						list.push({
							type:(m[1]=="icon-_blank")?"dir":"file",
							mode:m[2],
							date:`${dt[3]}-${month(dt[2])}-${dt[1]} ${dt[4]}:${dt[5]}`,
							size:m[4],
							path:m[5].substr(2) ,
							name:name})
						}
					}
				})
				if(flag) resolve(list)
				else reject("cannot get list") 
			})
		}).catch(err=>{
			reject(err) 
		})
	})
}