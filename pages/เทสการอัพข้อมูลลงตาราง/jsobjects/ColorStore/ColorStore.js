export default {
  init: () => {
    // เตรียม store ค่าเริ่มต้น (ถ้ายังไม่มี ก็ให้เป็น [])
    const initial = Table1.tableData || [];
    storeValue("colors", initial);
    return initial;
  },
  addColor: () => {
    // ดึงค่าปัจจุบัน (array) จาก store
    const old = appsmith.store.colors || [];
    // เก็บค่าใหม่ที่มาจาก form
    const next = old.concat([JSONForm1.formData]);
    // อัปเดต store
    return storeValue("colors", next).then(() => next);
  }
}
