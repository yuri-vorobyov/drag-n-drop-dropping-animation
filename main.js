const box = document.querySelector(".box");

box.addEventListener("mousedown", dragStart);

const draggedData = {
  left: NaN,
  top: NaN,
  lastX: NaN,
  lastY: NaN,
};

function dragStart(event) {
  box.classList.add("grabbed");
  draggedData.left = 0;
  draggedData.top = 0;
  draggedData.lastX = event.clientX;
  draggedData.lastY = event.clientY;
  window.addEventListener("mousemove", dragging);
  window.addEventListener("mouseup", dragStop, { once: true });
}

function dragging(event) {
  draggedData.left += event.clientX - draggedData.lastX;
  draggedData.top += event.clientY - draggedData.lastY;
  draggedData.lastX = event.clientX;
  draggedData.lastY = event.clientY;
  box.style.left = draggedData.left + "px";
  box.style.top = draggedData.top + "px";
}

function dragStop(event) {
  window.removeEventListener("mousemove", dragging);
  box.style.removeProperty("left");
  box.style.removeProperty("top");
  box.classList.remove("grabbed");
}
