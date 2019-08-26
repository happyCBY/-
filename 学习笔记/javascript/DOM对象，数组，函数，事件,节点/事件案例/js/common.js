// 获得DOM对象
function my$(id) {
    return document.getElementById(id);
}



// 绑定事件兼容方法
function addEventListener(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    }
    else {
        element["on" + type] = fn;
    }
}
//解绑事件的兼容代码
function removeEvernListener(element, type, fnName) {
    if (element.removeEvernListener) {
        element.removeEvernListener(type, fnName, false);
    }
    else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    }
    else {
        element["on" + type] = null;
    }
}


//获得父元素第一个子元素
function getfirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    }
    else {
        //如果第一个节点不是标签节点，则向下查找，如果都没有标签节点则返回null
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获得父元素最后一个子元素
function getlasttElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    }
    else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

//获得元素前一个子元素
function getpreviousElementChild(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    }
    else {
        var node = element;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

//获得元素后一个元素
function getnextElementChild(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    }
    else {
        var node = element;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }

}
//添加元素
function appendChild(element, tag) {
    var gettag = document.createElement(tag);
    element.appendChild(gettag);
}
//在某元素前添加元素
function addElementChild(element, tag) {
    var gettag = document.createElement(tag);
    element.insertbefore(gettag, element.firstchild);
}
//替换元素
function replaceElementChild(element, tag) {
    var gettag = document.createElement(tag);
    element.replaceChild(gettag, element.firstchild);
}
//删除元素
function removeElementChild(element) {
    element.removeElementChild(element.firstchild);
}

//动画先快后慢移动,可以传入多个参数,fn为回调函数，可以创建多个动画

function move(element, json, fn) {

    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;

        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var speed = (target - current) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                current += speed;
                element.style[attr] = current / 100;
            }
            else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            }
            else {
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                var speed = (target - current) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                current += speed;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}

//获得样式表中的属性的兼容代码

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}