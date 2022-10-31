/*document.getElementById('btnSiguiente').addEventListener('click', cargarJSON);

function cargarJSON(){
	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`)
	.then(function(res) {
		return res.json();
	})
	.then(function(data){
		let html = '';
		data.forEach(function(pelicula) {
			html+= `			
				<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
				<h3 class="titulo">${pelicula.title}</h3>			
		`;
		})
		document.getElementById('contenedor').innerHTML = html;
	})
}*/



const url = 'https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473'

fetch(url)
.then(response => response.json() )
.then(data => {

	let element = document.getElementById('contenedor')
	element.innerHTML = `	
		
		<h3 class="titulo">${pelicula.title}</h3>					
	`;

	console.log(data)
})
.catch(err=>console.log(err))






