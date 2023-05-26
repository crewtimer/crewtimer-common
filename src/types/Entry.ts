import KeyMap from './KeyMap';

export interface Entry extends KeyMap {
  AdjTime?: string;
  Bow: string;
  Crew: string;
  CrewAbbrev: string;
  Event: string;
  EventAbbrev: string;
  EventNum: string;
  Gate?: string;
  Place?: string;
  State?: string;
  Stroke?: string;
  Time?: string;
  Timestamp?: number;
  uuid?: string;
}
