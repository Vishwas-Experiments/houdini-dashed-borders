registerPaint('dashed-border', class {

  static get inputProperties() {
    return [
      '--dash-color',
      '--dash-width',
      '--dash-length',
      '--dash-corner',
      '--dash-gap',
      '--dash-corner-radius',
      '--dash-cap',
    ]
  }

  paint(ctx, size, props, args) {
    const color = props.get('--dash-color')[0] || 'black';
    const length = parseInt(props.get('--dash-length')[0]) || 5;
    const width = parseInt(props.get('--dash-width')[0]) || 1;
    const cornerRadius = parseInt(props.get('--dash-corner-radius')[0]) || 0;
    const gap = parseInt(props.get('--dash-gap')[0]) || 2;
    const cap = (props.get('--dash-cap')[0] || 'butt').trim();

    var x = width / 2, y = cornerRadius;
    var edgeHit = false;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = cap;

    ctx.beginPath();
    ctx.moveTo(x, y);

    // drawing left edge
    while(!edgeHit) {
      ctx.lineTo(x, y + length);
      ctx.moveTo(x, y += length + gap);
      if(y >= size.height - cornerRadius) edgeHit = true;
    }

    edgeHit = false;
    x = cornerRadius;
    y = size.height - width / 2;
    ctx.moveTo(x, y);

    // drawing bottom edge
    while(!edgeHit) {
      ctx.lineTo(x + length, y);
      ctx.moveTo(x += length + gap, y);
      if(x >= size.width - cornerRadius) edgeHit = true;
    }

    edgeHit = false;
    x = size.width - width / 2;
    y = size.height - cornerRadius;
    ctx.moveTo(x, y);

    // drawing right edge
    while(!edgeHit) {
      ctx.lineTo(x, y - length);
      ctx.moveTo(x, y -= length + gap);
      if(y <= cornerRadius) edgeHit = true;
    }

    edgeHit = false;
    x = size.width - cornerRadius;
    y = width / 2;
    ctx.moveTo(x, y);

    // drawing top edge
    while(!edgeHit) {
      ctx.lineTo(x - length, y);
      ctx.moveTo(x -= length + gap, y);
      if(x <= cornerRadius) edgeHit = true;
    }

    ctx.stroke();

    // draw corners
    ctx.clearRect(0, 0, cornerRadius, cornerRadius);
    var theta = 1.5 * Math.PI;
    while (theta >= Math.PI) {
      ctx.beginPath();
      ctx.arc(cornerRadius + width / 2, cornerRadius + width / 2, cornerRadius, theta, Math.max(theta - length / cornerRadius, Math.PI), true);
      theta -= length / cornerRadius + gap / cornerRadius;
      ctx.stroke();
    }

    ctx.clearRect(0, size.height - cornerRadius, cornerRadius, cornerRadius);
    theta = Math.PI;
    while (theta >= 0.5 * Math.PI) {
      ctx.beginPath();
      ctx.arc(cornerRadius + width / 2, size.height - cornerRadius - width / 2, cornerRadius, theta, Math.max(theta - length / cornerRadius, 0.5 * Math.PI), true);
      theta -= length / cornerRadius + gap / cornerRadius;
      ctx.stroke();
    }

    ctx.clearRect(size.width - cornerRadius, size.height - cornerRadius, cornerRadius, cornerRadius);
    theta = 0.5 * Math.PI;
    while (theta >= 0) {
      ctx.beginPath();
      ctx.arc(size.width - cornerRadius - width / 2, size.height - cornerRadius - width / 2, cornerRadius, theta, Math.max(theta - length / cornerRadius, 0), true);
      theta -= length / cornerRadius + gap / cornerRadius;
      ctx.stroke();
    }

    ctx.clearRect(size.width - cornerRadius, 0, cornerRadius, cornerRadius);
    theta = 2 * Math.PI;
    while (theta >= 1.5 * Math.PI) {
      ctx.beginPath();
      ctx.arc(size.width - cornerRadius - width / 2, cornerRadius + width / 2, cornerRadius, theta, Math.max(theta - length / cornerRadius, 1.5 * Math.PI), true);
      theta -= length / cornerRadius + gap / cornerRadius;
      ctx.stroke();
    }
  }
})
