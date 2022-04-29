import { Database, DatabaseReference, get, push, ref } from "firebase/database";
import _ from "lodash";

export interface IChatStore {
  send(message: string): void;
  getMessages(): Promise<string[]>;
}

export class ChatStore implements IChatStore {
  //   private messages: string[] = [];
  private db: Database;
  private ref: DatabaseReference;

  constructor(db: Database) {
    this.db = db;
    this.ref = ref(db, "/messages");
  }

  public send(message: string) {
    push(this.ref, {
      message,
      //   timestamp: this.db.app.options.tim,
    });
  }

  public async getMessages(): Promise<string[]> {
    const snapshot = await get(this.ref);
    return _.values(snapshot.val()).map((it) => it.message);
  }
}
