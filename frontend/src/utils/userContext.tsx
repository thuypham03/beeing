import { createContext } from "react";
import { UserWithId } from "../../../common/db-types";

export const UserContext = createContext<{user: UserWithId| null, setUser: any}>(null);