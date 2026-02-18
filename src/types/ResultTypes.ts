import { Event, EventList } from './Event';
import { KeyMap } from './KeyMap';
import { RegattaInfo, TrackingStation } from './ServerTypes';
export interface EntryProgressItem {
  c?: string; // Control station status (Launch, etc)
  e?: string; // exception status (DNS, DNF, etc)
  s: string; // waypoint status
}

export interface Progress {
  S: KeyMap<EntryProgressItem>; // index by eventId
  Waypoints: string[];
  TrackingStations: string[];
}

export interface ResultRegattaInfo {
  Admins: string;
  ClearTS: number;
  CombinedRaces: string;
  CustomCodes: string;
  DayList: string[];
  DataSource: string;
  Date: string;
  Finished: boolean;
  FlightRaces: string;
  HasRoster: boolean;
  InfoText: string;
  LogoURL: string;
  Name: string;
  NumDays: string;
  NumEntries: number;
  NumEvents: number;
  Owner: string;
  PenaltyLocations: string;
  PointsEngine: string;
  Public: boolean;
  RaceType: string;
  ResultDigits: string;
  ResultOmitCols: string[];
  ResultsPending: boolean;
  ResultsPendOfficial: boolean;
  ResultWaypoints: string;
  RMPublishDisable: boolean;
  ShowProgress: boolean;
  Title: string;
  Titles: KeyMap<string>;
  TrackingStations?: TrackingStation[];
  Waypoints: string;
  json?: string;
}

/**
 * Contents of /results/<regattaId> in database
 */
export interface Results {
  lastUpdatedEvent: string;
  P: Progress;
  regattaInfo: ResultRegattaInfo;
  results: Event[];
  lastUpdated?: {
    [waypoint: string]: { Bow: string; EventNum: string; Time: string; timestamp: number };
  };
}

/**
 * Raw internal calculation results
 */
export interface ResultsCalc extends Results {
  ResultOmitCols?: string[];
  mobileUpdates?: KeyMap;
  ResultsPendOfficial?: boolean;
}

export interface MobileSettings {
  eventList: EventList;
  info: RegattaInfo;
}
/**
 * Data that comes from the cloud via /mobile/<regatta>
 */
export interface MobileConfig {
  P: Progress;
  settings: MobileSettings;
}

export interface CrewTimerHttpResponse {
  list: KeyMap[] | { error: { message: string } };
}
