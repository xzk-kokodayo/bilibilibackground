// ==UserScript==
// @name         bilibili界面背景更改完整版
// @namespace    https://github.com/wuxintlh/
// @version      0.3.1
// @description  try to take over the world!
// @author       桜wuxin
// @match        *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

        var div = document.createElement('div');
        var body = document.querySelector('body');
        var span = document.createElement('span');
        var input = document.createElement('input');
        var button = document.createElement('button');
        var bcurl = '';
        body.appendChild(span);
        span.innerHTML = '点击更换背景';
        span.style.width = '100px';
        span.style.height = '22px';
        span.style.position = 'absolute';
        span.style.top = '940px';
        span.style.left = '0%';
        span.style.backgroundColor = 'rgba(0,255,255,.5)';
        span.style.userSelect = 'none';
        span.style.zIndex = '10';
        body.appendChild(div);
        div.style.backgroundColor = 'rgba(255,0,255,.5)'
        div.style.width = '400px';
        div.style.height = '60px';
        div.style.position = 'absolute';
        div.style.top = '902px'
        div.style.left = '100px';
        div.style.display = 'none';
        div.style.zIndex = '10'
        div.appendChild(input);
        div.appendChild(button);
        input.type = 'text';
        input.placeholder = '请输入完整的背景url';
        input.style.width = '400px';
        button.innerHTML = '点击更换背景';
        button.style.position = 'absolute';
        button.style.top = '30px';
        button.style.left = '150px';


        //弹出框
        span.addEventListener('click', function() {
            if (div.style.display == 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
        //更换背景
        button.addEventListener('click', function() {
            bcurl = input.value;
            if (bcurl == '') {
                alert('你没有输入任何内容!');
            } else {
                var div = document.createElement('div');
                var all = document.querySelectorAll('div');
                var last = all.length - 1;
                body.removeChild(all[last]); //删除本脚本产生的最后一个节点
                body.appendChild(div);
                div.dataUname = 'background';
                div.style.backgroundColor = 'white';
                //在本地储存bcurl
                window.localStorage.setItem('bcurl', bcurl);
                div.style.background = 'url(' + bcurl + ')';
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
            }
        });
        //设置默认背景
        function set() {
            'use strict';
            // Your code here...
            var div = document.createElement('div');
            body.appendChild(div);
            div.dataUname = 'background';
            div.style.backgroundColor = 'white';
            if (window.localStorage.getItem('bcurl') != '' && window.localStorage.getItem('bcurl') != null) {
                div.style.background = 'url(' + window.localStorage.getItem('bcurl') + ')'
            } else {
                div.style.background = 'url(https://i0.hdslb.com/bfs/album/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png)'
            }
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
        };
        set();
        window.addEventListener('scroll', function() {
            span.style.top = this.scrollY + 940 + 'px';
            div.style.top = this.scrollY + 902 + 'px';
        });