import { Connection } from "mongoose";


declare global {
  // avoid duplicate declarations by checking if already defined
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}
export { };