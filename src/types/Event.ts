import { Entry } from './Entry';

export interface Event {
  Day: string;
  DispOrder: number[];
  entries: Entry[];
  Event: string;

  eventIndex: number; // Internal to results calc
  EventInfo: string;
  eventItems: Entry[];
  eventKey: string; // used by mobile app internal results calc
  EventNum: string;
  Finished: boolean;
  Official: boolean;
  RaceType: 'Head' | 'Sprint';
  Start: string;
  TZOffset: number;
  json?: string;
}

export type EventList = Event[];
