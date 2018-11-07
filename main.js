window.addEventListener('load', alert('Hello!'));
function decToAny() {
  let dec = document.getElementById("decimal").value;
  let arr = [];
  const bin = document.getElementById("result");
  const num_sys = document.getElementById("num_sys").value;
  while (dec > 0) {
    if (dec % num_sys > 9) {
      arr.push(String.fromCharCode(55 + (dec % num_sys)));
    } else {
      arr.push(dec % num_sys);
    }
    dec = Math.floor(dec / num_sys);
  }

  arr.reverse();
  arr = arr.join("");
  bin.innerText = arr;
}
document.getElementById("submit").addEventListener("click", decToAny);
document.getElementById("submit").addEventListener("touchstart", decToAny);
