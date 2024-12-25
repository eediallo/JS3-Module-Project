import { showSeletor } from "../domElements.js";

function createShowOption(show) {
  const showOption = document.createElement("option");
  showOption.value = show.id;
  showOption.textContent = `${show.id} - ${show.name}`;
  return showOption;
}

function renderShowsOptions(shows) {
  const showOptions = shows.map(createShowOption);
  showSeletor.append(...showOptions);
}

export { renderShowsOptions };