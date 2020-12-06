const Textanimation = () => {

  var string = "Hello I'm Brent, full stack developer and I love developing websites";
  var str = string.split("");
  var el = document.getElementById('str');
  (function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
  var running = setTimeout(animate, 90);
  })();
};


export { Textanimation };
