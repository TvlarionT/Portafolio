/*efecto giratorio de imagen*/
  export function rotateOnMouseMove(element) {
    let intervalId;
  
    const initialAngle = 0.3; // establece el ángulo inicial aquí
  
    function startRotation() {
      intervalId = setInterval(() => {
        const angle = parseFloat(element.dataset.angle) || initialAngle;
        element.dataset.angle = angle + 0.3;
        element.style.transform = `rotateY(${angle}deg)`;
      }, 10);
      element.style.transition = "transform 0.5s ease-out";
    }
  
    function stopRotation() {
      clearInterval(intervalId);
      element.style.transition = "transform 3s ease-in";
      element.style.transform = `rotateY(${initialAngle}deg)`;
      setTimeout(() => {
        element.style.transition = "0.3s";
      }, 5000);
    }
  
    element.addEventListener("mouseenter", startRotation);
    element.addEventListener("mouseleave", stopRotation);
  }

  
  
  