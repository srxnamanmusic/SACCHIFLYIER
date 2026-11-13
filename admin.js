
/* =====================================
   SACCHI PAY — ADMIN DASHBOARD
   DEMO MODE ONLY
   No real payments are processed.
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // DEMO TRANSACTION DATA
    // These are fictional sample transactions.

    const transactions = [
        {
            id: "SP-DEMO-1001",
            customer: "Alex Morgan",
            amount: 49.99,
            currency: "USD",
            status: "Success",
            date: "2026-11-10"
        },
        {
            id: "SP-DEMO-1002",
            customer: "Jordan Lee",
            amount: 29.50,
            currency: "USD",
            status: "Pending",
            date: "2026-11-10"
        },
        {
            id: "SP-DEMO-1003",
            customer: "Taylor Smith",
            amount: 75.00,
            currency: "USD",
            status: "Success",
            date: "2026-11-09"
        },
        {
            id: "SP-DEMO-1004",
            customer: "Casey Brown",
            amount: 19.99,
            currency: "USD",
            status: "Failed",
            date: "2026-11-09"
        },
        {
            id: "SP-DEMO-1005",
            customer: "Riley Wilson",
            amount: 89.00,
            currency: "USD",
            status: "Success",
            date: "2026-11-08"
        }
    ];

    // ELEMENTS

    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menuButton");

    const totalProcessed = document.getElementById("totalProcessed");
    const successfulCount = document.getElementById("successfulCount");
    const pendingCount = document.getElementById("pendingCount");
    const refundTotal = document.getElementById("refundTotal");

    const searchInput = document.getElementById("searchInput");
    const transactionRows = document.getElementById("transactionRows");
    const resultCount = document.getElementById("resultCount");

    const exportButton = document.getElementById("exportButton");
    const linkButton = document.getElementById("linkButton");
    const linkMessage = document.getElementById("linkMessage");

    const toast = document.getElementById("toast");

    // FORMAT CURRENCY

    function formatMoney(amount, currency) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency
        }).format(amount);
    }

    // SHOW DEMO NOTIFICATION

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        window.setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // DASHBOARD SUMMARY

    function updateSummary() {
        const successful = transactions.filter(
            item => item.status === "Success"
        );

        const pending = transactions.filter(
            item => item.status === "Pending"
        );

        const total = successful.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        if (totalProcessed) {
            totalProcessed.textContent = formatMoney(total, "USD");
        }

        if (successfulCount) {
            successfulCount.textContent = successful.length;
        }

        if (pendingCount) {
            pendingCount.textContent = pending.length;
        }

        // No real refunds exist in this demo.
        if (refundTotal) {
            refundTotal.textContent = formatMoney(0, "USD");
        }
    }

    // DISPLAY TRANSACTIONS

    function renderTransactions(data) {
        if (!transactionRows) return;

        transactionRows.innerHTML = "";

        if (data.length === 0) {
            transactionRows.innerHTML = `
                <tr>
                    <td colspan="5">No matching demo transactions found.</td>
                </tr>
            `;
        }

        data.forEach(item => {
            const row = document.createElement("tr");

            const statusClass = item.status.toLowerCase();

            const values = [
                item.id,
                item.customer,
                formatMoney(item.amount, item.currency),
                item.date
            ];

            values.forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            const statusCell = document.createElement("td");
            const statusBadge = document.createElement("span");

            statusBadge.className = `status ${statusClass}`;
            statusBadge.textContent = item.status;

            statusCell.appendChild(statusBadge);
            row.appendChild(statusCell);

            transactionRows.appendChild(row);
        });

        if (resultCount) {
            resultCount.textContent =
                `${data.length} demo transaction(s)`;
        }
    }

    // SEARCH TRANSACTIONS

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value
                .trim()
                .toLowerCase();

            const filtered = transactions.filter(item => {
                return (
                    item.id.toLowerCase().includes(searchTerm) ||
                    item.customer.toLowerCase().includes(searchTerm) ||
                    item.status.toLowerCase().includes(searchTerm)
                );
            });

            renderTransactions(filtered);
        });
    }

    // EXPORT DEMO TRANSACTIONS AS CSV

    if (exportButton) {
        exportButton.addEventListener("click", () => {

            const headings = [
                "Transaction ID",
                "Customer",
                "Amount",
                "Currency",
                "Status",
                "Date"
            ];

            const rows = transactions.map(item => [
                item.id,
                item.customer,
                item.amount,
                item.currency,
                item.status,
                item.date
            ]);

            const csvContent = [
                headings,
                ...rows
            ].map(row =>
                row.map(value =>
                    `"${String(value).replace(/"/g, '""')}"`
                ).join(",")
            ).join("\n");

            const blob = new Blob(
                [csvContent],
                { type: "text/csv;charset=utf-8;" }
            );

            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a");

            downloadLink.href = url;
            downloadLink.download = "sacchi-pay-demo-transactions.csv";

            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.remove();

            URL.revokeObjectURL(url);

            showToast("Demo transaction report exported.");
        });
    }

    // DEMO PAYMENT LINK BUTTON

    if (linkButton) {
        linkButton.addEventListener("click", () => {

            const message =
                "Demo only: Sacchi Pay is not connected to a payment provider. No real payment link was created.";

            if (linkMessage) {
                linkMessage.textContent = message;
            }

            showToast("Demo mode: no payment link created.");
        });
    }

    // MOBILE SIDEBAR

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // CLOSE MOBILE SIDEBAR WHEN A LINK IS CLICKED

    if (sidebar) {
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("open");
            });
        });
    }

    // INITIALIZE DASHBOARD

    updateSummary();
    renderTransactions(transactions);

});
