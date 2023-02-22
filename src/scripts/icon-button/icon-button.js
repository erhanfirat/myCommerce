const generateIconButton = (iconName, buttonText, clickEventHandler) => {
  const btn = document.createElement("button");
  btn.classList.add("icon-button");

  btn.textContent = buttonText;

  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-" + iconName);

  btn.prepend(icon);

  btn.addEventListener("click", clickEventHandler);

  return btn;
};
