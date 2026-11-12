export const stages = ['REQUESTED', 'ACCEPTED', 'PICKED_UP', 'DELIVERED'];
export function advanceDelivery(stage) {
  const next = stages[stages.indexOf(stage) + 1];
  if (!next) throw new Error('Delivery is already complete');
  return next;
}
export function estimateFare(pickup, dropoff) {
  return pickup.trim() && dropoff.trim() ? 1200 : 0;
}
