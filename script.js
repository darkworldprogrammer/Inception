// // // creating using JS
// const root = document.querySelector('#root');
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World from JS';
// root.append(h1);

// // // // creating using react
// const h1 = React.createElement(
//   'h1',
//   { className: 'h1' },
//   'Hello World from react!'
// );
const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h1);

// // /// creating nested element
// // // example
{
  /* <section>
<div class="parent">
  <h1 class="child"></h1>
</div>
</section> */
}

const parent = React.createElement(
  'section',
  { className: 'parent' },
  React.createElement('div', { className: 'child' }, [
    React.createElement('h1', { key: 1 }, 'I am a h1 tag'),
    React.createElement('h2', { key: 2 }, 'I am a h2 tag'),
  ])
);
root.render(parent);
