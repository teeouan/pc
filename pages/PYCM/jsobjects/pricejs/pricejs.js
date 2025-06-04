export default {
  buildHtmlTable() {
    const selectedRows = Table1Copy3.selectedRows;
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
  <title>ราคาสินค้า</title>
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
      height: 20px;
      text-align: center;
      font-size: 20px;
      border-top: 1px solid #ccc;
    }
  </style>
</head>
<body>



<p style="text-align: center;"><strong><span style="color: rgb(226, 80, 65); font-size: 30px;">ราคาสินค้า</span><span style="font-size: 30px;"> </span></strong></p>

<center>

      <table border="1" cellspacing="0" cellpadding="4" 
        style="border-collapse:collapse;font-family:'Sarabun',Tahoma,Arial,sans-serif;font-size:20px;min-width:900px;">
        <thead>
          <tr style="background:#1976d2;color:white;">
            <th>dcode</th>
            <th>name</th>
						<th>ราคา</th>
       			<th>pic</th>         
          </tr>
        </thead>
        <tbody>
    `;

    selectedRows.forEach(row => {
      html += `
        <tr>
          <td>${row.dcode}</td>
          <td>${row.name}</td>
          <td>${row.retail}</td>
					<td><img src="${row.pic}" style="max-height: 100px;"></td>

        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
</center>
    `;
    // return หรือ storeValue ไว้ก็ได้
    return html;
  }
}
