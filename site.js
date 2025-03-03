const menuItems = document.querySelectorAll('.menu-item');
let currentIndex = 0;

menuItems[currentIndex].classList.add('active');

// if i press the arrow keydown do something
document.addEventListener("keydown", (e) => {

  if (e.key === 'ArrowDown') {
    handleKeyDown();
  }

  if (e.key === 'ArrowUp') {
    handleKeyUp();
  }

});

function handleKeyUp() {

  if (currentIndex === 0) {
    currentIndex = menuItems.length - 1;
    removeAllOtherActive();
    menuItems[currentIndex].classList.add('active');
    return
  }

  currentIndex = currentIndex - 1;
  removeAllOtherActive();

  menuItems[currentIndex].classList.add('active');
  console.log(`The current index is: ${currentIndex}`);
  console.log(menuItems[currentIndex]);
}


function handleKeyDown() {

  if (currentIndex === menuItems.length - 1) {
    currentIndex = 0;
    removeAllOtherActive();
    menuItems[currentIndex].classList.add('active');
    return;
  }

  currentIndex = currentIndex + 1;
  removeAllOtherActive();

  menuItems[currentIndex].classList.add('active');
  console.log(`The current index is: ${currentIndex}`);
  console.log(menuItems[currentIndex]);
}

function removeAllOtherActive() {
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });
}


