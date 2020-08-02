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






let projected_polygons = polygons.map((polygon) => {
	
		return perspTransform(polygon, camera_distance)
	
})

console.log(projected_polygons)
drawPolygons(projected_polygons)



//Получилась центральная проекция
// Научиться поворачивать камеру
// Убрать холст из угла
// Разнести по классам
// Доделать алгоритм рисования линий
// Добавить матрицы поворота
// Лучше отрисовывать полигоны

//Сделать функцию drawPolygon, которая отрисовывает полигон по точкам

// или может drawPolygons чтобы рисовала все полигоны в цикле

//Реализовать матрицы поворота, масштабирования, перемещения