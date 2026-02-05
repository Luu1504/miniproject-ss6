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
        loginAttempts++;
        if (loginAttempts < 3) {
            alert("Wrong credentials. You have " + (3 - loginAttempts) + " attempts left.");
        }
    }
}

if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa");
} else {
    let isRunning = true;

    while (isRunning) {
        let menu = "--- Library Menu ---\n";
        menu += "1. Add new books\n";
        menu += "2. Show all books\n";
        menu += "3. Search book\n";
        menu += "4. Update book\n";
        menu += "5. Reverse books\n";
        menu += "6. Merge from other source\n";
        menu += "7. Exit\n";
        menu += "Select an option:";

        let choice = prompt(menu);

        switch (choice) {
            case "1":
                let inputBooks = prompt("Enter book names (separated by comma):");
                let newBooksArray = inputBooks.split(",");
                for (let i = 0; i < newBooksArray.length; i++) {
                    libraries.push(newBooksArray[i].trim());
                }
                alert("Added " + newBooksArray.length + " books to library.");
                break;

            case "2":
                let displayString = "";
                for (let i = 0; i < libraries.length; i++) {
                    displayString += (i + 1) + ". " + libraries[i] + "\n";
                }
                console.log(displayString);
                alert("Book list printed in Console.");
                break;

            case "3":
                let searchName = prompt("Enter book name to search:");
                let foundIndex = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i] === searchName) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    alert("Sách " + searchName + " được tìm thấy tại vị trí " + foundIndex);
                } else {
                    alert("Không tìm thấy");
                }
                break;

            case "4":
                let oldName = prompt("Enter book name to update:");
                let updateIndex = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i] === oldName) {
                        updateIndex = i;
                        break;
                    }
                }
                if (updateIndex !== -1) {
                    let newName = prompt("Enter new name:");
                    libraries[updateIndex] = newName;
                    alert("Update successful.");
                } else {
                    alert("Error: Book does not exist.");
                }
                break;

            case "5":
                libraries.reverse();
                let reverseString = "";
                for (let i = 0; i < libraries.length; i++) {
                    reverseString += "Index " + i + ": " + libraries[i] + "\n";
                }
                console.log(reverseString);
                alert("Reversed order printed in Console.");
                break;

            case "6":
                let otherSource = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherSource);
                alert("Đã gộp kho sách thành công");
                break;

            case "7":
                alert("Hẹn gặp lại!");
                isRunning = false;
                break;

            default:
                alert("Invalid choice. Please try again.");
                break;
        }
    }
}