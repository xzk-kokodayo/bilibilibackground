// ==UserScript==
// @name         bilibili界面背景更改完整版
// @namespace    https://github.com/wuxintlh/
// @version      0.3.4.4
// @description  更改b站背景的懒人脚本，位置在页面左下角
// @author       桜wuxin
// @match        *://*.bilibili.com/*
// @QQgroup      793513923
// @grant        none
// ==/UserScript==

        set();
        var bcurl = '';
        var host = window.location.host;
        if (host != 'live.bilibili.com') {
            spandiv();
        } else {
            var main = document.querySelector('.live-room-app').querySelector('.z-app-content');
            if (main != undefined) {
                var div = document.createElement('div');
                var span = document.createElement('span');
                var input = document.createElement('input');
                var button = document.createElement('button');
                main.appendChild(span);
                span.innerHTML = '点击更换背景';
                span.className = 'SakuraSpans';
                span.style.width = '100px';
                span.style.height = '22px';
                span.style.position = 'absolute';
                span.style.top = '940px';
                span.style.left = '0px';
                span.style.backgroundColor = 'rgba(0,255,255,.5)';
                span.style.userSelect = 'none';
                span.style.zIndex = '10';
                span.style.fontSize = '15px';
                main.appendChild(div);
                div.className = 'SakuraDivd';
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
                input.className = 'SakuraInputi';
                button.innerHTML = '点击更换背景';
                button.style.position = 'absolute';
                button.style.top = '30px';
                button.style.left = '150px';
                button.className = 'SakuraButtonb';
            } else {
                spandiv();
            }
        };

        function spandiv() {
            var div = document.createElement('div');
            var body = document.querySelector('body');
            var span = document.createElement('span');
            var input = document.createElement('input');
            var button = document.createElement('button');
            body.appendChild(span);
            span.innerHTML = '点击更换背景';
            span.className = 'SakuraSpans';
            span.style.width = '100px';
            span.style.height = '22px';
            span.style.position = 'absolute';
            span.style.top = '940px';
            span.style.left = '0px';
            span.style.backgroundColor = 'rgba(0,255,255,.5)';
            span.style.userSelect = 'none';
            span.style.zIndex = '10';
            span.style.fontSize = '15px';
            body.appendChild(div);
            div.className = 'SakuraDivd';
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
            input.className = 'SakuraInputi';
            button.innerHTML = '点击更换背景';
            button.style.position = 'absolute';
            button.style.top = '30px';
            button.style.left = '150px';
            button.className = 'SakuraButtonb';
        }
        window.addEventListener('scroll', function() {
            var span = document.querySelector('.SakuraSpans');
            var div = document.querySelector('.SakuraDivd');
            span.style.top = this.scrollY + 940 + 'px';
            div.style.top = this.scrollY + 902 + 'px';
        })
        span = document.querySelector('.SakuraSpans');
        //侧边栏弹出
        span.addEventListener('focus', function() {

            })
            //弹出框
        span.addEventListener('click', function() {
            div = document.querySelector('.SakuraDivd');
            if (div.style.display == 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
        //更换背景
        button = document.querySelector('.SakuraButtonb')
        button.addEventListener('click', function() {
            var input = document.querySelector('.SakuraInputi');
            bcurl = input.value;
            if (bcurl == '') {
                alert('你没有输入任何内容!');
            } else {
                var div = document.querySelector('.SakuraBackground');
                div.dataUname = 'background';
                div.style.backgroundColor = 'white';
                //在本地储存bcurl
                window.localStorage.setItem('bcurl', bcurl);
                div.style.background = 'url(' + bcurl + ')';
            }
        });
        input = document.querySelector('.SakuraInputi');
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
            'use strict';
            // Your code here...
            var body = document.querySelector('body');
            var div = document.createElement('div');
            body.appendChild(div);
            div.dataUname = 'background';
            var ifbcurl = window.localStorage.getItem('bcurl')
            if (ifbcurl != '' && ifbcurl != null) {
                div.style.background = 'url(' + window.localStorage.getItem('bcurl') + ')' //保存的背景
            } else {
                div.style.background = 'url(https://i0.hdslb.com/bfs/album/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png)' //默认背景
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
            div.className = 'SakuraBackground';
        };