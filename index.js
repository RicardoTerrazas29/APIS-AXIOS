const axios = require('axios');

// URL de la API
const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';

// Función para obtener los posts
const fetchPosts = async () => {
  try {
    const response = await axios.get(url);
    console.log('Posts:');
    console.log(response.data); // Muestra todos los posts en consola
  } catch (error) {
    console.error('Error al obtener los datos:', error.message);
  }
};

// Ejecutar la función
fetchPosts();
