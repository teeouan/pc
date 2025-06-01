export default {
  exportPDF: () => {
    const data = Table2.selectedRows;
    if (!data.length) {
      showAlert("กรุณาเลือกข้อมูลอย่างน้อย 1 แถว", "warning");
      return;
    }
    // ใช้ jsPDF
    const doc = new jspdf.jsPDF();

    // header
    const headers = [["id", "date", "fcode", "fname", "dcode", "ddcode", "ddname", "ddeng", "dtype"]];
    const rows = data.map(row => [
      row.id, row.date, row.fcode, row.fname, row.dcode, row.ddcode, row.ddname, row.ddeng, row.dtype
    ]);

    // ใช้ autoTable
    doc.autoTable({
      head: headers,
      body: rows,
      startY: 20
    });

    doc.save("selected_rows.pdf");
  }
}
