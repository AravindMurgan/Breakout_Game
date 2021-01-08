const showRules = document.getElementById('show-rules');
const closeBtn = document.getElementById('close-btn');

showRules.addEventListener('click',(e)=>rules.classList.add('show'));
closeBtn.addEventListener('click',(e)=>rules.classList.remove('show'));