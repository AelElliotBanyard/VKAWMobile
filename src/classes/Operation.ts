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

  public get id() {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get Date() {
    return this.date;
  }

  set Date(value: Date) {
    this.date = value;
  }

  get StartTime() {
    return this.startTime;
  }

  set StartTime(value: Timestamp) {
    this.startTime = value;
  }

  get EndTime() {
    return this.endTime;
  }

  set EndTime(value: Timestamp) {
    this.endTime = value;
  }

  get OperationManager() {
    return this.operationManager;
  }

  set OperationManager(value: string) {
    this.operationManager = value;
  }

  get AmountVk() {
    return this.amountVk;
  }

  set AmountVk(value: number) {
    this.amountVk = value;
  }

  get OperationVks() {
    return this.operationVks;
  }

  set OperationVks(value: string[]) {
    this.operationVks = value;
  }

  get Comment() {
    return this.comment;
  }

  set Comment(value: string) {
    this.comment = value;
  }

  get OperationTitle() {
    return this.operationTitle;
  }

  set OperationTitle(value: string) {
    this.operationTitle = value;
  }

  get State() {
    return this.state;
  }

  set State(value: boolean) {
    this.state = value;
  }
}
