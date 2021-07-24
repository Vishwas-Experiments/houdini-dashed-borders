# houdini-dashed-borders
Custom dashed borders using CSS Houdini

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
