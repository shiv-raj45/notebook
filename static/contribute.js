
let submit=document.querySelector('.submit');
let chapter=document.getElementById('chapter');
let topic=document.getElementById('topic');
let contributer=document.getElementById('contributer');
let form=document.querySelector('.form');
for(i=0;i<=10;i++)
{let rl=Math.random()*window.innerWidth*.9;
    let rt=Math.random()*window.innerHeight*.9;
    let rs=Math.random()*60+10;
    let rr=Math.random()*50;
        let deco=document.createElement('div');
    form.appendChild(deco);
    deco.classList.add('deco');
    deco.style.left=`${rl}px`
    deco.style.top=`${rt}px`
    deco.style.height=`${rs}px`
    deco.style.width=`${rs}px`

    deco.style.borderRadius=`${rr}%`
    
}

submit.addEventListener('click',(e)=>{

});
chapter.addEventListener('keydown',()=>{
    if(chapter.value.length<=5)chapter.classList.add('invalid')
    else{
        chapter.classList.remove('invalid');
        chapter.classList.add('valid')
    };
})
topic.addEventListener('input',()=>{
    if(topic.value.length<=2)topic.classList.add('invalid')
    else{
        topic.classList.remove('invalid');
        topic.classList.add('valid')


    };


})
contributer.addEventListener('input',()=>{
    if(contributer.value.length<=2)contributer.classList.add('invalid')
    else{
        contributer.classList.remove('invalid');
        contributer.classList.add('valid')


    };

})
