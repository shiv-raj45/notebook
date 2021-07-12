let searchbar=document.querySelector('.searchText');
let searchBtn=document.querySelector('.searchBtn');
searchBtn.addEventListener('click',search)
let cards=document.querySelectorAll('.note1')
searchbar.addEventListener('input',search)
function search(){

    cards.forEach((searchCard,searchIndex)=>{
        if (searchCard.innerText.toLowerCase().includes(searchbar.value.toLowerCase()))
        {
            searchCard.style.display='block'
        }
        else{
            searchCard.style.display='none'
        }
    })
}
