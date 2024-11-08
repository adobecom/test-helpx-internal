const getMain = () => {
  const mainElements = [...document.getElementsByTagName('main')];
  return mainElements[0];
};

const getToc = (main) => {
  const tocElements = [...main.getElementsByClassName('toc')];
  const toc = tocElements[0];
  toc.parentElement.removeChild(toc);
  return toc;
};

const getMainContent = (main) => {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  const childItems = [...main.children];
  childItems.forEach((child) => mainContent.appendChild(child));
  return mainContent;
};

const restructMain = (main, toc, mainContent) => {
  main.appendChild(toc);
  main.appendChild(mainContent);
};

(() => {
  const main = getMain();
  const toc = getToc(main);
  const mainContent = getMainContent(main);
  restructMain(main, toc, mainContent);
})();
