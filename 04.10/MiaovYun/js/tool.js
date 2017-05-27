//根据hash获取页面要渲染的数据
function getData(data){
	var hash = location.hash;
	var path = hash?hash.substring(7).split('/'):[];
	console.log(path)
	if(path.length==0){
		//第一次
		var arr = data;
	}else{
		//进入子级
		var arr = fn(data,path);
	}
	function fn(data,path){
		var arr1 = [];
		fn1(data,path);
		function fn1(data,path){
			if(path.length==0){
				arr1 = data;
				return;
			}
			data.forEach(function(a){
				if(a.name == path[0]){
					path.shift();
					fn1(a.child,path)
				}
			})
		}
		return arr1;
	}
	return arr;
}
//清除内容区域，渲染全部文件夹
function show(data){
	content.innerHTML = '';
	data.forEach(function(a){
		createBox(a);
	})
}
//根据一条数据渲染一个文件夹
function createBox(data){
	var box = document.createElement('div');
	var div = document.createElement('div');
	var p = document.createElement('p');
	var inp = document.createElement('input');
	p.innerHTML = data.name;
	inp.type = 'checkbox';
	box.className = 'box';
	box.data = data;
	box.check = false;
	box.onmouseenter = function(){
		if(!this.check){
			this.classList.add('active');
		}
	}
	box.onmouseleave = function(){
		if(!this.check){
			this.classList.remove('active');
		}
	}
	inp.onclick = function(){
		if(this.checked){
			box.check = true;
		}else{
			box.check = false;
		}
	}
	box.appendChild(div);
	box.appendChild(p);
	box.appendChild(inp);
	content.appendChild(box);
}
