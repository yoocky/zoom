 /**
 *版本信息
 * @fileOverview  自适应缩放
 * @autor Yoocky <me@yoocky.com>
 * @ version 0.0.1
 *
 *功能描述：
 *   改变页面的zoom值让固定宽度的页面能随页面缩放实现自适应的页面展示。
 **/
;
(function(){
    var _w,_zoom,_hd, _orientationChange,_doc = document,_style = _doc.getElementById("_zoom");
    _style || (_hd = _doc.getElementsByTagName("head")[0],_style=_doc.createElement("style"),_hd.appendCHild(_style));
    _orientationChange = function(){
       _w    = _doc.documentElement.clientWidth || _doc.body.clientWidth;
       _zoom = _w / 640;
       _style.innerHTML = ".zoom {zoom:" + _zoom + ";-webkit-text-size-adjust:auto!important;}";
    };
    _style.setAttribute("zoom",_zoom);
    _orientationChange();
    window.addEventListener("resize",_orientationChange,false);
})();


