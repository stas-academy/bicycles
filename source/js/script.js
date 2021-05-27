const navigation = () => {
  let navMain = document.querySelector(".main-navigation");
  let navToggle = document.querySelector(".main-navigation__toggle");

  navMain.classList.remove("main-navigation--nojs");

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains("main-navigation--closed")) {
      navMain.classList.remove("main-navigation--closed");
      navMain.classList.add("main-navigation--opened");
    } else {
      navMain.classList.add("main-navigation--closed");
      navMain.classList.remove("main-navigation--opened");
    }
});
}

//При ошибки код выполняется!

let isStorage = navigation;
let storage = "";

try {
  storage = navigation();
}catch (err){
  isStorage = false;
  // console.log("Ошибка, код выполняется!");
}
