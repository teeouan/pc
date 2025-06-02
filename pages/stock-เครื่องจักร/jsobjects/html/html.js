export default {
  buildHtmlTable() {
    const selectedRows = Table2.selectedRows;
    if (!selectedRows.length) {
      showAlert('กรุณาเลือกข้อมูลในตารางก่อน', 'warning');
      return;
    }

    // สร้าง HTML Table
    let html = `
      <table border="1" cellspacing="0" cellpadding="4" 
        style="border-collapse:collapse;font-family:'Sarabun',Tahoma,Arial,sans-serif;font-size:14px;min-width:900px;">
        <thead>
          <tr style="background:#1976d2;color:white;">
            <th>id</th>
            <th>date</th>
            <th>fcode</th>
            <th>fname</th>
            <th>dcode</th>
            <th>ddcode</th>
            <th>เข้า</th>
            <th>ออก</th>
						<th>print</th>  
						<th>สาขา</th>         
          </tr>
        </thead>
        <tbody>
    `;

    selectedRows.forEach(row => {
      html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.date}</td>
          <td>${row.fcode}</td>
          <td>${row.fname}</td>
          <td>${row.dcode}</td>
          <td>${row.ddcode}</td>
          <td>${row.in_qtn}</td>
          <td>${row.qtn}</td>
					<td>${row.print}</td>
          <td>${row.saka}-${row.skreal}</td>

        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;
    // return หรือ storeValue ไว้ก็ได้
    return html;
  }
}
