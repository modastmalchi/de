const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', (e)=>{
  const html = document.querySelector('body');
  
  if(html.classList.contains('darkmode')){
    html.classList.remove('darkmode');
    e.target.innerHTML = 'Dark Mode';
  }else{
    html.classList.add('darkmode');
    e.target.innerHTML = 'Light Mode';
  }
})