const queryContent = document.querySelector('#content');

window.addEventListener('load', async () => {
    const resp =  await fetch('https://www.breakingbadapi.com/api/characters/1');
    const data = await resp.json();
    console.log(data);
    const { name, img, nickname } = data[0];

    queryContent.innerHTML  += `
    <div class="col mt-2">
    <div class="card" style="width: 16rem;">
    <img src=${img} class="card-img-top img-responsive" alt="">
      <div class="card-body">
        <h5 class="card-title text-center"> Name: ${name} Nickname: ${nickname}  </h5>
        </div>
    </div>
  </div>`;

 });