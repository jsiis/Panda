/**
 * Created by cai on 2016/11/17.
 */
angular.module('mobileApp').factory('selectServer',function () {
    var data={
        url:'',
        info:[
            {
                id:1,
                img:'Subject-selection_Html_icon_01_png.png',
                info:'HTML/CSS'
            },
            {
                id:2,
                img:'Subject-selection_CSS3_icon_01_png.png',
                info:'CSS3'
            },
            {
                id:3,
                img:'Subject-selection_JavaScript_icon_01_png.png',
                info:'JS'
            },
            {
                id:4,
                img:'Subject-selection_bootstrap_icon_01_png.png',
                info:'bootstrap'
            },
            {
                id:5,
                img:'Subject-selection_Angular.JS_icon_01_png.png',
                info:'AngularJs'
            },
            {
                id:6,
                img:'Subject-selection_Html5_icon_01_png.png',
                info:'HTML5'
            },
            {
                id:7,
                img:'Subject-selection_JS_icon_01_png.png',
                info:'Javascript'
            },
            {
                id:8,
                img:'Subject-selection_WebApp_icon_01_png.png',
                info:'WebApp'
            },
            {
                id:9,
                img:'Subject-selection_jQuery_icon_01_png.png',
                info:'JQuery'
            },
        ]
    };
    return data;
});