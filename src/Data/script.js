const block = document.querySelector(".block")
const box = document.querySelector(".box");

import { category, categoryData } from "./server.js";

const renderData = async () => {
  const data = await category();
  block.innerHTML = await data?.map((item) => `
        <button class=" border-[2px] py-[5px] px-[16px] mt-5 rounded-[10px] font-bold text-[13px] text-[#4661e6] hover:text-[#fff] bg-[#f2f4ff] hover:bg-[#4661e6]">${item}</button>
   `).join("");

}
renderData()

const render = async (item) => {
  const data = await categoryData(item);



  box.innerHTML = data?.map((item) => `
     <div class="w-[825px] h-[151px] bg-[#fff] shadow-xl mb-6 flex items-center justify-between rounded-[10px] gap-[40px] p-[30px]">
     <div class="flex gap-[40px] items-center">
     <div class="relative">
      <img class="absolute top-[-14px] left-4" src="./img/img2.svg" alt="">
     <strong class="rounded-[10px] bg-[#F2F4FE] pt-[26px] pb-[8px] px-[9px]">${item.votes}</strong>
     </div>
       
       <div class="">
       <h1 class="font-bold text-[18px] text-[#3a4374]">${item.title}</h1>
         <p class="font-normal text-[16px] text-[#647196]">${item.description}</p>
         <button class="font-bold text-[13px] text-[#4661e6] bg-[#F2F4FF] py-2 px-4 rounded-[10px]">${item.type}</button>
       </div>
       </div>
      <div class="flex gap-2">
         <img src="./img/img.svg" alt="">
         <p class="font-bold text-[16px] text-[#3a4374]">2</p>
      </div>
     </div>
  `).join("");
}

render();


block.addEventListener('click', (e) => {
  const item = e.target.childNodes[0].nodeValue;


  if (item) {
    render(item)
  }
})

