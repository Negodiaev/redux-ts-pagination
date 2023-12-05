import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

// eslint-disable-next-line
export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};
