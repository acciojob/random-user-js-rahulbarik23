//your code here
let dispUser = document.getElementById("getUser")
let fName = document.getElementById("fName")
let uphoto = document.getElementById("userphoto")
let info = document.getElementById("additionalinfo")

dispUser.addEventListener("click", async function()
{
    const res = await fetch("https://randomuser.me/api/")
    if(res)
    {
        const data = await res.json();
        const users = data.results[0];
        console.log(users);
        fName.innerHTML = users.name.first + " " + users.name.last;
        uphoto.src = users.picture.large;

        fName.dataset.age = users.dob.age;
        fName.dataset.email = users.email;
        fName.dataset.phone = users.phone;
        info.innerHTML = "";
    }
});

// Buttons
let dispAge = document.getElementById("agebtn")
let dispEmail = document.getElementById("emailbtn")
let dispPhone = document.getElementById("phonebtn")

dispAge.addEventListener("click", displayAge)
function displayAge()
{
    info.innerHTML = "Age: " + fName.dataset.age
}

dispEmail.addEventListener("click", displayEmail)
function displayEmail()
{
    info.innerHTML = "Email: " + fName.dataset.email
}

dispPhone.addEventListener("click", displayPhone)
function displayPhone()
{
    info.innerHTML = "Phone: " + fName.dataset.phone
}

// Displaying user on page load
dispUser.click()
