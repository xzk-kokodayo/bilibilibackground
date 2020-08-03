// ==UserScript==
// @name         bilibili界面背景更改完整版
// @namespace    https://github.com/wuxintlh/bilibilibackground
// @version      0.3.7.5
// @description  更改b站背景的懒人脚本，位置在页面左下角
// @author       桜wuxin
// @match        *://*.bilibili.com/*
// @match        https://message.bilibili.com/*
// @match        https://t.bilibili.com/*
// @match        https://manga.bilibili.com/*
// @match        https://live.bilibili.com/blackboard/*
// @match        https://www.bilibili.com/page-proxy/*
// @QQgroup      793513923
// @grant        none
// ==/UserScript==
set();
var bcurl = '';
var host = window.location.host;
var body = document.querySelector('body');
if (host != 'live.bilibili.com') {
    spandiv(body);
    spandivD(body);
} else {
    var main = document.querySelector('.live-room-app').querySelector('.z-app-content');
    if (main != undefined) {
        spandiv(main);
        spandivD(main);
    } else {
        spandiv(body);
        spandivD(body);
    }
};
window.addEventListener('scroll', function() {
    var span = document.querySelector('.SakuraSpans');
    var div = document.querySelector('.SakuraDivd');
    span.style.position = 'fixed';
    div.style.position = 'fixed';
})
var span = document.querySelector('.SakuraSpans');
//侧边栏弹出
span.addEventListener('mouseover', function() {
    animate(span, 0)
})
span.addEventListener('mouseout', function() {
    var div = document.querySelector('.SakuraDivd');
    if (div.style.display == 'block') {
        false
    } else {
        animate(span, -90)
    }
})
//弹出框
span.addEventListener('click', function() {
    var div = document.querySelector('.SakuraDivd');
    if (div.style.display == 'none' && this.style.left == '0px') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});
//更换背景
var button = document.querySelector('.SakuraButtonb')
button.addEventListener('click', function() {
    var input = document.querySelector('.SakuraInputi');
    bcurl = input.value;
    if (bcurl == '') {
        alert('你没有输入任何内容!');
    } else {
        var div = document.querySelector('.SakuraBackground');
        //在本地储存bcurl
        window.localStorage.setItem('bcurl', bcurl);
        setbc(bcurl)
    }
});
var input = document.querySelector('.SakuraInputi');
input.addEventListener('focus', function() {
    if (input.value == '') {
        input.placeholder = '';
    }
});
input.addEventListener('blur', function() {
    if (input.value == '') {
        input.placeholder = '请输入完整的背景url';
    }
});
//打开页面时设置背景
function set() {
    var body = document.querySelector('body');
    var div = document.createElement('div');
    body.appendChild(div);
    div.className = 'SakuraBackground';
    var ifbcurl = window.localStorage.getItem('bcurl')
    if (ifbcurl != '' && ifbcurl != null) {
        bcurl = window.localStorage.getItem('bcurl') //保存的背景
        setbc(bcurl)
    } else {
        bcurl = 'https://i0.hdslb.com/bfs/album/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png'; //默认背景
        setbc(bcurl)
    }
};

function setbc(bcurl) {
    var div = document.querySelector('.SakuraBackground')
    div.style.background = 'url("' + bcurl + '")'
    div.style.backfroundRepeat = 'no-repeat';
    div.style.position = 'fixed';
    div.style.backgroundPosition = 'center 0';
    div.style.backgroundSize = 'cover';
    div.style.zoom = '1';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.top = '0';
    div.style.left = '0';
    div.style.webkitBackgroundSize = 'cover';
    div.style.zIndex = '-1';
    div.className = 'SakuraBackground';
    div.style.opacity = '0.3';
}

function spandiv(target) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var input = document.createElement('input');
    var button = document.createElement('button');
    target.appendChild(span);
    span.innerHTML = '点击更换背景';
    span.className = 'SakuraSpans';
    span.style.width = '100px';
    span.style.height = '22px';
    span.style.position = 'absolute';
    span.style.top = '940px';
    span.style.left = '-90px';
    span.style.backgroundColor = 'rgba(0,255,255,.5)';
    span.style.userSelect = 'none';
    span.style.zIndex = '10';
    span.style.fontSize = '15px';
    target.appendChild(div);
    div.className = 'SakuraDivd';
    div.style.backgroundColor = 'rgba(255,0,255,.5)'
    div.style.width = '400px';
    div.style.height = '60px';
    div.style.position = 'absolute';
    div.style.top = '902px'
    div.style.left = '100px';
    div.style.display = 'none';
    div.style.zIndex = '10';
    span.style.position = 'fixed';
    div.style.postion = 'fixed';
    div.appendChild(input);
    div.appendChild(button);
    input.type = 'text';
    input.placeholder = '请输入完整的背景url';
    input.style.width = '400px';
    input.className = 'SakuraInputi';
    button.innerHTML = '点击更换背景';
    button.style.position = 'absolute';
    button.style.top = '30px';
    button.style.left = '150px';
    button.className = 'SakuraButtonb';
};

function spandivD(target) {
    var div = document.createElement('div');
    var body = document.querySelector('body');
    var span = document.createElement('span');
    var img = document.createElement('img');
    target.appendChild(span);
    span.innerHTML = '点击查看默认背景';
    span.className = 'SakuraDSpans';
    span.style.width = '140px';
    span.style.height = '22px';
    span.style.position = 'absolute';
    span.style.top = '900px';
    span.style.left = '-120px';
    span.style.backgroundColor = 'rgba(0,255,255,.5)';
    span.style.userSelect = 'none';
    span.style.zIndex = '10';
    span.style.fontSize = '15px';
    target.appendChild(div);
    div.className = 'SakuraDDivd';
    div.style.backgroundColor = 'rgba(255,255,255,.4)'
    div.style.width = '300px';
    div.style.height = '200px';
    div.style.position = 'absolute';
    div.style.top = '723px'
    div.style.left = '140px';
    div.style.display = 'none';
    div.style.zIndex = '10';
    span.style.position = 'fixed';
    div.style.position = 'fixed';
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/album/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png';
    img.style.width = '80px';
    img.style.height = '80px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/vc/4f28d6cb9e7dec4122412efed54b8a7fe6f672c1.png';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/album/7f8a0fb6899359023cb5f203dc7e67ae2e0c9f75.jpg@2000w_1e.webp';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/album/658ab52e2d631f9d974112e2d5b4cab476e3f61d.jpg';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginTop = '40px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/album/9d90714d6b5d684a5f36a31f2cfb99b89ebfc729.png';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img.style.marginTop = '40px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/drawyoo/5174c57714f259cc2db4b677928204321a161c3c.jpg';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px'
    img.style.marginTop = '40px';
}
//提供默认背景更改的弹出框等
var spanD = document.querySelector('.SakuraDSpans');
window.addEventListener('scroll', function() {
    var spanD = document.querySelector('.SakuraDSpans');
    var divD = document.querySelector('.SakuraDDivd');
    spanD.style.position = 'fixed';
    divD.style.position = 'fixed';
})
spanD = document.querySelector('.SakuraDSpans');
//侧边栏弹出
spanD.addEventListener('mouseover', function() {
    animate(spanD, 0)
})
spanD.addEventListener('mouseout', function() {
    var divD = document.querySelector('.SakuraDDivd');
    if (divD.style.display == 'block') {
        false
    } else {
        animate(spanD, -120)
    }
})
//弹出框
spanD.addEventListener('click', function() {
    var divD = document.querySelector('.SakuraDDivd');
    if (divD.style.display == 'none' && this.style.left == '0px') {
        divD.style.display = 'block';
    } else {
        divD.style.display = 'none';
    }
});
var divD = document.querySelector('.SakuraDDivd');
var img = divD.querySelectorAll('img');
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        var bcurl = this.src;
        setbc(bcurl);
        window.localStorage.setItem('bcurl', bcurl);
    })
};
//将视频中出现的关注按钮进行隐藏并把评论栏透明化
setTimeout(function() {
    if (document.querySelector('.bilibili-player-popup-padding') && document.querySelector('.bilibili-player-popup-area')) {
        var father = document.querySelector('.bilibili-player-popup-padding');
        var son = document.querySelector('.bilibili-player-popup-area');
        father.removeChild(son);
    }
}, 2000) //设置默认2s延迟
setTimeout(function() {
    if (document.querySelector('.bb-comment')) {
        var div = document.querySelector('.bb-comment');
        div.style.background = 'rgba(255,192,203,0)';
    }
}, 5000) //设置默认5s延迟
//将专栏透明化
if (document.querySelector('.page-container')) {
    var page = document.querySelector('.page-container');
    page.style.background = 'rgba(255,192,203,.4)';
    setTimeout(function() {
        var cont = document.querySelector('.bb-comment');
        cont.style.background = 'rgba(255,255,255,0)';
    }, 5000)
}
//直播间动态和页脚透明化
if (host == 'live.bilibili.com') {
    setTimeout(function() {
        if (document.querySelector('.feed-card') != undefined) {
            var div = document.querySelector('.feed-card').querySelector('.content').querySelectorAll('.card');
            for (var i = 0; i < div.length; i++) {
                div[i].style.background = 'rgba(255,192,203,0)'
            }
        }
        if (div = document.querySelector('#link-footer-vm')) { //将某些页面最低层变透明
            div = document.querySelector('#link-footer-vm');
            div.style.background = 'rgba(255,192,203,.1)';
            var footer = document.querySelector('.link-footer');
            footer.style.backgroundColor = 'rgba(255,192,203,.1)';
        }
    }, 5000)
}
//将视频上方的导航栏透明化
setTimeout(function() {
    if (document.querySelector('.mini-type')) {
        var div = document.querySelector('.mini-type');
        div.style.background = 'rgba(255,192,203, .1)';
        div = document.querySelectorAll('div')
        for (var i = 0; i < div.length; i++) {
            if (div[i].className == 'van-popover van-popper van-popper-vip' || div[i].className == 'van-popover van-popper van-popper-favorite' || div[i].className == 'van-popover van-popper van-popper-history' ||
                div[i].className == 'van-popover van-popper van-popper-upload' || div[i].className == 'van-popover van-popper van-popper-nav van-popper-avatar') {
                div[i].style.backgroundColor = 'rgba(255,192,203, .8)';
            }
        }
    }
}, 3000);

function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //(目标位置-当前位置)/10 = 步长
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if (callback) {
                animate(obj, target, callback);
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 10)
};
//隐藏哔哩哔哩主页横幅和直播间背景
(function() {
    'use strict';
    document.getElementsByClassName("bili-banner")[0].style.visibility="hidden";
    document.getElementsByClassName("bili-banner")[0].style.height="56px";
    document.getElementsByClassName("bili-banner")[0].classList.remove("bili-banner");
    document.getElementsByClassName("mini-header m-header")[0].style.background="#fb7299";
    document.getElementsByClassName("mini-upload van-popover__reference")[0].style.background="#21212159";
    document.getElementById("room-background-vm").style.display="none";
})();
