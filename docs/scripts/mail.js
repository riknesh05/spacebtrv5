  const scriptURL = 'https://script.google.com/macros/s/AKfycbycIZPyakvukYR2oR8mbUuI57QfZn8X5c-Xtz5f1AiZNN7ZyFnMTvli58sjGkJ76GhcQw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');
  const msgt = document.getElementById('msgt');
  const popcls = document.getElementById('pop_up');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                msg.innerHTML = "Thanks for connecting...😁"
                setTimeout(function(){
                        msg.innerHTML = ""
                },5000)
                form.reset()
              })
              .catch(error => console.error('Error!', error.message))
            })
            
            if (msg.innerHTML == "") {
              function time(){
                msgt.innerHTML = "Please wait..."
                setTimeout(function(){
                        msgt.innerHTML = ""
                },4000)
            }}
            function clspopup(){
              popcls.style.display = "none";
           }