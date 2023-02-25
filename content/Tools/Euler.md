---
title: "Euler"
date: 2022-11-05T13:33:40-07:00
---

Euler? Euler?

Has anyone seen a good Euler angle calculator? Def not me. I can't promise this will be better, but at least I can find it.

It comes up a lot, especially with custom robotics. Everyone wants to use different conventions and figuring out if solutions match can be tricky. This table might help you one day.

Ok, here's how it works:

1. You enter the angles you have for one solution (In degrees)
1. A table will be generated where each row is 1 input angle order, the columns are the conversion to the other orders
1. You look at the table to see if any of the conversions match the value you are trying to compare 
1. Tada

<table>
<tr>
<th>First Angle</th>
<th>Second Angle</th> 
<th>Third Angle</th> 
</tr>
<tr>
<td><input id="a_in" value="1" oninput='updateTable()'/></td>
<td><input id="b_in" value="2" oninput='updateTable()'/></td>
<td><input id="c_in" value="3" oninput='updateTable()'/></td>
</tr>
</table>
<br>
<div id="output">

</div>

<script src="/js/three.min.js"></script>
<script src="/js/euler.js"></script>

