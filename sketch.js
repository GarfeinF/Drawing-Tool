let tool=""
let red = 0
let green = 0
let blue = 0
let drawingMode = false
let lastX = 0
let lastY = 0
let lineWeight = 1
let value = 0
let sat = 0
let firstX = 0
let firstY = 0
let opacity = 255


function setup(){
	createCanvas(600, 400)
	rect(0, 0, width, height)
}

function draw() {
	fill(red+value, green+value, blue+value, opacity)
	stroke(red+value, green+value, blue+value, opacity)
	if (drawingMode){
		if (tool=="pencil"){
			noStroke()
			ellipse(mouseX, mouseY, lineWeight, lineWeight)
		} else if (tool == "pen"){
			strokeWeight(lineWeight)
			line(lastX, lastY, mouseX, mouseY)
			lastX = mouseX
			lastY = mouseY
		} else if (tool=="pixel"){
			noStroke()
			pixelX=int(mouseX/lineWeight)*lineWeight
			pixelY=int(mouseY/lineWeight)*lineWeight
			rect(pixelX, pixelY, lineWeight, lineWeight)
			
		} else if (tool=="calligraphy"){
			// strokeWeight(2)
			// line(mouseX, mouseY, mouseX+lineWeight, mouseY+lineWeight)
			noStroke()
			beginShape()
				vertex(mouseX, mouseY)
				vertex(mouseX+lineWeight, mouseY+lineWeight)
				vertex(lastX+lineWeight, lastY+lineWeight)
				vertex(lastX, lastY)
				vertex(mouseX, mouseY)
			endShape()
			lastX = mouseX
			lastY = mouseY
		} else if (tool=="circle"){
			noStroke()
			ellipse(firstX, firstY, firstX-mouseX, firstX-mouseX)
		} else if (tool=="neon") {
			strokeWeight(lineWeight*2)
			stroke(red, green, blue, 50)
			line(lastX, lastY, mouseX, mouseY)
			strokeWeight(lineWeight)
			stroke(255, 255, 255, 255)
			line(lastX, lastY, mouseX, mouseY)
			lastX = mouseX
			lastY = mouseY
		}
	}

}

function changeTool(newTool){
	tool = newTool
}

function changeWeight(){
	lineWeight = mouseX
}

function changeColour(){
	if (mouseX<127 && mouseX>0){
		red = 255
		green = 2*mouseX
		blue = 0
	} else if (mouseX<255 && mouseX>127){
		red = 2*(255-mouseX)
		green = 255
		blue = 0
	}else if (mouseX<382 && mouseX>255){
		red = 0
		green = 255
		blue = 2*(mouseX-255)
	} else if(mouseX<510 && mouseX>382){
		red = 0
		green = 2*(510-mouseX)
		blue = 255
	}else if (mouseX<637 && mouseX>510){
		red = 2*(mouseX-510)
		green = 0
		blue = 255
	} else {
		red = 255
		green = 0
		blue = 2*(765-mouseX)
	}

}

function changeValue(){
	value = mouseX - 255
}

function changeSat(){
	sat = mouseX
}

function changeOpacity(){
	opacity = 255 - mouseX
}


function mousePressed(){
	drawingMode = true
	lastX = mouseX
	firstX = mouseX
	lastY = mouseY
	firstY = mouseY
	//lineWeight = document.getElementById("weight").value
}

function mouseReleased(){
	drawingMode = false
}