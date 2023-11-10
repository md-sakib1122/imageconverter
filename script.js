const upload=document.querySelector(".upload");
const  fileinput=upload.querySelector("input");
const previewImg=upload.querySelector("img");

const widthInput=document.querySelector(".width input");
const heightInput=document.querySelector(".height input")
const ratioinput=document.querySelector(".ratio input");


const download=document.querySelector(".btn");
const quality=document.querySelector(".quality input");

 function loadfile(e){
    const file=e.target.files[0];

    previewImg.src=URL.createObjectURL(file);
     
    previewImg.addEventListener("load",()=>{
        upload.classList.add("uploadimg");

        widthInput.value=previewImg.naturalWidth;
        heightInput.value=previewImg.naturalHeight;
        imgratio= widthInput.value/ heightInput.value;
    });
 }

 widthInput.addEventListener("keyup",()=>{
    const height=ratioinput.checked?widthInput.value/imgratio : heightInput.value;
    heightInput.value=Math.floor(height);
 });

 heightInput.addEventListener("keyup",()=>{
    const width=ratioinput.checked?heightInput.value*imgratio : widthInputInput.value;
    widthInput.value=Math.floor(width);
 });


const  convertt=()=>{
   const canvas=document.createElement("canvas");
   const ctx=canvas.getContext("2d");
   canvas.width=widthInput.value;
   canvas.height=heightInput.value;
   ctx.drawImage( previewImg,0,0,canvas.width,canvas.height);


      const imgquality=quality.checked? 0.3 : 1.0;


    const a=document.createElement("a");
    a.href=canvas.toDataURL("image/jpeg",imgquality);
    
    a.download=new Date().getTime();
    
    a.click();


}


fileinput.addEventListener("change", loadfile);


upload.addEventListener("click",()=>fileinput.click());


download.addEventListener("click",convertt);