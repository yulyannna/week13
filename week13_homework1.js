const button = document.querySelector('button');
        button.onclick = function () {
            let name = prompt('Как вас зовут?');
            alert(`Привет, ${name}!`);
        }

    // после нажатия, выведет поле ввода для имени и приветствие "Привет, имя"
    // если поле не заполнить, то выведет "привет, null!" -  доработать