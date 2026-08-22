import fs from 'fs';

const referralServicePath = 'c:\\Users\\HP\\Documents\\github\\ctn-backend\\src\\services\\referral.service.ts';
let content = fs.readFileSync(referralServicePath, 'utf-8');

content = content.replace(
  'async getMyReferralInfo(memberId: string | ObjectId): Promise<{\n    referralCode: string;\n    referralLink: string;\n    totalReferrals: number;\n    successfulReferrals: number;\n    pendingReferrals: number;\n    totalRewards: number;\n  }> {\n    const member = await this.memberRepo.findOneBy({ _id: memberOid, isDeleted: false });',
  `async getMyReferralInfo(memberId: string | ObjectId): Promise<{
    referralCode: string;
    referralLink: string;
    totalReferrals: number;
    successfulReferrals: number;
    pendingReferrals: number;
    totalRewards: number;
  }> {
    const memberOid = new ObjectId(memberId);
    const member = await this.memberRepo.findOneBy({ _id: memberOid, isDeleted: false });`
);

fs.writeFileSync(referralServicePath, content, 'utf-8');
console.log('Fixed getMyReferralInfo memberOid declaration');
