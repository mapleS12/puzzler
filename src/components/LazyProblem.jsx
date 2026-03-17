import { Suspense, lazy } from "react";

function LazyProblem({ selectedId, problemModules, solutionModules, useSolutions }) {
  if (!selectedId) {
    return (
      <section>
        <p>
          Add <code>problem-N.jsx</code> files in <code>src/problems/</code> to
          see them here.
        </p>
      </section>
    );
  }

  const solutionPath = selectedId.replace("./problems/", "../solutions/");
  const moduleToLoad =
    useSolutions && solutionModules[solutionPath] ? solutionModules[solutionPath] : problemModules[selectedId];

  const LazyComponent = lazy(moduleToLoad);

  return (
    <Suspense
      fallback={
        <section>
          <p>Loading {useSolutions ? "solution" : "problem"}…</p>
        </section>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}

export default LazyProblem;
