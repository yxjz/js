var box = document.getElementById('box');
var arrData = [
    {
        kind:'暖色调',
        imgs:['images/img1.gif','images/img2.gif','images/img3.gif','images/img4.gif'],
        dec:['街边夕阳','街边夕阳','街边夕阳','街边夕阳']
    },
    {
        kind:'金色夕阳',
        imgs:['images/img5.gif','images/img6.gif'],
        dec:['街边夕阳','街边夕阳']
    },
    {
        kind:'灰色格调',
        imgs:['images/img7.gif','images/img8.gif','images/img9.gif','images/img10.gif'],
        dec:['街边夕阳','街边夕阳','街边夕阳','街边夕阳']
    },
    {
        kind:'baby',
        imgs:['images/img11.gif','images/img12.gif'],
        dec:['街边夕阳','街边夕阳']
    }
 ];
var str = '';

str += '<ul>';
for(var i=0;i<arrData.length;i++){
    str += '<li>'+arrData[i].kind+'</li>';
}
str += '</ul>';
for(var i=0;i<arrData.length;i++){
    str += '<div><img src=""><ul>';
    for(var j=0;j<arrData[i].dec.length;j++){
        str += '<li>街边夕阳</li>';
    }
    str += '</ul></div>';
}
box.innerHTML = str;

var uls = box.getElementsByTagName('ul')[0];
var liss = uls.getElementsByTagName('li');
var divs = box.getElementsByTagName('div');
var num = 0;

//初始化：
divs[0].style.display = 'block';
liss[0].className = 'active';


//左边的li点击：
for(var i=0;i<liss.length;i++){
    liss[i].index = i;
    liss[i].onclick = function () {
        for(var i=0;i<liss.length;i++){
            liss[i].className = '';
            divs[i].style.display = 'none';
        }
        this.className = 'active';
        divs[this.index].style.display = 'block';
        num = this.index;
    }
}

//下面的li点击：
for(var i=0;i<divs.length;i++){
    fn(i);
}
function fn(n) {
    var imgs = divs[n].getElementsByTagName('img')[0];
    var uls = divs[n].getElementsByTagName('ul')[0];
    var lis = uls.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
        lis[i].style.width = 700/lis.length + 'px';
    }
    lis[0].className = 'active';
    imgs.src = arrData[n].imgs[0];
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            for(var i=0;i<lis.length;i++){
                lis[i].className = '';
            }
            this.className = 'active';
            imgs.src = arrData[num].imgs[this.index];
        }
    }
}
