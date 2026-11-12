import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceDelivery, estimateFare } from './logic.js';
test('delivery can move through the full client-to-rider journey',()=>{let stage='REQUESTED';stage=advanceDelivery(stage);assert.equal(stage,'ACCEPTED');stage=advanceDelivery(stage);assert.equal(stage,'PICKED_UP');stage=advanceDelivery(stage);assert.equal(stage,'DELIVERED');});
test('completed delivery cannot be advanced again',()=>{assert.throws(()=>advanceDelivery('DELIVERED'),/already complete/);});
test('fare estimate is only returned when both locations exist',()=>{assert.equal(estimateFare('Molyko','Soppo'),1200);assert.equal(estimateFare('','Soppo'),0);});
