function customReact(reactElement, container) {
    const newElem = document.createElement(reactElement.element);

    for (const prop in reactElement.props) {
        newElem.setAttribute(prop, reactElement.props[prop]);
    }
    newElem.innerText = reactElement.children;
    container.appendChild(newElem);
}

const container = document.getElementById('root');

const reactElement = {
    element: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click to Visit Google!"
}

customReact(reactElement, container);
