// const mementos = []
// const input = document.querySelector('input')

// function saveMemento() {
//   mementos.push(input.value)
// }

// function undo() {
//   const lastMemento = mementos.pop()
   
//   input.value = lastMemento ? lastMemento : input.value
// }

// // const commands = []
// // const input = document.querySelector('input')

// // function saveCommand(e) {
// //   commands.push({
// //     // the action is also saved for implementing redo, which
// //     // is not implemented in this example.
// //     action: { type: 'add', key: e.key, index: input.selectionStart },
// //     inverse: { type: 'remove', index: input.selectionStart }
// //   })
// // }

// // function undo() {
// //   let value = input.value.split('')
// //   const lastCommand = commands.pop()
 
// //   if (!lastCommand) return
    
// //   switch (lastCommand.inverse.type) {
// //     case 'remove':
// //       value.splice(lastCommand.inverse.index, 1)
// //       break;      
// //   }
  
// //   input.value = value.join('')
// // }
$(document).ready(function () {
  $('#profile-pic-img').click(function () {
      $('#img').click();
  });

  // Optional: Display selected image
  $('#img').change(function () {
      readURL(this);
  });

  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#profile-pic-img').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]); // convert to base64 string
      }
  }
});
