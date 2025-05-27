export default {
  runUpdate: async () => {
    const row = Table1.updatedRows[0];
    const fields = row.updatedFields;

    const note = fields.note ?? row.note;
    const print = fields.print ?? row.print;
    const faccode = fields.faccode ?? row.faccode;
    const id = row.id;

    return await UpdateRawQuery.run({
      note,
      print,
      faccode,
      id
    });
  }
}
