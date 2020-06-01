async function leerTodos(){
    // esperar la respuesta
    // este ejemplo se puede probar con estos links
    // 200 listas: https://jsonplaceholder.typicode.com/todos
    // 5mil photos :https://jsonplaceholder.typicode.com/photos
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments');
    const datos = await respuesta.json();
    return datos;
}
console.log(leerTodos());
leerTodos()
    .then(usuarios => console.log(usuarios));
console.log("Este mensaje se ve aun que no se muestre el then de arriba");