export default {
  exportPdf() {
    const url = linkpycm.data[0]?.pdf;

    if (!url) {
      showAlert('ไม่พบลิงก์ PDF', 'error');
      return;
    }

    showAlert('จะเปิดไฟล์ใน 5 วินาที...', 'info');

    setTimeout(() => {
      navigateTo(url, '_blank');
    }, 5000);
  }
}
