const initialState = {
  money: 100,
};

const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSIT_MONEY = "DEPOSIT_MONEY";
export function BankReducer(state = initialState, action) {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return {
        money: state.money - 10,
      };
    case DEPOSIT_MONEY:
      return {
        money: state.money + 10,
      };
    default:
      return state;
  }
}
