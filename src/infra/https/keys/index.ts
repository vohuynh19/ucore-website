import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { userQueryKeys } from "./user";

const queryKeys = mergeQueryKeys(userQueryKeys);

export default queryKeys;
