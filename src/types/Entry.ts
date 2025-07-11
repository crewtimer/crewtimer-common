import KeyMap from './KeyMap';

export interface Entry extends KeyMap {
  AdjTime: string;
  Bow: string;
  Crew: string;
  CrewAbbrev: string;
  Event: string;
  EventAbbrev: string;
  EventNum: string;
  Gate?: string;
  Handicap?: number;
  Place: number;
  State?: string;
  Stroke: string;
  Time?: string;
  Timestamp?: number;
  json?: string;
  uuid?: string;
}
