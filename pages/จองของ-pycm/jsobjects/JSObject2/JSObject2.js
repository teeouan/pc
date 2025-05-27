export default {
  updateMultipleNotes: async () => {
    const updates = Table1.updatedRows;

    for (let row of updates) {
      await Update1.run({
        id: row.id,
        note: row.note
      });
    }
  }
}
