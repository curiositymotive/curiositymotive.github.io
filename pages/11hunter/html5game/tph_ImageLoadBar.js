function ImageLoadBar_hook(ctx, width, height, total, current, image) {
	// change these to your liking:
	var backgroundColor = "#000000";
	var barBackgroundColor = "#000000";
	var barForegroundColor = "#ff0000";
	var barBorderColor = "#ff0000";
	var barWidth = 250;
	var barHeight = 8;
	var barBorderWidth = 2;
	var barOffset = 8;
    var canvas = document.getElementById("loading_screen")

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

	// background:
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// image:
	var totalHeight, barTop;
	if (image != null) {
		totalHeight = image.height + barOffset + barHeight;
		var image_y = (canvas.height - totalHeight) >> 1;
		ctx.drawImage(image, (canvas.width - image.width) >> 1, image_y);
		barTop = image_y - barHeight - barOffset;
	} else barTop = (canvas.height - barHeight) >> 1;
	// bar border:
	var barLeft = (canvas.width - barWidth) >> 1;
	ctx.fillStyle = barBorderColor;
	ctx.fillRect(barLeft, barTop, barWidth, barHeight);
	//
	var barInnerLeft = barLeft + barBorderWidth;
	var barInnerTop = barTop + barBorderWidth;
	var barInnerWidth = barWidth - barBorderWidth * 2;
	var barInnerHeight = barHeight - barBorderWidth * 2;
	// bar background:
	ctx.fillStyle = barBackgroundColor;
	ctx.fillRect(barInnerLeft, barInnerTop, barInnerWidth, barInnerHeight);
	// bar foreground:
	var barLoadedWidth = Math.round(barInnerWidth * current / total);
	ctx.fillStyle = barForegroundColor;
	ctx.fillRect(barInnerLeft, barInnerTop, barLoadedWidth, barInnerHeight);
	console.log(current + "/" + total);

    
}