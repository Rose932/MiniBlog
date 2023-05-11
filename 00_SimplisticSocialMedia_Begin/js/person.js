// Create a class called Person that accepts a first and last name, date of birth, email, password and confirm password:
class Person {
    constructor(firstName, lastName, dob, email, password, confirmPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.about = " ";
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;

        this.authoredPosts = [];
        this.comments = [];
        this.likedPosts = [];
        this.dislikedPosts = [];

        this.work = "";
        this.university = "";
        this.residence = "";
    }

    // Create a method that returns the full name of the person:
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Create a method that returns the email:
    getEmail() {
        return this.email;
    }

    // Create a method that returns the age as of the current date:
    getAge() {
        let today = new Date();
        let birthDate = new Date(this.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Create a method called atLogin that checks whether the details provided as input match the details of the person:
    atLogin(email, password) {
        return this.email === email && this.password === password;
    }

    // Create a method called changePassword that allows the user to change their password:
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            alert("Password changed successfully!");
            return true;
        }
        alert("The old password you entered is incorrect!");
        return false;
    }

    // Create a method called delete that deletes the person:
    delete() {
        alert("Account deleted successfully!");
        return null;
    }

    // Create a method called update that allows the user to update their details after confirming their password:
    update(password, firstName, lastName, about, dob, email, work, university, residence) {
        if (this.password === password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.about = about;
            this.dob = dob;
            this.email = email;
            this.work = work;
            this.university = university;
            this.residence = residence;
            alert("Account updated successfully!");
            return true;
        }
        alert("The password you entered is incorrect!");
        return false;
    }

    // Create a method called display that displays the person’s details:
    display( displayElement ) {
        /**
         * TODO:
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileSection:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileSection div to the class:
         * "col-sm-4"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileCard:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileCard div to the class:
         * "card"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a image element and store it in a constant variable called profileImage:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileImage image to the class:
         * "card-img-top"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the setAttribute method to set the src attribute of the profileImage image to the following link:
         * "https://www.w3schools.com/bootstrap4/img_avatar1.png"
         * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileCardBody:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileCardBody div to the class:
         * "card-body"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a h4 element and store it in a constant variable called profileName:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileName h4 to the class:
         * "card-title"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the full name of the person and store it in a constant variable called profileNameText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileNameText text node to the profileName h4:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a p element and store it in a constant variable called profileAbout:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileAbout p to the class:
         * "card-text"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the about of the person and store it in a constant variable called profileAboutText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileAboutText text node to the profileAbout p:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a p element and store it in a constant variable called profileAge:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileAge p to the class:
         * "card-text"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the age of the person and store it in a constant variable called profileAgeText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileAgeText text node to the profileAge p:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a ul element and store it in a constant variable called profileWorkUniReside:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileWorkUniReside ul to the class:
         * "list-group list-group-flush text-right"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileWork:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileWork li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the work of the person and store it in a constant variable called profileWorkText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileWorkText text node to the profileWork li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileUniversity:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileUniversity li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the university of the person and store it in a constant variable called profileUniversityText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileUniversityText text node to the profileUniversity li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a li element and store it in a constant variable called profileResidence:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileResidence li to the class:
         * "list-group-item"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the residence of the person and store it in a constant variable called profileResidenceText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileResidenceText text node to the profileResidence li:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a div element and store it in a constant variable called profileDeleteEdit:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileDeleteEdit div to the class:
         * "d-flex card-body justify-content-between"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use the createElement method to create a button element and store it in a constant variable called profileDelete:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileDelete button to the class:
         * "btn btn-outline-danger"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the text "Delete" and store it in a constant variable called profileDeleteText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileDeleteText text node to the profileDelete button:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the createElement method to create a button element and store it in a constant variable called profileEdit:
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * Use classList to add the profileEdit button to the class:
         * "btn btn-outline-primary"
         * Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * Use createTextNode to create a text node that contains the text "Edit" and store it in a constant variable called profileEditText:
         * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
         * 
         * Use the appendChild method to append the profileEditText text node to the profileEdit button:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * Use the appendChild method to append the profileImage image to the profileCard div:
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        // YOUR CODE STARTS HERE (Feel free to add more lines below this one)

        const profileSection = createElement('div');
        profileSection.classList.add('col-sm-4');

        const profileCard = createElement('div');
        profileCard.classList.add('card');

        const profileImage = createElement('img');
        profileImage.classList.add('card-img-top');
        profileImage.setAttribute('https://www.w3schools.com/bootstrap4/img_avatar1.png');

        const profileCardBody = document.createElement('div');
        profileCardBody.classList.add('card-body');

        const profileName = document.createElement('div');
        profileName.classList.add('card-title');

        const profileNameText = document.createTextNode(`${this.firstName}``${this.lastName}`);
        profileName.appendChild(profileNameText);

        const profileAbout = document.createElement('p');
        profileAbout.classList.add('card-text');

        const profileAboutText = createTextNode(`${this.about}`);
        profileAbout.appendChild(profileAboutText);

        const profileAge = createElement('p');
        profileAge.classList.add('card-text');

        const profileAgeText = document.createTextNode(`${this.age}`);
        profileAge.appendChild(profileAgeText);

        const profileWorkUniReside = document.createElement('ul');
        profileWorkUniReside.classList.add('list-group list-group-flush text-right');

        const profileWork = document.createElement('li');
        profileWork.classList.add('list-group-item');

        const profileWorkText = createTextNode(`${this.work}`);
        profileWork.appendChild(profileWorkText);

        const profileUniversity = document.createElement('li');
        profileUniversity.classList.add('list-group-item');

        const profileUniversityText = document.createTextNode(`${this.university}`);
        profileUniversity.appendChild(profileUniversityText);

        const profileResidence = document.createElement('li');
        profileResidence.classList.add('list-group-item');

        const profileResidenceText = document.createTextNode(`${this.residence}`);
        profileResidence.appendChild(profileResidenceText);


        const profileDeleteEdit = document.createElement('div');
        profileDeleteEdit.classList.add('ld-flex card-body justify-content-between');

        const profileDelete = document.createElement('button');
        profileDelete.classList.add('btn btn-outline-danger');

        const profileDeleteText = document.createTextNode("Delete");
        profileDelete.appendChild(profileDeleteText);

        const profileEdit = document.createElement('button');
        profileEdit.classList.add('btn btn-outline-primary');

        const profileEditText = document.createTextNode('Edit');
        profileEdit.appendChild(profileEditText);

        profileCard.appendChild(profileImage)


        // YOUR CODE ENDS HERE (Feel free to add more lines above this one)

        /**
         * TODO:
         * 
         * Use the appendChild method to append the profileImage image to the profileCard div:
         * Use the appendChild method to append the profileCardBody div to the profileCard div:
         * Use the appendChild method to append the profileName h4 to the profileCardBody div:
         * Use the appendChild method to append the profileAbout p to the profileCardBody div:
         * Use the appendChild method to append the profileAge p to the profileCardBody div:
         * Use the appendChild method to append the profileWork li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileUniversity li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileResidence li to the profileWorkUniReside ul:
         * Use the appendChild method to append the profileDelete button to the profileDeleteEdit div:
         * Use the appendChild method to append the profileEdit button to the profileDeleteEdit div:
         * Use the appendChild method to append the profileWorkUniReside ul to the profileCard div:
         * Use the appendChild method to append the profileDeleteEdit div to the profileCard div:
         * Use the appendChild method to append the profileCard div to the profileSection div:
         * Use the appendChild method to append the profileSection div to the profile div:
         * 
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        // YOUR CODE STARTS HERE (Feel free to add more lines below this one)

        profileCard.appendChild(profileImage);
        profileCard.appendChild(profileCardBody);
        profileCardBody.appendChild(profileName);
        profileCardBody.appendChild(profileAbout);
        profileCardBody.appendChild(profileAge);
        profileWorkUniReside.appendChild(profileWork);
        profileWorkUniReside.appendChild(profileUniversity);
        profileWorkUniReside.appendChild(profileResidence);
        profileDeleteEdit.appendChild(profileDelete);
        profileDeleteEdit.appendChild(profileEdit)
        profileCard.appendChild(profileWorkUniReside);
        profileCard.appendChild(profileDeleteEdit);
        profileSection.appendChild(profileCard);
        profile.appendChild(profileSection);

        // YOUR CODE ENDS HERE (Feel free to add more lines above this one)

    }

}

window.onload = function () {
    // Use getElementById to get firstname input field and store it in a constant variable called firstName
    const firstName = document.getElementById("firstName");
    // Use getElementById to get firstNameError input field and store it in a constant variable called firstNameError
    const firstNameError = document.getElementById("firstNameError");

    // Use getElementById to get lastname input field and store it in a constant variable called lastName
    const lastName = document.getElementById("lastName");
    // Use getElementById to get lastNameError input field and store it in a constant variable called lastNameError
    const lastNameError = document.getElementById("lastNameError");
    
    // Use getElementById to get email input field and store it in a constant variable called email
    const email = document.getElementById("email");
    // Use getElementById to get emailError input field and store it in a constant variable called emailError
    const emailError = document.getElementById("emailError");

    // Use getElementById to get dob input field and store it in a constant variable called dob
    const dob = document.getElementById("dob");
    // Use getElementById to get dobError input field and store it in a constant variable called dobError
    const dobError = document.getElementById("dobError");

    // Use getElementById to get password input field and store it in a constant variable called password
    const password = document.getElementById("password");
    // Use getElementById to get passwordError input field and store it in a constant variable called passwordError
    const passwordError = document.getElementById("passwordError");
    
    // Use getElementById to get confirmPass input field and store it in a constant variable called confirmPass
    const confirmPassword = document.getElementById("confirmPass");
    // Use getElementById to get confirmPassError input field and store it in a constant variable called confirmPassError
    const confirmPassError = document.getElementById("confirmPassError");

    // Use getElementById to get submitButton input field and store it in a constant variable called submitButton
    const submit = document.getElementById("submit");

    // Create a boolean variable to contain the error messages, call it errorMessages
    var errorMessages = true;
    
    // Add an input event listener to firstName which detects the user's error as they type
    firstName.addEventListener("change", function(){
        // Validate Name
        if ( firstName.value === "" ){
            firstNameError.textContent = "This field is required";

        } else if ( firstName.value.match(/^[0-9]+$/) ) {
            firstNameError.textContent = "This field cannot contain number or special characters";
            
        }
        else {
            errorMessages = false;
        }
        
    })
    // Add an blur event listener to lastname which detects the user's error as they type
    lastName.addEventListener("change", function(){
        // Validate Name
        if ( lastName.value === "" ){
            lastNameError.textContent = "This field is required";

        } else if ( lastName.value.match(/^[0-9]+$/) ) {
            console.log(lastName.value)
            lastNameError.textContent = "This field cannot contain number or special characters";
            
        }
        else {
            errorMessages = false;
        }
        
    })
    
    // Add an input event listener to email which detects the user's error as they type
    // > Check if the email is empty
    // > Use indexOf to check if the email has an @ sign
    // > Use indexOf to check if the email has an . sign
    email.addEventListener('input', function(){
        // Validate Email
        if ( email.value === "" ){
            emailError.textContent = "This field cannot is required";
        } else if ( email.value.indexOf("@") == -1 ){
            emailError.textContent = "This field must contain the @ symbol. "
        }

    })

    // Add an input event listener to email which detects the user's error as they type
    // > Check if the password is not empty is empty
    // > Check that the password has more than 8 characters

    // Add an input event listener to email which detects the user's error as they type
    // > Check if the confirm pass is empty
    // > Check that it matches teh previous password


    // Add the event listener to the submit button
    submit.addEventListener("click", function(){
        
    })
    
    
}