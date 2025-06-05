export default {
  myVar1: [],
  myVar2: {},
  myFun1() {
    // สมมุติว่า Api1.data.results คือ array ที่ได้จาก API
    const filteredResults = Api2.data.results
      .filter(item => item.url && item.url.includes('panyachemipan.com'));

    // เก็บไว้ใน myVar1 (หรือจะ return เฉยๆ ก็ได้)
    this.myVar1 = filteredResults;
    return filteredResults;
  },
  async myFun2() {
    // Async: เก็บออบเจ็กต์ไว้ที่ storeValue
    const filteredResults = Api2.data.results
      .filter(item => item.url && item.url.includes('panyachemipan.com'));

    await storeValue('filteredResults', filteredResults);
    return filteredResults;
  }
}
