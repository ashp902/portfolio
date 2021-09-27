
window.onload = function() {
    var container = document.getElementById('container');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    function removeAllChildren(node) {
        while(node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
    
    function updateContainer(message) {
        removeAllChildren(container);
        if(message == 'HOME') {
            setHome();
        } else if(message == 'PROJECTS') {
            setProjects();
        } else if(message == 'CONTACT') {
            setContact();
        }
    }

    button1.addEventListener('click', function() {
        updateContainer(button1.innerHTML);
    });

    button2.addEventListener('click', function() {
        updateContainer(button2.innerHTML);
    });

    function setHome() {
        var imageDiv = document.createElement('div');
        imageDiv.setAttribute('id', 'imageDiv');
        var img = document.createElement('img');
        img.setAttribute('src', 'me.png');
        imageDiv.appendChild(img);
        container.appendChild(imageDiv);

        var desc = document.createElement('div');
        desc.setAttribute('id', 'desc');
        desc.innerHTML = 'lorem ipsum';
        container.appendChild(desc);

        button1.innerHTML = 'PROJECTS';
        button2.innerHTML = 'CONTACT';
    }

    function setProjects() {
        button1.innerHTML = 'HOME';
        button2.innerHTML = 'CONTACT';
    }

    function setContact() {
        button1.innerHTML = 'HOME';
        button2.innerHTML = 'PROJECTS';
    }

    setHome();

};