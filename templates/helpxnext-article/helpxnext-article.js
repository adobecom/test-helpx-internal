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

const getTitle = () => {
  const div = document.createElement('div');
  div.innerHTML = `
      <div id="title-bar" class="titlebar">
        <h1 class="page-title">document.title</h1>
      </div>
    `;
  return div.firstElementChild;
};

const getMainContent = (main) => {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  const childItems = [...main.children];
  childItems.forEach((child) => mainContent.appendChild(child));

  document
    .querySelector('.breadcrumb')
    .insertAdjacentElement('afterend', getTitle);
  return mainContent;
};

const restructMain = (main, toc, mainContent) => {
  main.innerHTML = toc.outerHTML + mainContent.outerHTML;
};

(() => {
  const main = getMain();
  const toc = getToc(main);
  const mainContent = getMainContent(main);
  restructMain(main, toc, mainContent);
})();
