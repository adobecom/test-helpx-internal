export default (block) => {
  const anchors;
  [...block.children].forEach(child => {
    const anchorTag = child.querySelector('a');
    anchors.add(anchorTag);
  })
  const ul = document.createElement('ul');
  anchors.forEach(a => {
    const li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li);
  })
  block.replaceChildren(ul);
};
