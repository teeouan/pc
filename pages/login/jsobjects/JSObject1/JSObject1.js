export default {
  async Button1onClick () {
    const res = await Query1.run();
    
    if (res && res.length > 0) {
      showAlert("เข้าสู่ระบบสำเร็จ", "success");
      navigateTo("PYCM"); // เปลี่ยนชื่อหน้าตามที่คุณตั้งไว้
    } else {
      showAlert("รหัสผ่านไม่ถูกต้อง", "error");
    }
  }
}
