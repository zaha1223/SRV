var elBtn = document.querySelector(".header__menu");
var elModal = document.querySelector(".modal");
var elDel = document.querySelector(".modal__del");
let elBody = document.querySelector(".site-body");

elBtn.addEventListener("click", function () {
  elModal.classList.toggle("open");
});
elDel.addEventListener("click", function () {
  elModal.classList.remove("open");
});
let elBtnCL = document.querySelector(".hero__link");

elBtnCL.addEventListener("click", function () {
  elBody.classList.toggle("st-body");
});
console.log(`
"""""""""""""""""""""""""""""",,,,,           ,,,,,,"""""""""""""""""""""""""""
""""""""""""""""""""""""""""       """"""""""          """""""""""""""""""""""
""""""""""""""""""""""""""          """"""""            """"""""""""""""""""""
""""""""""""""""""""""""""            """"             """"""""""""""""""""""
"""""""""""""""""""""""""""            ""             """"""""""""""""""""""""
""""""""""""""""""""""""""""""                     """"""""""""""""""""""""""
""""""""""""""""""""""""""""""""                 """"""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""             """"""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""         """""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""""     """"""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""" """"""""""""""""""""""""""""""""""`);
