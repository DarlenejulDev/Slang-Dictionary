
let userWord = document.getElementsByClassName('userWord')
//
let userMeaning = document.getElementsByClassName('userMeaning')
//
let del = document.getElementsByClassName('delete')
let update= document.getElementsByClassName('update')
let userChoiceWord=document.getElementsByClassName('userWord').value
let find= document.getElementsByClassName('find')

// Any user w/o accounts
Array.from(find).forEach(function(element) {
      element.addEventListener('click', function(){
        const userWord = this.parentNode.parentNode.childNodes[1].innerText
        const userMeaning = this.parentNode.parentNode.childNodes[3].innerText
        fetch('profileEntry', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'userWord': userWord,
            'userMeaning': userMeaning,

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
        })
      });
});
















Array.from(update).forEach(function(element) {
      element.addEventListener('click', function(){
        alert('Are you sure you would like to update the meaning of this word?');
        const userWord = this.parentNode.parentNode.childNodes[1].innerText
        const userMeaning = this.parentNode.parentNode.childNodes[3].innerText
        fetch('profileEntry', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'userWord': userWord,
            'userMeaning': userMeaning,

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
        })
      });
});


Array.from(del).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(del)
        const userWord = this.parentNode.parentNode.childNodes[1].innerText
        const userMeaning = this.parentNode.parentNode.childNodes[3].innerText
        // const deletionComplete=this.parentNode.parentNode.remove().textContent
       //   const personName= this.parentNode.parentNode.childNodes[1].childNodes[0].innerText
       //   const when=
       //   this.parentNode.parentNode.childNodes[1].childNodes[2].innerText
       // const phoneNumber = this.parentNode.parentNode.childNodes[1].childNodes[4].innerText

// });
        fetch('profileEntry', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'userWord': userWord,
            'userMeaning': userMeaning,
          })
        }).then(function (response) {
          // window.location.reload()
        })
      });
});
