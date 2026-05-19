const upgradeApi = "/api/upgrades";
const autoClickerApi = "/api/autoclickers";

let upgrades = [];
let autoClickers = [];

const message = document.getElementById("message");
const upgradeForm = document.getElementById("upgradeForm");
const autoClickerForm = document.getElementById("autoClickerForm");
const upgradeTable = document.getElementById("upgradeTable");
const autoClickerTable = document.getElementById("autoClickerTable");

function showMessage(text, type = "success") {
    message.textContent = text;
    message.className = `alert alert-${type}`;
}

function hideMessage() {
    message.className = "alert d-none";
    message.textContent = "";
}

async function requestJson(url, options = {}) {
    const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...options
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

function upgradeFromForm() {
    return {
        name: document.getElementById("upgradeName").value.trim(),
        cost: readNumber("upgradeCost"),
        title: document.getElementById("upgradeTitle").value.trim(),
        cpsMulti: readNumber("upgradeCpsMulti"),
        clickMulti: readNumber("upgradeClickMulti")
    };
}

function autoClickerFromForm() {
    return {
        name: document.getElementById("autoClickerName").value.trim(),
        cost: readNumber("autoClickerCost"),
        cps: readNumber("autoClickerCps"),
        title: document.getElementById("autoClickerTitle").value.trim()
    };
}

function readNumber(inputId) {
    return Number(document.getElementById(inputId).value.replace(",", "."));
}

function resetUpgradeForm() {
    upgradeForm.reset();
    document.getElementById("upgradeId").value = "";
}

function resetAutoClickerForm() {
    autoClickerForm.reset();
    document.getElementById("autoClickerId").value = "";
}

function fillUpgradeForm(upgrade) {
    document.getElementById("upgradeId").value = upgrade.id;
    document.getElementById("upgradeName").value = upgrade.name;
    document.getElementById("upgradeCost").value = upgrade.cost;
    document.getElementById("upgradeTitle").value = upgrade.title;
    document.getElementById("upgradeCpsMulti").value = upgrade.cpsMulti;
    document.getElementById("upgradeClickMulti").value = upgrade.clickMulti;
}

function fillAutoClickerForm(autoClicker) {
    document.getElementById("autoClickerId").value = autoClicker.id;
    document.getElementById("autoClickerName").value = autoClicker.name;
    document.getElementById("autoClickerCost").value = autoClicker.cost;
    document.getElementById("autoClickerCps").value = autoClicker.cps;
    document.getElementById("autoClickerTitle").value = autoClicker.title;
}

function renderUpgrades() {
    upgradeTable.innerHTML = "";

    upgrades.forEach((upgrade) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${upgrade.name}</td>
            <td>${upgrade.cost}</td>
            <td>${upgrade.cpsMulti}</td>
            <td>${upgrade.clickMulti}</td>
            <td>${upgrade.title}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-2" data-action="edit">Edit</button>
                <button class="btn btn-sm btn-outline-danger" data-action="delete">Delete</button>
            </td>
        `;

        row.querySelector('[data-action="edit"]').addEventListener("click", () => fillUpgradeForm(upgrade));
        row.querySelector('[data-action="delete"]').addEventListener("click", () => deleteUpgrade(upgrade.id));
        upgradeTable.appendChild(row);
    });
}

function renderAutoClickers() {
    autoClickerTable.innerHTML = "";

    autoClickers.forEach((autoClicker) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${autoClicker.name}</td>
            <td>${autoClicker.cost}</td>
            <td>${autoClicker.cps}</td>
            <td>${autoClicker.title}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-2" data-action="edit">Edit</button>
                <button class="btn btn-sm btn-outline-danger" data-action="delete">Delete</button>
            </td>
        `;

        row.querySelector('[data-action="edit"]').addEventListener("click", () => fillAutoClickerForm(autoClicker));
        row.querySelector('[data-action="delete"]').addEventListener("click", () => deleteAutoClicker(autoClicker.id));
        autoClickerTable.appendChild(row);
    });
}

async function loadData() {
    upgrades = await requestJson(upgradeApi);
    autoClickers = await requestJson(autoClickerApi);
    renderUpgrades();
    renderAutoClickers();
}

async function saveUpgrade(event) {
    event.preventDefault();
    hideMessage();

    const id = document.getElementById("upgradeId").value;
    const upgrade = upgradeFromForm();
    const url = id ? `${upgradeApi}/${id}` : upgradeApi;
    const method = id ? "PUT" : "POST";

    await requestJson(url, { method, body: JSON.stringify(upgrade) });
    resetUpgradeForm();
    await loadData();
    showMessage("Upgrade saved.");
}

async function saveAutoClicker(event) {
    event.preventDefault();
    hideMessage();

    const id = document.getElementById("autoClickerId").value;
    const autoClicker = autoClickerFromForm();
    const url = id ? `${autoClickerApi}/${id}` : autoClickerApi;
    const method = id ? "PUT" : "POST";

    await requestJson(url, { method, body: JSON.stringify(autoClicker) });
    resetAutoClickerForm();
    await loadData();
    showMessage("Auto clicker saved.");
}

async function deleteUpgrade(id) {
    await requestJson(`${upgradeApi}/${id}`, { method: "DELETE" });
    await loadData();
    showMessage("Upgrade deleted.");
}

async function deleteAutoClicker(id) {
    await requestJson(`${autoClickerApi}/${id}`, { method: "DELETE" });
    await loadData();
    showMessage("Auto clicker deleted.");
}

upgradeForm.addEventListener("submit", (event) => saveUpgrade(event).catch(showError));
autoClickerForm.addEventListener("submit", (event) => saveAutoClicker(event).catch(showError));
document.getElementById("resetUpgradeForm").addEventListener("click", resetUpgradeForm);
document.getElementById("resetAutoClickerForm").addEventListener("click", resetAutoClickerForm);

function showError(error) {
    showMessage(error.message, "danger");
}

loadData().catch(showError);
