const heart = document.getElementsByClassName("fa-heart");
const trash = document.getElementsByClassName("fa-trash-o");


Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText;
        const url = document.querySelector('img').src ;
        fetch('favorites', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'url':url
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const url = document.querySelector('img').src ;
        fetch('favorites', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'url':url
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
