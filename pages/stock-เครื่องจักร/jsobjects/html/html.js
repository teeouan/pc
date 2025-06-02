export default {
  buildHtmlTable() {
    const selectedRows = Table2.selectedRows;
    if (!selectedRows.length) {
      showAlert('กรุณาเลือกข้อมูลในตารางก่อน', 'warning');
      return;
    }

    // สร้าง HTML Table
    let html = `

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Stock Report</title>
  <style>
    @page {
      size: A4;
      margin: 20mm 10mm 30mm 10mm;
    }

    body {
      font-family: 'Sarabun', sans-serif;
      font-size: 14px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid black;
      padding: 4px;
    }

    #footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      text-align: center;
      font-size: 20px;
      border-top: 1px solid #ccc;
    }
  </style>
</head>
<body>



<p style="text-align: center;"><strong><span style="color: rgb(226, 80, 65); font-size: 30px;">Stock-เข้า-ออก</span><span style="font-size: 30px;"> </span></strong></p>

<center>

      <table border="1" cellspacing="0" cellpadding="4" 
        style="border-collapse:collapse;font-family:'Sarabun',Tahoma,Arial,sans-serif;font-size:20px;min-width:900px;">
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
       			<th>pic</th>         
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
					<td><img src="${row.dpic}" style="max-height: 80px;"></td>

        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
			<div id="footer">
  ผู้รับของ: .................................................. | ผู้เช็คของ: ..................................................
</div>
</center>
    `;
    // return หรือ storeValue ไว้ก็ได้
    return html;
  }
}
