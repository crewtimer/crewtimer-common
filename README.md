# CrewTimer Types and Utilities

This repository includes types and utilities that are shared among various CrewTimer subsystems. CrewTimer grew slowly over time with nearly all the code currently written in Typescript. As a result there are inconsistencies and overlap between types that may not be good design choices but reflect current implementations.

As time allows, this codebase will be cleaned and documented but these initial versions are put out there as-is to facilite migration of addtional CrewTimer modules to open source.

## Publishing a new npm version (maintainers only)

1. Update the version in package.json
2. First check for any errors by running `yarn prepublishOnly`
3. `npm login` as crewtimer
4. If no errors: `npm publish`
