# Barrel 

The purpose of this project is to compare Jest and Vitest performance when
running a large number of files that include (or not) barrel imports. This is
achieved by creating a large number of identical tests for a single, simple
component.

The component is in `./src/components/Counter.tsx`. It has two antd import
statements. One is a barrel import, and the other loads one of its components
directly. Toggle between these import statements to observe test performance 
differences.

To create the test files, run `./scripts/copy-test-files`.

To run the tests with Jest run `npm run jest` and with Vitest run 
`npm run vitest`.

## Results

| Runner | Barrel | Non-Barrel |
|--------|--------|------------|
| Jest   | 53s    | 19s        |
| Vitest | 11s    | 10s        |
