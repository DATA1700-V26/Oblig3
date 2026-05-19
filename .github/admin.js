const API = "http://localhost:3000/api/upgrades";
let editId = null;

async function load() {
    const res = await fetch(API);
    const data = await res.json();
    const table = document.getElementById("table");
    table.innerHTML = "";
    data.forEach(u => {
        table.innerHTML += `
        <tr>
            <td>${u.name}</td>
            <td>${u.cost}</td>
            <td>${u.value}</td>
            <td>
                <button onclick="edit(${u.id}, '${u.name}', ${u.cost}, ${u.value})">Edit</button>
                <button onclick="del(${u.id})">Delete</button>
            </td>
        </tr>`;
    });
}



async function save() {
    const data = {
        name: name.value,
        cost: cost.value,
        value: value.value
    };

    if (editId) {
        await fetch(API + "/" + editId, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        editId = null;
    } else {
        await fetch(API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
    }

    load();
}

function edit(id, n, c, v) {
    editId = id;
    name.value = n;
    cost.value = c;
    value.value = v;
}

async function del(id) {
    await fetch(API + "/" + id, { method: "DELETE" });
    load();
}

load();