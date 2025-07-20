const promptBtn=document.querySelector(".prompt-btn");
const promptForm=document.querySelector(".prompt-form");
const modelSelect=document.getElementById("model-select");
const imageSelect=document.getElementById("image-select");
const ratioSelect=document.getElementById("ratio-select");
const gridGallery=document.querySelector(".gallery-grid");
const promptInput=document.querySelector(".prompt-input");
const themeToggle=document.querySelector(".theme-toggle");
const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];
promptBtn.addEventListener("click",()=>{
    const prompt=examplePrompts[Math.floor(Math.random()*examplePrompts.length)];
    promptInput.value=prompt;
    promptInput.focus();
});
themeToggle.addEventListener("click",()=>{
  const icon = document.querySelector('.theme-toggle i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.add('fa-moon');
    icon.classList.remove('fa-sun');
    document.body.classList.remove('dark-mode');
  } else {
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon');
    document.body.classList.add('dark-mode');
  }
});
const createImageCards = (selectModel,imageCount,aspectRatio,promptText)=>{
  gridGallery.innerHTML="";
  for(let i=0;i<imageCount;i++){
    gridGallery.innerHTML+=`<div class="img-card" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
                        <div class="img-loader" id="loader">
                            <div class="spinner"></div>
                                <p>Generating...</p>
                        </div>
                        <img src="download.jfif" class="result-img"/>
                    </div>`;
  }
}
const handleFormSubmit = (e)=>{
  e.preventDefault();
  const selectModel=modelSelect.value;
  const imageCount=parseInt(imageSelect.value) || 1;
  const aspectRatio=ratioSelect.value || "1/1";
  const promptText=promptInput.value.trim();

  createImageCards(selectModel,imageCount,aspectRatio,promptText);
}
promptForm.addEventListener("submit",handleFormSubmit);