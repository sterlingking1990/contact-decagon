const DATABASE_URI="http://localhost:3000/contacts"

const getContact=async()=>{
    const response=await fetch(DATABASE_URI);
    const contacts=await response.json();

    populateContacts(contacts);
};

const populateContacts=contacts=>{
    const formattedContacts=contacts.map(formatContact);
    const displayContacts=document.querySelector('.display-contacts');
    displayContacts.innerHTML+=formattedContacts.join('');

};



const formatContact=({firstName,lastName,phoneNumber})=>{
    return `<div class='contact'>
        <div> ${firstName} ${lastName}</div>
        <div>${phoneNumber}</div>

        <div class'edit-contact'>
            <button id='edit'>Edit</button>
            <button id='delete'>Delete</button>
        </div>
    </div>`;

};

//get buttons actions from page and register event listeners

const editContacts = document.querySelectorAll("#edit");
const deleteContacts = document.querySelectorAll("#delete");

//register button actions

editContacts.forEach(button=>button.addEventListener('click',()=>{
   console.log("edit");
})
);

deleteContacts.forEach(button => button.addEventListener('click', () => {
    console.log("delete");
})
);

$(document).ready(getContact);



