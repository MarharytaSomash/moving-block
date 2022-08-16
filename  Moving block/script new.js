const block = document.querySelector(`.block`);
const STEP = 10;
const LeftPosition = window.innerWidth - block.offsetWidth;
const TopPosition = window.innerHeight - block.offsetHeight;

      
const ArrowUpFunc = () => {
   let PositionTop = block.offsetTop;
   let nextPosition = PositionTop - STEP;
   if (nextPosition <= 0) {
      block.style.top = `${parseInt(block.style.top)+STEP*2}px`;
      showBANG()
   } else {
      block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top) - STEP}px`
   } 
   
};

const ArrowDownFunc = () => {
   let PositionTop = block.offsetTop;
   let nextPosition = PositionTop + STEP;
   
   if (nextPosition >= TopPosition) {
      block.style.top = `${parseInt(block.style.top)-STEP*2}px`;
      showBANG();
   } else{
      block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top)+STEP}px`;
   }
};

const ArrowRightFunc = () => {
   let PositionLeft = block.offsetLeft;
   let nextPosition = PositionLeft + STEP;
    if (nextPosition >=  LeftPosition  ) {
       block.style.left = `${parseInt(block.style.left) - STEP*2}px`;
    
      showBANG()
   } else {
       block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`;
      
   };
  } 
  

const ArrowLeftFunc = () => {
   let PositionLeft = block.offsetLeft;
   let nextPosition = PositionLeft + STEP;
    if (nextPosition <=  0  ) {
       block.style.left = `${parseInt(block.style.left) + STEP*2}px`;
    
       showBANG()
       
   } else {
        block.style.left = !block.style.left ? `-${STEP}px` : `${parseInt(block.style.left) - STEP}px`;
   };
};
  

const SpaceUpFunc = () => {
  setTimeout(() => ArrowUpFunc ());
  setTimeout(() => ArrowDownFunc(), 1000);
}
 
const ControlFunc = () => {
     block.classList.toggle(`active`);
}

const SpaceFunc = () => {
    SpaceUpFunc()
      
   }

const KEYS = {
   38: ArrowUpFunc,
   40: ArrowDownFunc,
   39: ArrowRightFunc,
   37: ArrowLeftFunc,
   32: SpaceFunc,
   17: ControlFunc 
}

const showBANG = () => {
    block.innerHTML = "<div> BANG </div>" ;
   setTimeout(() => block.innerHTML = ``, 2000); 
   
} 

document.addEventListener(`keydown`, e =>
   KEYS[e.keyCode] && KEYS[e.keyCode]());

