export default {
  runUpdate: async () => {
    const row = Table1.updatedRows[0];
    const fields = row.updatedFields;
    const id = row.id;
    let setClauses = [];

    if (fields.note !== undefined) {
      setClauses.push(`note = '${fields.note.replace(/'/g, "\\'")}'`);
    }
    if (fields.print !== undefined) {
      setClauses.push(`print = '${fields.print.replace(/'/g, "\\'")}'`);
    }
    if (fields.faccode !== undefined) {
      setClauses.push(`faccode = ${fields.faccode}`);
    }

    if (setClauses.length === 0) {
      showAlert("ไม่มีการเปลี่ยนแปลง", "info");
      return;
    }

    const sql = `UPDATE \`2020\`.\`mayastock-in\` SET ${setClauses.join(', ')} WHERE id = ${id};`;
    console.log("SQL →", sql);

    return await UpdateRawQuery.run({ sql }); // <== ชื่อ query ต้องตรง!
  }
}
