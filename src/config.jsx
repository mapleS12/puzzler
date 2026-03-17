/**
 * Test harness config.
 *
 * - USE_SOLUTIONS: toggle whether the app loads student problems or reference solutions
 *   (for screenshots / grading). You can also use the "Show solution" checkbox in the navbar
 *   to switch at runtime without editing this file.
 *
 * - PUZZLE_PIECES_P3: hard-coded puzzle pieces for Problem 3. Using config here avoids
 *   revealing the data-shaping answer from Problem 1 in the Problem 3 starter file.
 */

/** Initial value: load solutions (true) or problems (false). The navbar checkbox overrides this at runtime. */
export const USE_SOLUTIONS = false;

/** Hard-coded pieces for Problem 3 (different colors/labels than Problem 1). */
export const PUZZLE_PIECES_P3 = [
  { id: 0, label: "A", color: "#0ea5e9" }, // sky blue
  { id: 1, label: "B", color: "#22c55e" }, // green
  { id: 2, label: "C", color: "#f97316" }, // orange
  { id: 3, label: "D", color: "#a855f7" }, // purple
];
