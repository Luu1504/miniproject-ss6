let libraries = ["Toán", "Văn", "Anh"];
let loginAttempts = 0;
let isAuthenticated = false;

while (loginAttempts < 3) {
    let username = prompt("Username:");
    let password = prompt("Password:");

    if (username === "admin" && password === "12345") {
        isAuthenticated = true;
        break;
    } else {
        loginAttempts = loginAttempts + 1;
        if (loginAttempts < 3) {
            alert("Wrong! Attempts left: " + (3 - loginAttempts));
        }
    }
}

if (isAuthenticated === false) {
    alert("Tài khoản đã bị khóa");
} else {
    let isRunning = true;
    while (isRunning === true) {
        let menu = "1. Add books\n2. Show books\n3. Search\n4. Update\n5. Reverse\n6. Merge\n7. Exit";
        let choice = prompt(menu);

        if (choice === "1") {
            let newBook = prompt("Enter book name:");
            libraries[libraries.length] = newBook;
            alert("Added 1 book.");
        }
        else if (choice === "2") {
            let list = "";
            for (let i = 0; i < libraries.length; i++) {
                list = list + (i + 1) + ". " + libraries[i] + "\n";
            }
            console.log(list);
        }
        else if (choice === "3") {
            let searchName = prompt("Book name:");
            let found = false;
            for (let i = 0; i < libraries.length; i++) {
                if (libraries[i] === searchName) {
                    alert("Found at index: " + i);
                    found = true;
                    break;
                }
            }
            if (found === false) alert("Not found");
        }
        else if (choice === "4") {
            let oldName = prompt("Old name:");
            let foundIndex = -1;
            for (let i = 0; i < libraries.length; i++) {
                if (libraries[i] === oldName) {
                    foundIndex = i;
                    break;
                }
            }
            if (foundIndex !== -1) {
                let newName = prompt("New name:");
                libraries[foundIndex] = newName;
                alert("Success!");
            } else {
                alert("Not found");
            }
        }
        else if (choice === "5") {
            let reversedList = "";
            for (let i = libraries.length - 1; i >= 0; i--) {
                reversedList = reversedList + "Index " + i + ": " + libraries[i] + "\n";
            }
            console.log(reversedList);
        }
        else if (choice === "6") {
            let otherSource = ["Sách Kỹ Năng", "Truyện Tranh"];
            for (let i = 0; i < otherSource.length; i++) {
                libraries[libraries.length] = otherSource[i];
            }
            alert("Merged successfully");
        }
        else if (choice === "7") {
            alert("Hẹn gặp lại!");
            isRunning = false;
        }
    }
}