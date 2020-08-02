


const drawLine = (beginPoint, endPoint) => {

	const canvas = document.getElementById('display')

	const ctx = canvas.getContext('2d')
	

	ctx.moveTo(beginPoint.x, beginPoint.y)
	ctx.lineTo(endPoint.x, endPoint.y)
	ctx.stroke()

}

const drawPolygon = (points) => {
	
	const canvas = document.getElementById('display')

	const ctx = canvas.getContext('2d')


	for(let i = 0; i <= points.length; i++){		
		if (i == points.length - 1){
			ctx.moveTo(points[i].x, points[i].y)
			ctx.lineTo(points[0].x, points[0].y)
			ctx.stroke()			
		}

		if (i < points.length - 2){
			ctx.moveTo(points[i].x, points[i].y)			
			ctx.lineTo(points[i+1].x, points[i+1].y)
			ctx.stroke()
		}
	}

}

const drawPolygons = (polygons) => {
	for(let polygon of polygons){		
		drawPolygon(polygon)
	}
}
export {drawLine, drawPolygon, drawPolygons}
