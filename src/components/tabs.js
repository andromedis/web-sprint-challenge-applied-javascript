import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // instantiating parent element and adding its class
  const topicsElem = document.createElement('div');
  topicsElem.classList.add('topics');

  // instantiating, adding class and text, and appending each topic element
  topics.forEach(topic => {
    const newElem = document.createElement('div');
    newElem.classList.add('tab');
    newElem.textContent = topic;
    topicsElem.appendChild(newElem);

    newElem.addEventListener('click', e => {
      /* Code blocks marked TWIN at beginning of if/else blocks are identical. For some reason,
       * moving code to here, outside of if/else to remove duplicate, breaks deselection
       * functionality on the tab elements. cardClass declaration only necessary at beginning of else
       * block, but code works either way. Leaving bafflingly necessary duplicates in place.
       */
      const cardClass = newElem.textContent === 'node.js' ? 'node' : newElem.textContent;
      if (newElem.classList.contains('active-tab')) {
        document.querySelectorAll('.tab').forEach(tab => {      // TWIN
          tab.classList.remove('active-tab');                   // TWIN
        });                                                     // TWIN
        document.querySelectorAll('.card').forEach(card => {
          card.classList.remove('hide');
        });
      }
      else {
        document.querySelectorAll('.tab').forEach(tab => {      // TWIN
          tab.classList.remove('active-tab');                   // TWIN
        });                                                     // TWIN
        newElem.classList.add('active-tab');
        document.querySelectorAll(`.card.${cardClass}`).forEach(card => {
          card.classList.remove('hide');
        });
        document.querySelectorAll(`.card:not(.${cardClass})`).forEach(card => {
          card.classList.add('hide');
        });
      }
    })
  })

  return topicsElem;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(res => {
      const topicsArray = res.data['topics'];
      const parentElem = document.querySelector(selector);
      const tabsElem = Tabs(topicsArray);
      parentElem.appendChild(tabsElem);
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
}

export { Tabs, tabsAppender }
