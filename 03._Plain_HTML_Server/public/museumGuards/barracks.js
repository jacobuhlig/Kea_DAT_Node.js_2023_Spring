const guards = ["Hank the tank", "Thomas the tank engine", "CEPTUS"];

export function addGuard(guard) {
  guards.push(guard);
  return guards;
}

export default {
  guards,
  addGuard,
};
