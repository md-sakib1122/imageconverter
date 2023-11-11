const upload=document.querySelector(".upload");
const takeinp=upload.querySelector("input");
const previewimg=upload.querySelector("img");

const height=document.querySelector(".height");
const width=document.querySelector(".width");

function uploadimg(e){
   file=e.target.files[0];
    
   previewimg.src=URL.createObjectURL(file);
   
   upload.classList.add("preview");

   width.value=previewimg.naturalWidth;
   height.value=previewimg.naturalHeight;

   actualratio= width.value/height.value;

}


width.addEventListener("keyup",()=>{
const ratio=document.querySelector(".lock-ratio");
 height.value=Math.floor(ratio.checked? width.value/actualratio : height.value);

});

height.addEventListener("keyup",()=>{
const ratio=document.querySelector(".lock-ratio");
 width.value=Math.floor(ratio.checked? height.value*actualratio : width.value);

});




 



upload.addEventListener("click",()=>{takeinp.click()});

takeinp.addEventListener("change",uploadimg);

const btn=document.querySelector(".btn");


function convert(){
   const canvas=document.createElement("canvas");
   const ctx=canvas.getContext("2d");
   canvas.height=height.value;
   canvas.width=width.value;
   
   ctx.drawImage(previewimg,0,0,   canvas.width,  canvas.height);

     const quality=document.querySelector(".quality");
     
    const q= quality.checked? 0.3:1.0;
   
   const a= document.createElement("a");
     a.href=canvas.toDataURL("image/jpeg",q);
     

     a.download=new Date().getTime();
     a.click();

}


 btn.addEventListener("click",convert);