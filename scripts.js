const imageElements=document.querySelectorAll(".image");

const minusIcon="icon-minus.svg";
const plusIcon="icon-plus.svg";

const discrptionElement=document.querySelectorAll(".container");
imageElements.forEach(function(image){

    image.addEventListener('click',function (e){

        const dataValue=this.getAttribute("data-value");


        if(this.src.includes("icon-plus.svg"))
        {
        this.src=minusIcon;
        
        }else{
        this.src=plusIcon;
        }
        toggleDisplayPropertyParagraph(dataValue);

    })

})


function toggleDisplayPropertyParagraph(dataValue){

    const paragraph=document.getElementById(dataValue);
    
    const style=getComputedStyle(paragraph);

    if(style.display==="block")
    paragraph.style.display="none";
    else 
    paragraph.style.display="block";
}