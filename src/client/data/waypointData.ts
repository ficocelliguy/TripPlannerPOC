import { APOLLO_URL } from "../config/config";
import { DocumentNode, print } from "graphql";
import { AllLocations, AllPoints } from "./queries";

/*
 * Use fetch API to run graphql queries or mutations
 */
export function runQuery(query: DocumentNode) {
  let resolve: (s: string) => void, reject: (s: string) => void;
  const result = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  fetch(APOLLO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: print(query),
    }),
  })
    .then(async (res) => await res.json())
    .then((res) => {
      console.log(`Fetched data: ${res.data}`);
      resolve(JSON.stringify(res.data));
    })
    .catch((e) => {
      const error = `Error fetching data: ${e}`;
      console.error(error);
      reject(error);
    });

  return result;
}

export function getAllPoints() {
  return runQuery(AllPoints);
}

export function getAllLocations() {
  return runQuery(AllLocations);
}
