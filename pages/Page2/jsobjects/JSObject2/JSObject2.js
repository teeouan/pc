export default {
  generateHTML: () => {
    const rows = Table1.selectedRows;

    if (rows.length === 0) return "<p>ไม่มีรายการที่เลือก</p>";

    const customerName = rows[0].name;

    // คำนวณรวม
    const total = rows.reduce((sum, row) => sum + Number(row.total_price || 0), 0);
    const vat = total * 0.07;
    const grandTotal = total + vat;

    let html = `
      <html>
        <head>
          <style>
            body { font-family: 'Kanit', sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .summary { margin-top: 20px; font-size: 16px; }
          </style>
          <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
        </head>
        <body>
          <h2>รายการที่เลือก</h2>
          <p><strong>ชื่อลูกค้า:</strong> ${customerName}</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>วันที่</th>
                <th>รหัสสินค้า</th>
                <th>ชื่อสินค้า</th>
                <th>จำนวน</th>
                <th>ราคาต่อหน่วย</th>
                <th>รวม</th>
              </tr>
            </thead>
            <tbody>
    `;

    rows.forEach(row => {
      html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.date}</td>
          <td>${row["product code"]}</td>
          <td>${row.code}</td>
          <td>${row["Piece-qtn"]}</td>
          <td>${row["piece-price"]}</td>
          <td>${row.total_price}</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>

          <div class="summary">
            <p><strong>รวม:</strong> ${total.toLocaleString()} บาท</p>
            <p><strong>VAT 7%:</strong> ${vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</p>
            <p><strong>ยอดรวมสุทธิ:</strong> ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</p>
          </div>
        </body>
      </html>
    `;

    return html;
  }
};
