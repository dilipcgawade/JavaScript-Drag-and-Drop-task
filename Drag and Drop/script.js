console.log('This is a drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox

imgBox.addEventListener('dragstart', (e)=>{
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

// imgBox.addEventListener('dragend', (e)=>{
//     console.log('Dragend has been triggered');
//     e.target.className = 'imgBox'
// });

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('Dragover has been triggered');
    })
    // whiteBox.addEventListener('dragenter',()=>{
    //     console.log('Dragenter has been triggered');
    // })
    // whiteBox.addEventListener('dragleave',()=>{
    //     console.log('Dragleave has been triggered');
    // })
    whiteBox.addEventListener('drop',(e)=>{
        console.log('Drop has been triggered');
        e.target.append(imgBox);
        // Display an alert message when the image is dropped
      alert('Image dropped into the container!');
    })
}

 // Get the reset button element
 var resetButton = document.getElementById('resetButton');

 // Add a click event listener to the reset button
 resetButton.addEventListener('click', function() {
   // Reload the page
   location.reload();
 });