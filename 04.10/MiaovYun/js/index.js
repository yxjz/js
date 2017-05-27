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
 		
 * 
 * */
var btns = document.getElementsByTagName('input');
var content = document.getElementById('content');
var boxs = content.getElementsByClassName('box');
//拿数据
var Data = getData(data);
//渲染
show(Data);
window.onhashchange = function(){
	//hash改变，重新拿数据，重新渲染
	Data = getData(data);
	show(Data);
}
