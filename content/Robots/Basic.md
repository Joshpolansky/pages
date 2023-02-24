---
title: "Basic Robot"
date: 2022-11-05T13:33:40-07:00
---

Here is a robot that you can drive around, if you would like.
<base href="/">
<div id="scene" style="height:60vh"></div>
<script src="/js/robot.js" type="module"></script>

It's an ABB IRB1200. I have a real one to play with, so I figured it was only fair to create one for others to play with. 

I got the Robot model from ABB Robot Studio. Apparently you can just export a sweet model. 

I pulled it into blender and setup the hierarchy so moving the joints would make sense. I exported as a .glb, which I find to be a pretty well supported format for models. 

I created a basic scene using Threejs. Just added the robot, a floor and and axis helper. Then I wanted to move it around. Of course if I just move the axis helper nothing would happen. There isn't usually IK for industrial robots sitting around in Javascript, so I wrote that. Then I setup the scene to update the robot joints whenever the axis helper moved, based on the IK of course. 

tada

