//根据hash获取页面要渲染的数据
function getData(data){
	var hash = location.hash;
	var path = hash?hash.substring(7).split('/'):[];
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
//根据一条数据渲染一个文件夹,type不写就是正常渲染，写1，非false就是新建往第一位渲染
function createBox(data,type){
	var box = document.createElement('div');
	var div = document.createElement('div');
	var p = document.createElement('p');
	var inp = document.createElement('input');
	inp.type = 'checkbox';
	box.className = 'box';
	box.check = false;
	box.data = data;
	p.innerHTML = data.name;
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
	if(type){
		content.insertBefore(box,content.firstElementChild);	
	}else{
		content.appendChild(box);	
	}	
}
//判断当前同级数据是否重名
function checkName(data,name){
	return data.some(function(a){
		return a.name==name;
	})
}
//生成一条新数据
function newData(data,Name){
	var j = {
		id:++maxId,
		name:Name,
		child:[]
	};
	data.unshift(j);
	return j;
}
//找到id最大值
function getMaxId(data){
	var max = 0;
	fn(data);
	function fn(data){
		data.forEach(function(a){
			if(a.id>max){
				max = a.id;
			}
			if(a.child.length){
				fn(a.child);
			}
		})		
	}
	return max;	
}
var arr123 = [{name:'新建文件夹'},{name:'新建文件夹(1)'},{name:'新建文件夹(3)'}]
//找到可用的新建系列名字
function findNewName(data){
	//1.找
		var arr = [];
		data.forEach(function(a){
			if(a.name=='新建文件夹'){
				arr[0] = true;
			}
			var name = Number(a.name.split('新建文件夹(').join('').split(')').join(''));
			if(name){
				arr[name] = true;
			}	
		})
		var n = 0;
		console.log(arr)
	//2.返回可用
		if(arr[0]==undefined){
			return '新建文件夹';
		}
		if(arr.every(function(a){
			return a!=undefined;
		})){
			n = arr.length;
		}
		for(var i=0;i<arr.length;i++){
		   if(arr[i]==undefined){
		   	 n = i;
		   	 break;
		   }
		}
		return '新建文件夹('+n+')'; 
}

//console.log(findNewName(arr123))