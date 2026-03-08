async function loadUsers() {

    const response = await fetch("http://localhost:3001/api/users")

    const users = await response.json()

    const list = document.getElementById("users")

    list.innerHTML = ""

    users.forEach(user => {

        const li = document.createElement("li")

        li.textContent = user.name + " - " + user.email

        list.appendChild(li)

    })

}