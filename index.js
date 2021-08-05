const input  = document.getElementById('fruit');
const button = document.getElementById('submit');
const targetNode = document.getElementById('myList');

const config = {
    attributes: true
    childList: true
    subtree: true
}

button.addEventListener('click', add);

function add() {
    const li = document.createElement('li');
    const test = input.value;
    li.appendChild(document.createTextNode(text));
    targetNode.appendChild(li);
}

// Mutation observer


const callback = (mutationList, observer) => {
    for(const mutation of mutationList) {
        if(mutation.type === 'c') {
            console.log('Child added or removed');
        } else if (mutation.type === 'attributess') {
            console.log(`The ${mutation.attributeName} atrribute was modifed.`);
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

//observer.disconnect();