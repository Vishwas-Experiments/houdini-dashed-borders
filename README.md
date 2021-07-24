# houdini-dashed-borders
Custom dashed borders using CSS Houdini

![image](https://user-images.githubusercontent.com/28251020/126876258-297e1555-9b62-42eb-99bb-8327c31a54dc.png)

Read the usage and development guide [here](https://bytebabbles.blogspot.com/2021/07/making-custom-dashed-borders-with-css.html)

Usage:
```
.dashes {
  border-image-source: paint(dashed-border);
  border-image-slice: 0 fill;
  --dash-width: 5; /* equivalent to 5px */
  --dash-length: 15; /* 15px */
  --dash-gap: 5; /* 5px */
  --dash-cap: round; /* also try "square" and "butt" */
  
  /* Make sure both radius properties match */
  border-radius: 5px;
  --dash-corner-radius: 5;
}
```
