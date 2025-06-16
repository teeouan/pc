export default {
  buildHtmlTable() {
    const selectedRows = Table1Copy4.selectedRows;
    if (!selectedRows.length) {
      showAlert('กรุณาเลือกข้อมูลในตารางก่อน', 'warning');
      return;
    }

    let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>รายละเอียดสินค้า</title>
  <style>
    @page { size: A4; margin: 20mm 15mm 20mm 15mm; }
    body { font-family: 'Sarabun', sans-serif; font-size: 14px; color: #333; }
    .section { margin-bottom: 40px; page-break-inside: avoid; }
    .product-title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #cc0000;
      margin: 12px 0;
      border-bottom: 2px solid #cc0000;
      padding-bottom: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th {
      width: 30%;
      text-align: left;
      background: #f0f0f0;
      padding: 8px;
      border: 1px solid #ccc;
    }
    td {
      padding: 8px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <h1 style="text-align: center; color: #e25041;">รายละเอียดสินค้า</h1>
`;

    function addRow(label, value) {
      return value ? `<tr><th>${label}</th><td>${value}</td></tr>` : '';
    }

    selectedRows.forEach(row => {
      html += `
      <div class="section">
        <div class="product-title">${row.name || ''}</div>
        <table>
          ${addRow('ชื่อสินค้า', row.name)}
          ${addRow('รหัสสินค้า', row.pycm_post)}
          ${addRow('--สรรพคุณ--', row.properties)}
          ${addRow('--ส่วนผสม--', row.ingredient)}
          ${addRow('--วิธีใช้--', row.method)}
          ${addRow('--เหมาะกับ--', row.for)}
          ${addRow('--สารสำคัญ--', row.ingredient_s)}
          ${addRow('--วิธีเก็บรักษา--', row.maintain)}
          ${addRow('--ข้อควรระวัง--', row.caution)}
          ${addRow('Hashtag', row.hashtag)}
          ${addRow('ราคา', row.retail ? row.retail + ' บาท' : '')}
        </table>
      </div>
      `;
    });

    html += `
</body>
</html>
`;
    return html;
  }
}
