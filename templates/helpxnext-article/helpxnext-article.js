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
          <h1 class="page-title">${document.title}</h1>
        </div>
      `;
    return div.firstElementChild;
  };
  
  const getLastUpdatedDate = () => {
    let lastUpdatedDate = '2024-11-02T12:24:23.748Z';
    if (document.querySelector('meta[name="publishdate"')) {
      lastUpdatedDate = document
        .querySelector('meta[name="publishdate"')
        .getAttribute('content');
    }
  
    const date = new Date(lastUpdatedDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  
    const div = document.createElement('div');
    div.innerHTML = `
       <div class="lastUpdated">
          <div class="last-updated-container">
              <span class="publish-date-label">Last updated on </span>
              <span class="publish-date">${formattedDate}</span>
          </div>
      </div>
      `;
    return div.firstElementChild;
  };
  
  const getMainContent = (main) => {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    const childItems = [...main.children];
    childItems.forEach((child) => mainContent.appendChild(child));
  
    const breadcrumb = mainContent.querySelector('.breadcrumb');
    if (breadcrumb) {
      breadcrumb.insertAdjacentElement('afterend', getLastUpdatedDate());
      breadcrumb.insertAdjacentElement('afterend', getTitle());
    }
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
  