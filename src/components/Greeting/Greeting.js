import "./Greeting.css";
import React from "react";

function welcomeDisappear() {
  document.getElementsByClassName(".welcome-gradient").addClass("welcome-away");
}
function showPage() {
  document.getElementsByClassName(".rest-of-page").css("display", "block");
}
setTimeout(welcomeDisappear, 100);
setTimeout(showPage, 1000);

function Greeting() {
  return (
    <>
      <div class="container">
        <span>
          <img src="http://logocache.com/custom-design/logo-name/urban-designstyle-colors-u.png"></img>
        </span>
      </div>
      <button>CATCH!</button>
    </>
  );
}

export default Greeting;
