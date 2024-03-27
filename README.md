# CrewTimer Types and Utilities

This repository includes types and utilities that are shared among various CrewTimer subsystems.  CrewTimer grew slowly over time with nearly all the code currently written in Typescript.  As a result there are inconsistencies and overlap between types that may not be good design choices but reflect current implementations.

As time allows, this codebase will be cleaned and documented but these initial versions are put out there as-is to facilite migration of addtional CrewTimer modules to open source.

## CrewTimer Repositories

### Currently Open Source

* [crewtimer-common](https://github.com/crewtimer/crewtimer-common) - Common types and utilities for CrewTimer.
* [crewtimer-points](https://github.com/crewtimer/crewtimer-points) - A points engine for CrewTimer results.

### Coming Soon

* crewtimer-handicaps - A handicap engine for CrewTimer handicap calculations
* crewtimer-connect - Support for FinishLynx integration with CrewTimer and video review of placements.

### Future Open Source

* crewtimer-mobile - Mobile Apps for Andriod and iOS
* crewtimer-results - CrewTimer results website [https://crewtimer.com](https://crewtimer.com)
* crewtimer-admin - CrewTimer Admin interface [https://admin.crewtimer.com](https://admin.crewtimer.com)
* crewtimer-wisblock - Hardware devices such as the BLE Clicker and Mobile Horn (C++)

## Publishing a new npm version (maintainers only)

1. Update the version in package.json
2. First check for any errors by running ```yarn prepublishOnly```
3. ```npm login``` as crewtimer
4. If no errors: ```npm publish```
