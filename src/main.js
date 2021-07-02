const cardContent = document.querySelector('#card-content');

window.addEventListener('load', async() => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const { name, weight, sprites } =  await resp.json();
    
        cardContent.innerHTML += `
        <div class="col">
        <div class="card" style="width: 16rem;">
        <img src=${sprites.other.dream_world.front_default} class="card-img-top img-responsive" alt="">
          <div class="card-body">
            <h5 class="card-title text-center"> ${name} - ${weight} kg </h5>
            </div>
        </div>
      </div>`;
});