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
    @page { size: A4; margin: 20mm 10mm 30mm 10mm; }
    body { font-family: 'Sarabun', sans-serif; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
    th, td { border: 1px solid black; padding: 6px; vertical-align: top; }
    .product-title { text-align: center; font-size: 22px; color: #e25041; font-weight: bold; margin-top: 24px; margin-bottom: 8px; }
  </style>
</head>
<body>
  <p style="text-align: center;"><strong>
    <span style="color: rgb(226, 80, 65); font-size: 30px;">รายละเอียดสินค้า</span>
  </strong></p>
`;

    // Helper สร้างแถว ถ้า value ไม่มีจะไม่แสดง
    function addRow(label, value) {
      return value ? `<tr><th>${label}</th><td>${value}</td></tr>` : '';
    }

    // วนลูปสร้างทีละตาราง
    selectedRows.forEach(row => {
      html += `
        <div class="product-title">${row.name || ''}</div>
        <table>
          ${addRow('ชื่อสินค้า', row.name)}
          ${addRow('รหัสสินค้า', row.dcode)}
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
      `;
    });

    html += `
</body>
</html>
`;
    return html;
  }
}
