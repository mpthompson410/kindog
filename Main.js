// Highlight current nav link
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.href===location.href){a.classList.add('active')}
});
