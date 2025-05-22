export default {
  async Button1onClick () {
    // รัน Query1 ก่อน แล้วรอผลลัพธ์
    const res = await Query1.run();
    if(res && res.length > 0) {
    } else {
      showAlert("รหัสผ่านไม่ถูกต้อง", "error");
    }
  }
}