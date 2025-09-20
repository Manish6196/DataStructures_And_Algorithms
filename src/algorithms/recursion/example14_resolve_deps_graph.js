/*
Problem Statement
The provided code defines a dependency graph, where each node (a, b, c, d) has a resolve function and an optional dependsOn array. The delay function simulates an asynchronous operation, such as a network request or database query, by pausing execution for a specified duration.

The goal is to write a function, resolveGraph, that takes this dependency graph and resolves all its nodes. This function should:

Respect dependencies: A node's resolve function can only be called after all its dependencies have been resolved. For example, b depends on a, so a must resolve first.

Pass resolved values: The resolved value of a dependency should be passed to the resolve function of the dependent node. For instance, the resolved value of b is passed as an argument to c's resolve function.

Resolve in parallel: Where there are no dependencies or where dependencies have already been met, nodes should be resolved in parallel to optimize performance. For example, once a has resolved, b can start, and since d depends on both b and c, it can only start after both b and c are complete.

Return all resolved values: The resolveGraph function should ultimately return a promise that resolves to an object containing all the resolved values, e.g., { a: 'A', b: 'B(A)', c: 'C(B(A))', d: 'D(B(A), C(B(A)))' }.
*/

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const graph = {
  a: {
    dependsOn: [],
    resolve: async () => {
      await delay(200);
      return "A";
    },
  },
  b: {
    dependsOn: ["a"],
    resolve: async ({ a }) => {
      await delay(200);
      return `B(${a})`;
    },
  },
  c: {
    dependsOn: ["a"],
    resolve: async ({ a }) => {
      await delay(200);
      return `C(${a})`;
    },
  },
  d: {
    dependsOn: ["b", "c"],
    resolve: async ({ b, c }) => {
      await delay(200);
      return `D(${b}, ${c})`;
    },
  },
};

const resolveGraph = async graph => {
  const result = {};

  const resolveDependency = async name => {
    if (result[name]) return result[name];
    const node = graph[name];
    let resolveArg = {};
    if (node.dependsOn.length) {
      const entries = await Promise.all(
        node.dependsOn.map(async dName => [
          dName,
          await resolveDependency(dName),
        ])
      );
      resolveArg = Object.fromEntries(entries);
    }
    result[name] = await node.resolve(resolveArg);
    return result[name];
  };

  await Promise.all(Object.keys(graph).map(name => resolveDependency(name)));

  return result;
};

resolveGraph(graph).then(result => console.log(result));
