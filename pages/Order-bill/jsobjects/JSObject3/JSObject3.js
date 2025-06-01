export default {
  generateHTML: () => {
    const rows = Table1.selectedRows;

    let html = `
      <html>
        <head>
          <style>
            body { font-family: 'Kanit', sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
          <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
        </head>
        <body>
          <h2>รายการที่เลือก</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>วันที่</th>
                <th>ชื่อลูกค้า</th>
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
          <td>${row.name}</td>
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
        </body>
      </html>
    `;

    return html;
  }
};
