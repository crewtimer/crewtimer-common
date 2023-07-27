import { Entry } from './Entry';
import { KeyMap } from './KeyMap';

import { RMStation, RMConfigSummary } from './RMTypes';
export type RaceType = 'Sprint' | 'Head';
export type ConfigSource = 'Local' | 'CrewTimer.com';

export interface PenaltyInfo {
  PenaltyCode: string;
  PenaltyComment: string;
  PenaltyLocation: string;
  PenaltyLocationCode: string;
  PenaltyQuantity: string;
  PenaltyTime: string;
}
export type LapStatus = 'TxPend' | 'TxActive' | 'Fail' | 'OK';

export interface DocAttachment {
  croppedImage: string;
  description: string;
  initialImage: string;
  name: string;
  State?: 'Deleted' | 'OK';
  Status?: LapStatus;
  uri: string;
  uuid: string;
}
export interface Lap extends Entry {
  Docs?: DocAttachment[];
  Duplicate?: boolean;
  index?: number;
  keyid: string;
  PenaltyCode?: string;
  PenaltyComment?: string;
  PenaltyLocation?: string;
  PenaltyLocationCode?: string;
  PenaltyQuantity?: string;
  PenaltySeverity?: string;
  PenaltyTime?: string;
  Reporter?: string;
  SequenceNum?: number;
  State?: 'Deleted' | string; // fixme - add other options
  stationType?: string;
  Status?: LapStatus;
  Time?: string; // Time the button was pressed
  Timestamp?: number; // Time of arrival on the server
  uuid: string;
}

export interface TxLapItem {
  data: Lap;
  op: 'store-lap';
  uuid: string;
}

export interface StopwatchConfig {
  clockTime: string;
  stopwatchTime: string;
  useStopwatchTimes: boolean;
}

export interface TrackingStation {
  name: string;
}

/** Public regatta settings */
export interface RegattaInfo {
  ClearTS: number;
  CombinedRaces?: string;
  CsvTimestamp?: string;
  CustomCodes?: string;
  DataSource?: string;
  Date: string;
  DayList: string[];
  Finished?: boolean;
  FlightRaces?: string[][];
  InfoText?: string;
  NtpServers?: string[];
  NumDays: string;
  PenaltyLocations?: string;
  PointsEngine: string;
  RMConfig: RMConfigSummary;
  RMPublishDisable: boolean;
  RaceType: RaceType;
  ResultWaypoints: string;
  ResultsPendOfficial?: boolean;
  ResultsPending?: boolean;
  Source: 'Local' | 'CrewTimer.com';
  Stations: RMStation[];
  Stopwatch?: StopwatchConfig;
  Title: string;
  Titles?: KeyMap<string>;
  TrackingStations?: TrackingStation[];
  Waypoints: string;
}

/** Private regatta settings
 * Stored as /regatta/<regatta>/settings/config
 */
export interface RegattaConfig extends RegattaInfo {
  DocUrl: string;
  MobileKey: string;
  MobilePins?: [{ pin: string; stationType: string }];
}

export interface QRCodeInfo {
  mobilePin: string;
  name: string;
  props: string; // base64 json object
  url: string;
  uuid: string;
}

export interface TimeSystem {
  [waypoint: string]: string /* alternate*/;
}
export interface TimeSystems {
  events: KeyMap<TimeSystem>;
  system: TimeSystem;
}

export interface ReloadResult {
  date: string; // ISO Date formatted
  status: string;
}

export interface ResultSummary {
  Date: string;
  InfoText: string;
  Name: string;
  NumDays: string;
  Public: string;
  Title: string;
}

export interface AdminSummary extends ResultSummary {
  NumEntries: number;
  Owner: string;
  RaceType: string;
}

export interface DBSettings {
  config: RegattaConfig;
  entries: string; // copy of csv spreadsheet config

  timeSystems?: TimeSystems;
  qrcodes?: KeyMap<QRCodeInfo>;
}

/** This represents data stored as /regatta/<mobileID>/ */
export interface DBRegatta {
  lapdata: Lap[];
  lapdataTS?: number;
  settings: DBSettings;
}

/** Base regatta data plus some cooked fields used when calculating results */
export interface RegattaData extends DBRegatta {
  /** List of events for mobile results calculations. */
  eventList?: KeyMap[];
  timeSystems?: TimeSystems;
}
