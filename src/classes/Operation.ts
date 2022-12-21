import { Timestamp } from "firebase/firestore";

export class Operation {
  _id: string;
  startTime: Timestamp;
  date: Date;
  endTime: Timestamp;
  operationManager: string;
  amountVk: number;
  operationVks: string[];
  comment: string;
  operationTitle: string;
  state: boolean;

  constructor(
    _id: string,
    date: Date,
    startTime: Timestamp,
    endTime: Timestamp,
    operationManager: string,
    amountVk: number,
    operationVks: string[],
    comment: string,
    operationTitle: string,
    state: boolean
  ) {
    this._id = _id;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.operationManager = operationManager;
    this.amountVk = amountVk;
    this.operationVks = operationVks;
    this.comment = comment;
    this.operationTitle = operationTitle;
    this.state = state;
  }
}
