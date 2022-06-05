import { AllEndpoints } from "core-nanorave";
import { makeApi } from "sensible-core";
import { apiUrl } from "./util/apiUrl";
export const api = makeApi<AllEndpoints>({ apiUrl });
