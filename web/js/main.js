var title = "";
var description = "";

function pullMenu(){
    fillSpecial()
    fillApps()
    fillMainCourse()
    fillDessert()
    fillBrunch()
}

function fillSpecial() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/1')
        .then(function (response) {
            if (response.status !== 200) {
                // make the promise be rejected if we didn't get a 200 response
                throw new Error("Not 200 response")
            } else {
                // go the desired response
                return response.json();
            }
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));

                title = JSON.stringify(myJson.menu_items[0].description).replace(/\"/g, "").split(' ').slice(0,2).join(' ');;
                document.getElementById('specialTitle').innerHTML = title;
    
                description = JSON.stringify(myJson.menu_items[0].description).replace(/\"/g, "");
                document.getElementById('specialText').innerHTML = description;        
        });
}

function fillApps() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            if (response.status !== 200) {
                // make the promise be rejected if we didn't get a 200 response
                throw new Error("Not 200 response")
            } else {
                // go the desired response
                return response.json();
            }
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));

            for(var i=0; i <= 7; i++)
            {
                title = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "").split(' ').slice(0,2).join(' ');;
                console.log(title);
                var titleId = 'card-title'+ String(i);
                console.log(titleId);
                document.getElementById(titleId).innerHTML = title;
    
                description = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "");
                console.log(description);
                var descId = 'card-text'+ String(i);
                console.log(descId);
                document.getElementById(descId).innerHTML = description;
            }           
        });
}

function fillMainCourse() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            if (response.status !== 200) {
                // make the promise be rejected if we didn't get a 200 response
                throw new Error("Not 200 response")
            } else {
                // go the desired response
                return response.json();
            }
        })
        .then(function (myJson) {

            for (var i = 0, j = 8; i <= 7, j <= 15; i++ , j++) {

                title = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "").split(' ').slice(0, 2).join(' ');;
                var titleId = 'card-title' + String(j);
                document.getElementById(titleId).innerHTML = title;

                description = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "");
                var descId = 'card-text' + String(j);
                document.getElementById(descId).innerHTML = description;
            }
        });
}

function fillDessert() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            if (response.status !== 200) {
                // make the promise be rejected if we didn't get a 200 response
                throw new Error("Not 200 response")
            } else {
                // go the desired response
                return response.json();
            }
        })
        .then(function (myJson) {

            for (var i = 0, j = 16; i <= 7, j <= 23; i++ , j++) {

                title = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "").split(' ').slice(0, 2).join(' ');;
                var titleId = 'card-title' + String(j);
                document.getElementById(titleId).innerHTML = title;

                description = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "");
                var descId = 'card-text' + String(j);
                document.getElementById(descId).innerHTML = description;
            }
        });
}

function fillBrunch() {
    fetch('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(function (response) {
            if (response.status !== 200) {
                // make the promise be rejected if we didn't get a 200 response
                throw new Error("Not 200 response")
            } else {
                // go the desired response
                return response.json();
            }
        })
        .then(function (myJson) {

            for (var i = 0, j = 24; i <= 7, j <= 31; i++ , j++) {

                title = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "").split(' ').slice(0, 2).join(' ');;
                var titleId = 'card-title' + String(j);
                document.getElementById(titleId).innerHTML = title;

                description = JSON.stringify(myJson.menu_items[i].description).replace(/\"/g, "");
                var descId = 'card-text' + String(j);
                document.getElementById(descId).innerHTML = description;
            }
        });
}