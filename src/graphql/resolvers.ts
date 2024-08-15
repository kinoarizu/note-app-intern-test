import { dbPool } from "@/config/database";
import { Note } from "@/types/Note";

export const resolvers = {
  Query: {
    notes: async (parent: any, args: any) => {
      const result = await dbPool.query<Note>(
        `SELECT * FROM notes ORDER BY "createdAt" DESC`
      );
      return result.rows.map((row) => {
        const createdAt = new Date(row.createdAt).toISOString();
        return { ...row, createdAt };
      });
    },
    note: async (parent: any, args: any) => {
      const result = await dbPool.query<Note>(
        "SELECT * FROM notes WHERE id = $1",
        [args.id]
      );
      if (result.rows[0]) {
        const createdAt = new Date(result.rows[0].createdAt).toISOString();
        return { ...result.rows[0], createdAt };
      }
      return null;
    },
  },
  Mutation: {
    createNote: async (parent: any, args: any) => {
      const result = await dbPool.query<Note>(
        `INSERT INTO notes (title, body, "createdAt") VALUES ($1, $2, NOW()) RETURNING *`,
        [args.title, args.body]
      );
      const createdAt = new Date(result.rows[0].createdAt).toISOString();
      return { ...result.rows[0], createdAt };
    },
    updateNote: async (parent: any, args: any) => {
      const result = await dbPool.query<Note>(
        "UPDATE notes SET title = COALESCE($1, title), body = COALESCE($2, body) WHERE id = $3 RETURNING *",
        [args.title, args.body, args.id]
      );
      const createdAt = new Date(result.rows[0].createdAt).toISOString();
      return { ...result.rows[0], createdAt };
    },
    deleteNote: async (parent: any, args: any) => {
      const result = await dbPool.query(
        'DELETE FROM notes WHERE id = $1', 
        [args.id],
      );
      return (result.rowCount ?? 0) > 0;
    },
  },
};
