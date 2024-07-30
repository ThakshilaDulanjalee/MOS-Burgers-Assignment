let orders = [];


function btnClick() {
    addOrders();
    loadTable();
}

function addOrders() {
    let orderID = document.getElementById("txtOrderId").value;
    let name = document.getElementById("txtName").value;
    let custID = document.getElementById("txtCustId").value;
    let contactNumber = document.getElementById("txtContNum").value;
    let date = document.getElementById("txtDate").value;
    let totalQty = document.getElementById("txtTotQty").value;
    let totalAmount = document.getElementById("txtTotAmount").value;
    let netValue = document.getElementById("txtNetValue").value;

    console.log(orderID + "|" + name + "|" + custID + "|" + contactNumber + "|" + date + "|" + totalQty + "|" + totalAmount + "|" + netValue);

    orders.push({
        orderID,
        name,
        custID,
        contactNumber,
        date,
        totalQty,
        totalAmount,
        netValue
    })
}

function loadTable() {
    let tblOrders = document.getElementById("tblOrders");

    let tableBody = `<tr>
        <th>Order ID</th>
        <th>Name</th>
        <th>Cust ID</th>
        <th>Contact Number</th>
        <th>Date</th>
        <th>Total Qty</th>
        <th>Total Amount</th>
        <th>Net Value</th>
    </tr>`;

    orders.forEach(data => {
        tableBody += `<tr>
        <td>${data.orderID}</td>
        <td>${data.name}</td>
        <td>${data.custID}</td>
        <td>${data.contactNumber}</td>
        <td>${data.date}</td>
        <td>${data.totalQty}</td>
        <td>${data.totalAmount}</td>
        <td>${data.netValue}</td>
        </tr>`
    });

    console.log(tableBody);
    tblOrders.innerHTML = tableBody;
}




