import { APOLLO_URL } from "../config/config";
import { gql } from "graphql-tag";
import { DocumentNode, print } from "graphql";

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

const allPoints = gql`
  query {
    allPoints {
      id
      lat
      lng
    }
  }
`;

const allLocations = gql`
  query {
    allLocations {
      id
      point {
        id
        lat
        lng
      }
      name
      description
      url
      image
    }
  }
`;

export function getAllPoints() {
  return runQuery(allPoints);
}

export function getAllLocations() {
  return runQuery(allLocations);
}
