let list = 'list.json';

let request = new XMLHttpRequest();

request.open('GET', list);

request.responseType = 'json';
request.send();

request.onload = function() {

    let superHeroesText = request.response; 
    let tbody = document.querySelector('tbody');
    let daySelect = document.getElementById('day');
    let monthSelect = document.getElementById('month');

    for(let i = 0; i < superHeroesText.length; i++) {

        let birthday = superHeroesText[i].birthday_contact;
        let birthdayArr = birthday.split('-');

        // let option1 = document.createElement('option');
        // let option2 = document.createElement('option');
        
        // option1.innerHTML = birthdayArr[2];
        // daySelect.appendChild(option1);
        // option2.innerHTML = birthdayArr[1];
        // monthSelect.appendChild(option2);

        let tr = document.createElement('tr');
        tr.classList.add('row');

        function addTd(elemText, elemClass, nameAttr, valueAttr, nameAttr2, valueAttr2) {
            let td = document.createElement('td');
            td.innerText = elemText;
            td.classList.add(elemClass);
            td.setAttribute(nameAttr, valueAttr);
            td.setAttribute(nameAttr2, valueAttr2);
            tr.appendChild(td);
        }

        let tdFirstname = addTd(superHeroesText[i].firstname);
        let tdLasttname = addTd(superHeroesText[i].lastname); 
        let tdEmail = addTd(superHeroesText[i].email);
        let tdPhonenumber = addTd(superHeroesText[i].phonenumber);       
        let tdBirthday = addTd(superHeroesText[i].birthday_contact, 'birthday', 'day', birthdayArr[2], 'month', birthdayArr[1]);
        let tdCompany = addTd(superHeroesText[i].company);

        tbody.appendChild(tr);

    }

        function findCoincidences() {
            let quantity = 0;

            for (let i=0; i < rows.length; i++) {
                if ( rows[i].style.display == 'table-row' ) {
                    quantity += 1;
                }
            }

            if (quantity <= 0) {
                alert('Сoincidences not found');
            }
        }
        
        let rows = document.querySelectorAll('.row');
        birthDayTd = document.querySelectorAll('.birthday');
        for (let i = 0; i < birthDayTd.length; i++) {
            let dataMarker = birthDayTd[i].getAttribute('day');

            daySelect.onchange = function() {
                for (let i = 0; i < rows.length; i++) {
                    rows[i].style.display = 'none';

                    if (this.value == rows[i].childNodes[4].getAttribute('day')) {
                        rows[i].style.display = 'table-row';
                    }
                }

                findCoincidences();
            }

            monthSelect.onchange = function() {
                for (let i = 0; i < rows.length; i++) {
                    rows[i].style.display = 'none';

                    if (this.value == rows[i].childNodes[4].getAttribute('month')) {
                        rows[i].style.display = 'table-row';
                    }
                }

                findCoincidences();
            }

        let button = document.querySelector('#initialView');

        button.onclick = function () {
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.display = 'table-row';
            }
        }
    }
}