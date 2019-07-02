//---------------------------------------------------------------------------------
// <copyright file="requrst-utils.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Request processing (GET, POST), that is used for communnication with REST API
//--------------------------------------------------------------------------------
import { fetch } from "domain-task";
// Base domain
import domain from "./domain-config";

// GET request processing
export const getRequest = (url: string, externalUrl: boolean) => {
  // url - endpoint url
  // externalurl - determinate if url is from another domain
  if (externalUrl) {
    return fetch(url).then(response => response.json());
  } else {
    return fetch(domain + url).then(response => response.json());
  }
};

// POST request processing
export const postRequest = (url: string, externalUrl: boolean, data: any) => {
  return fetch(domain + url, {
    method: "post",

    body: JSON.stringify(data)
  }).then(response => response.json());
};
