export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    // สมมุติว่า Api2.data.results คือ array ที่ได้จาก API
    const filteredResults = Api2.data.results
      .filter(item => item.url && item.url.includes('panyachemipan.com'))
      .slice(0, 100); // จำกัดแค่ 100 รายการ

    this.myVar1 = filteredResults;
    return filteredResults;
  }
}
