import { Entry } from './Entry';
import { KeyMap } from './KeyMap';

/** Define the publication posted to tracking_items */
export interface PenaltyPub {
  /** this is an identity column like the Id in times, so handle the same way(0 or null) */
  trackingId: number | undefined;
  /** tracking_stations.Id – the station the device is assigned to */
  trackingStationId: string;
  /** uuid that is used to update the record if needed, as the trackingId is not good for this. */
  trackingItemId: string;
  /** the race the actual race is grouped with for timing - from the races list */
  timingRaceId: string;
  /** tracking_codes.Id - the actual race Id from races list */
  trackingCodeId: string;
  raceId: string;
  /** lane */
  laneNo: number;
  /** tracking_locations.id */
  locationId: string;
  /** 2(warning) */
  severity: number;
  /** number of penalties of this code / location */
  qty: string;
  unit: string; // Use ''
  /** if available, the name of person reporting the penalty */
  reporter: string;
  /** to delete an item, set this to 1, otherwise 0 */
  isDeleted: number;
  trackingComments: string;
  /** regattaId(ie, 1302) */
  trackingItemTimestamp: string;
  RMRSID: string;
  /** same as RMRSID */
  intRID: number;
}

export interface RMDocumentPub {
  /** key field of parent (tracking_items) record */
  trackingId?: number;
  /** The uuid of the parent tracking item */
  trackingItemId: string;
  /** The uuid of this document in blob storage */
  docId: string;
  /** The absolute URL for the document storage */
  docURL: string;
  /** The type of document.  pdf, jpg, png, mp4, mov, doc, wav, txt, rtf, etc */
  docType: string;
  /** Brief description of document */
  docDescription: string;
  /** Name, role of document provider */
  docSource: string;
  /** Document Application Source.  CrewTimer or RMMT */
  docAppSource: number;
  /** Document creation timestamp */
  docTimestamp: string;
  /** A filename looking string */
  originalFileName: string;
  /** 1=deleted, 0=not deleted */
  isDeleted: number;
  RMRSID: string;
}

export interface RMEvent {
  EventID: string;
  HeatID: string;
  RMRSID: number;
  flightId: string;
  isDeleted: number;
  lane: string;
  raceId: string;
  raceIdActual: string;
  timerHandle: string;
  timerLastUpdated: string;
}

export interface RMStation {
  Id: string;
  stationId: number;
  stationName: string;
  tracking_station_type: number;
  displayOrder: number;
}
export interface RMStationQuery {
  Id: string;
  RMRSID: number;
  stationId: number;
  stationName: string;
  userPW: string;
  isDeleted: number;
  intRID: number; // sort order in RM4
  timingSystemId: number;
  stationType: number;
  intervalNo: number;
}

export interface RMTrackingStationQuery {
  Id: string;
  stationId: number;
  stationName: string;
  intRID: number;
  isDeleted: number;
  password: string;
  RMRSID: number;
  trackingStationType: number;
}

export interface RMLocation {
  Id: string;
  description: string;
  locationCd: string;
  tracking_station_type: number;
}
export interface RMTrackingLocationsQuery extends RMLocation {
  intRID: string;
  isDeleted: string;
  RMRSID: number;
}

export interface RMTrackingCode {
  Id?: string; // RM only
  description: string;
  trackingCd: string;
  defaultQty: string;
  defaultSeverity: number;
  time?: string; // CrewTimer only
}
export interface RMTrackingCodesQuery extends RMTrackingCode {
  defaultQty: string;
  defaultSeverity: number;
  intRID: number;
  isDeleted: number;
  RMRSID: number;
  tracking_station_type: number;
  unit: string;
}
export interface RMConfig {
  lineups: Entry[];
  waypoints: string[];
  Stations: RMStation[];
  RaceType: string;
  CombinedRaces: KeyMap<string[]>;
  FlightRaces?: string[][];
  EventStarts: KeyMap<Entry[]>;
  RMRSID: string;
}

export interface RMStationDetail extends RMStation {
  locations: RMLocation[];
  codes: RMTrackingCode[];
}

export interface RMConfigSummary {
  PenaltyCodes: RMTrackingCode[];
  PenaltyLocations: RMLocation[];
  PenaltyStations: RMStation[];
  RMRSID: string;
  Stations: RMStationDetail[];
}

export interface RMFullConfig extends RMConfig {
  penalties: string;
  PenaltyLocations: string;
  RMConfig: RMConfigSummary;
}
