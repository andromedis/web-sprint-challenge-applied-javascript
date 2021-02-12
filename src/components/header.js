const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
 
  // instantiating elements
  const header = document.createElement('div');
  const dateElem = document.createElement('span');
  const titleElem = document.createElement('h1');
  const tempElem = document.createElement('span');

  // adding class names and text content
  header.classList.add('header');
  dateElem.classList.add('date');
  dateElem.textContent = date;
  titleElem.textContent = title;
  tempElem.classList.add('temp');
  tempElem.textContent = temp;

  // building structure
  header.appendChild(dateElem);
  header.appendChild(titleElem);
  header.appendChild(tempElem);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const header = Header('Lambda Times', 'February 12, 2021', '30°');
  const parentElem = document.querySelector(selector);
  parentElem.appendChild(header);
}

export { Header, headerAppender }
