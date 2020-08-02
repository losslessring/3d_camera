import Point from './point.js'

import Polygon from './polygon.js'

let points =   [new Point(0, 0, 0),
				new Point(100, 0, 0),
				new Point(100, 100, 0),
				new Point(0, 100, 0),
				new Point(0, 0, 100),
				new Point(100, 0, 100),
				new Point(100, 100, 100),
				new Point(0, 100, 100)]

//По часовой стрелке, нормаль будет показывать в сторону часовой стрелки, или ноборот, потом решу
let polygons = [
					[points[0], points[3], points[2], points[1]],
					[points[4], points[5], points[6], points[7]],
					
					[points[0], points[4], points[7], points[3]],
					[points[3], points[7], points[6], points[2]],
					
					[points[2], points[6], points[5], points[1]],
					[points[1], points[5], points[4], points[0]],

			   ]

export {points, polygons}