import {
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  Withdraw
} from "../generated/MasterChef/MasterChef"
import { TransferEntity } from "../generated/schema"
 
export function handleDeposit(event: Deposit): void {
  let transferEntity = new TransferEntity(event.transaction.hash.toHex());
  transferEntity.type = 'deposit';
  transferEntity.time = event.block.timestamp;
  transferEntity.amount = event.params.amount;
  transferEntity.src = event.transaction.from;
  transferEntity.save();
}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleWithdraw(event: Withdraw): void {
  let transferEntity = new TransferEntity(event.transaction.hash.toHex());
  transferEntity.type = 'withdraw';
  transferEntity.time = event.block.timestamp;
  transferEntity.amount = event.params.amount;
  transferEntity.src = event.transaction.from;
  transferEntity.save();
}
