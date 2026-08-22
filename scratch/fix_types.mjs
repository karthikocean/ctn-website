import fs from 'fs';

const referralServicePath = 'c:\\Users\\HP\\Documents\\github\\ctn-backend\\src\\services\\referral.service.ts';
let content = fs.readFileSync(referralServicePath, 'utf-8');

// 1. Update handleReferredUserSubscribed parameter type
content = content.replace(
  'async handleReferredUserSubscribed(referredMemberId: ObjectId): Promise<void> {',
  `async handleReferredUserSubscribed(referredMemberId: string | ObjectId): Promise<void> {
    const referredMemberOid = new ObjectId(referredMemberId);`
);
content = content.replace(
  'referredUserId: referredMemberId,',
  'referredUserId: referredMemberOid,'
);

// 2. Update awardSubscriptionReward parameter type
content = content.replace(
  'async awardSubscriptionReward(memberId: ObjectId, months: number = 1): Promise<void> {',
  `async awardSubscriptionReward(memberId: string | ObjectId, months: number = 1): Promise<void> {
    const memberOid = new ObjectId(memberId);`
);
content = content.replace(
  'findOneBy({ _id: memberId, isDeleted: false })',
  'findOneBy({ _id: memberOid, isDeleted: false })'
);

// 3. Update getMyReferralInfo parameter type
content = content.replace(
  'async getMyReferralInfo(memberId: ObjectId): Promise<',
  `async getMyReferralInfo(memberId: string | ObjectId): Promise<`
);
content = content.replace(
  'const member = await this.memberRepo.findOneBy({ _id: memberId, isDeleted: false });',
  `const memberOid = new ObjectId(memberId);
    const member = await this.memberRepo.findOneBy({ _id: memberOid, isDeleted: false });`
);

// 4. Update getReferralStats parameter type
content = content.replace(
  'async getReferralStats(referrerId: ObjectId): Promise<',
  `async getReferralStats(referrerId: string | ObjectId): Promise<`
);
content = content.replace(
  '{ $match: { referrerId } },',
  '{ $match: { referrerId: new ObjectId(referrerId) } },'
);

// 5. Update getReferralHistory parameter type
content = content.replace(
  'async getReferralHistory(\n    referrerId: ObjectId,',
  `async getReferralHistory(
    referrerId: string | ObjectId,`
);
content = content.replace(
  'const matchQuery: any = { referrerId };',
  'const matchQuery: any = { referrerId: new ObjectId(referrerId) };'
);

// 6. Update creditRewardPoints parameter type
content = content.replace(
  'private async creditRewardPoints(\n    memberId: ObjectId,\n    points: number,\n    actionType: "REFERRAL_REFERRER" | "REFERRAL_SIGNUP",\n    referenceId: ObjectId\n  ): Promise<void> {',
  `private async creditRewardPoints(
    memberId: string | ObjectId,
    points: number,
    actionType: "REFERRAL_REFERRER" | "REFERRAL_SIGNUP",
    referenceId: string | ObjectId
  ): Promise<void> {
    const memberOid = new ObjectId(memberId);
    const refOid = new ObjectId(referenceId);`
);
content = content.replace(
  '{ memberId }',
  '{ memberId: memberOid }'
);
content = content.replace(
  '{ _id: memberId }',
  '{ _id: memberOid }'
);
content = content.replace(
  'history.memberId = memberId;',
  'history.memberId = memberOid;'
);
content = content.replace(
  'history.referenceId = referenceId;',
  'history.referenceId = refOid;'
);

fs.writeFileSync(referralServicePath, content, 'utf-8');
console.log('Successfully updated ObjectId/string typing across referral.service.ts');
