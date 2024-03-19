const searchInput=document.getElementById("search-input");
const searchBtn=document.getElementById("search-button");
const pName=document.getElementById("pokemon-name");
const pID=document.getElementById("pokemon-id");
const pWeight=document.getElementById("weight");
const pHeight=document.getElementById("height");
const image = document.querySelector(".image");
const types=document.getElementById("types");
const hP=document.getElementById("hp");
const attack=document.getElementById("attack");
const defense=document.getElementById("defense");
const spAtk=document.getElementById("special-attack");
const spDef=document.getElementById("special-defense");
const speed=document.getElementById("speed");



const fetchPokemon  = async () =>{
  

    const nameOrID = searchInput.value.toLowerCase();
    const url= `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrID}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pName.textContent=`${data.name.toUpperCase()}`
    pID.textContent=` #${data.id}`
    pWeight.textContent=`Weight: ${data.weight}`
    pHeight.textContent=`Height: ${data.height}`
    image.innerHTML=`<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} Image"/>`
    types.innerHTML=data.types.map(obj=>`<span>${obj.type.name.toUpperCase()}</span>`).join(" ");

    hP.textContent=`${data.stats[0].base_stat}`;
    attack.textContent=`${data.stats[1].base_stat}`;
    defense.textContent=`${data.stats[2].base_stat}
    `;
    spAtk.textContent=`${data.stats[3].base_stat}`;
    spDef.textContent=`${data.stats[4].base_stat}`;
    speed.textContent=`${data.stats[5].base_stat}`;
    })
    .catch((err) => {
      alert("Pokemon NotFound")
    })

}
searchBtn.addEventListener("click",fetchPokemon);

searchInput.addEventListener("keyDown",(e)=>{
  if(e.key==="Enter"){
    fetchPokemon;
  }
})