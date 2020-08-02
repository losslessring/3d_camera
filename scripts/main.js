import {points, polygons} from './geometry.js'

import {drawLine, drawPolygon, drawPolygons} from './draw.js'

import Point from './point.js'



let camera_distance = 100

let camera_point = new Point(0, 0, -camera_distance)


const perspTransform = (points, k) => {
	let result = []
	

	for(let point of points){		
		result.push({
			x: k*point.x / (point.z+k),
		 	y: k*point.y / (point.z+k)
		})
	}
	return result
}

// console.log(points)

// let moved_points = points.map((point) =>{
// 	return {
// 			 x: point.x + 100,
// 			 y: point.y + 100,
// 			 z: point.z + 100
// 			}
// })


let projected_polygons = polygons.map((polygon) => {
	
		return perspTransform(polygon, camera_distance)
	
})

console.log(projected_polygons)
drawPolygons(projected_polygons)

// persp_transform(moved_points, 100).forEach((point, i, points) => {
	
// 	if (i < points.length - 1){
// 		drawLine(point, points[i+1])	
// 	}
// 	//console.log(points[i])
// })

// persp_transform(moved_points, 100).forEach((point, i, points) => {
	
// 	if (i < points.length - 4){
// 		drawLine(point, points[i+4])	
// 	}

// })

//Получилась центральная проекция
// Научиться поворачивать камеру
// Убрать холст из угла
// Разнести по классам
// Доделать алгоритм рисования линий
// Добавить матрицы поворота
// Лучше отрисовывать полигоны

//Сделать функцию drawPolygon, которая отрисовывает полигон по точкам

// или может drawPolygons чтобы рисовала все полигоны в цикле

// console.log(polygons)