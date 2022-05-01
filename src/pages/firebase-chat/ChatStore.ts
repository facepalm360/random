import {
  Database,
  DatabaseReference,
  get,
  onValue,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { realtimeDb } from "../../fb";

export interface realtimeDBMessage {
  text: string;
  key: string;
  timestamp: number;
}
export interface IChatStore {
  messages: realtimeDBMessage[];
  send(message: string): void;
}

export class ChatStore implements IChatStore {
  messages: realtimeDBMessage[] = [];
  private ref: DatabaseReference;

  constructor(db: Database) {
    makeAutoObservable(this);
    this.ref = ref(db, "/messages");

    onValue(this.ref, (snapshot) => {
      const data = snapshot.val();
      this.loadMessages(snapshot.val());
    });
  }

  public send(text: string) {
    push(this.ref, {
      text,
      timestamp: serverTimestamp(),
    });
  }

  public async fetchMessages() {
    const snapshot = await get(this.ref);
    this.loadMessages(snapshot.val());
  }

  public async loadMessages(data: any) {
    console.log(data);
    this.messages = _.values(data).map((message, key) => ({ ...message, key }));
  }

  public get messagesReversed() {
    return this.messages.slice().reverse();
  }
}

export const chatStore = new ChatStore(realtimeDb);
