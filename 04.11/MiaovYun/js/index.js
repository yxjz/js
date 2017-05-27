/*
 	1.编一个三级的数据
 	2.拿数据
 		a.第一次打开，只要拿到第一级的数据
 		b.进入到子级，要拿到子级的数据
 	3.根据数据，渲染页面
 	4.新建文件夹
 		a.在第一个位置出现空白文件夹，命名弹窗
 		b.弹窗输入框默认是新建文件夹
 		c.点击确定
 			空白文件夹的名称变成输入框内的文字
 			如果命名重复
 				如果名字不是新建文件夹系列名字，取消
 				如果名字是新建文件夹系列名字，加序号
 			思考问题：
 				1.怎么判断是新建文件夹系列名字
 				2.怎么确定能用的最小序号
 		d.点击取消
 			取消本次新建，空白文件夹消失
 	5.批量删除
 		删数据，删结构
 	6.重命名
 		只有一个被选中才能点
 		a.点的是哪个，数据对应
 		b.确定
 			1.重名，不让
 			2.不重名，修改数据，修改结构
 		c.取消
 			取消本次重命名
 	7.面包屑导航
 		生成面包屑导航，最后一个不可点
 	
 	
 	处理多个hash
 * #path=/周杰伦&view=grid&p=1&n=2
 * [[path,/周杰伦],[view,grid],[p,1],[n,2]]
 * var j={
 * 	path:周杰伦，
 *  view:grid,
 *  n:2
 * }
 * j.p
 * */
var btns = document.getElementsByTagName('input');
var content = document.getElementById('content');
var boxs = content.getElementsByClassName('box');
//当前页面的数据
var Data = getData(data);
var maxId = getMaxId(data);
//渲染
show(Data);
window.onhashchange = function(){
	//hash改变，重新拿数据，重新渲染
	Data = getData(data);
	show(Data);
}
//新建文件夹按钮
btns[0].onclick = function(){
	var val = prompt('请输入文件夹名称','新建文件夹');
	//点取消返回null，确定返回输入框文字
	if(val){
		/*
		 	点确定
		 		1.没重名的，直接生成
		 		2.有重名的
		 			a.新建系列
		 				处理序号
		 			b.非新建系列
		 				禁止新建
		 * */
//		findNewName(Data,val);
		if(checkName(Data,val)){
			//console.log('重名')
			//判断是否是新建系列
			//新建文件夹,新建文件夹(1)
			var name = Number(val.split('新建文件夹(').join('').split(')').join(''));
			if(val=='新建文件夹'||name){
				//新建系列
				//console.log('系列')
				//找到新建序号可用的
			createBox(newData(Data,findNewName(Data)),1);	
			}
		}else{
			//console.log('不重名')
			createBox(newData(Data,val),1);
			//console.log(data)
		}
	}
}
