let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #9cd0ac;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9cd0ac;">"Las oportunidades no aparecen, las creas tú." – Chris Grosser</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
