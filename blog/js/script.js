// Array de posts
const posts = [
  {
  id: 1,
  title: "Acerca de mí",
  description: "Conoce quién soy, mis pasiones y mi camino como desarrollador.",
  content: `¡Hola! Soy Carlos Pechené, desarrollador web apasionado por crear aplicaciones interactivas y visualmente atractivas. 
    Me encanta aprender nuevas tecnologías y mejorar constantemente mis habilidades. 
    En este blog comparto proyectos, experiencias y tips que he aprendido en mi camino.`,
  image: "images/mi_foto.png"
}
,
  {
  id: 2,
  title: "Mi App de Películas",
  description: "Un proyecto donde desarrollé una app de películas usando React.",
  content: `Este proyecto me permitió crear una aplicación de películas donde puedes ver, marcar tus favoritas y filtrarlas dinámicamente. 
    Aprendí a manejar estado, props y componentes reutilizables en React, además de mejorar el diseño usando CSS.`,
  image: "images/post_movies.png"
},
  {
  id: 3,
  title: "Aprendiendo React y Bootstrap",
  description: "Reflexiones sobre mi aprendizaje y tips para nuevos desarrolladores.",
  content: `Durante mi aprendizaje de React y Bootstrap, descubrí que la práctica constante y crear proyectos reales es clave. 
    Bootstrap me permite hacer interfaces modernas y responsive rápidamente, mientras que React me enseña a pensar en componentes y estado. 
    En este blog comparto lo que voy aprendiendo y los retos que enfrento.`,
  image: "images/react_bootstrap.png"
}
];

// Función para renderizar posts
function renderPosts() {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  posts.forEach(post => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.description}</p>
          <button class="btn btn-primary mt-auto leer-mas-btn" data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#postModal"> Leer más </button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('leer-mas-btn')) return;

  const postId = Number(e.target.dataset.id);
  const post = posts.find(p => p.id === postId);

  if (!post) return;

  loadPost(post);
});


// Cargar posts al inicio
renderPosts();

// Función del modal
function loadPost(post) {
  document.getElementById('postModalTitle').innerText = post.title;
  document.getElementById('postModalBody').innerText = post.content;

  const modalImage = document.getElementById('postModalImage');

  if (post.image) {
    modalImage.src = post.image;
    modalImage.alt = post.title;
    modalImage.classList.remove('d-none');
  } else {
    modalImage.classList.add('d-none');
  }
}



