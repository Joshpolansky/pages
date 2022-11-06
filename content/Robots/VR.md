---
title: "VR Robot"
date: 2022-11-05T13:33:40-07:00
---


I assume you looked at the Basic Robot. Here is one that works in VR (Sorry, it does require a VR headset to.. can't fix that..)

Note: Something changed somewhere that caused grabbing the robot in VR to break. I will fix it some day. 

<style>
    .slide-container{
        z-index: 0;
        position: fixed;
        bottom: 10px;
    }
    .slider{
        width: 40px;
        height: 80px;
        background-color: 303030;
        display: inline-block;
        margin: 10px;
    }
    .slider-bar{
        background-color: #2FA1D6;
    }
</style>
<base href="/">
<div id="scene" style="height:60vh"></div>
<div class="slide-container">
    <div class="slider">
    </div>
    <div class="slider">                
    </div>
    <div class="slider">
    </div>
    <div class="slider">
    </div>
    <div class="slider">                
    </div>
    <div class="slider">
    </div>   
</div>
<script src="/js/rodot.js" type="module"></script>
