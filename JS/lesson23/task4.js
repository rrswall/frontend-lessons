let customerLIst = [];

while (true) {
    let name = prompt("musterinin ad ve soyadini daxill edin (cixmaq ucun '=' secin , ilk musterinin siyahidan cixarmaq ucunse spaceden istifade edin) :");

    if (name === null) {
        break;
    }

    if (name === "=") {
        break;
    }

    if (name == "") {
        if (customerLIst.length > 0) {
            let firstCustomer = customerLIst.shift();
            alert(`${firstCustomer} siyahidan cixarildi`);
        } 
    }
    else {
        customerLIst.push(name);
    }
}

console.log("siyahinin son hali:", customerLIst);