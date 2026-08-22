import fs from 'fs';

const subscriptionServicePath = 'c:\\Users\\HP\\Documents\\github\\ctn-backend\\src\\services\\subscription.service.ts';
let subServiceContent = fs.readFileSync(subscriptionServicePath, 'utf-8');

if (!subServiceContent.includes('handleReferredUserSubscribed')) {
  subServiceContent = subServiceContent.replace(
    'await this.memberRepo.update(memberId, {\n      subscriptionId: new ObjectId(savedSub._id),\n      planId: new ObjectId(planId),\n      subscriptionStartDate: now,\n      subscriptionEndDate: end\n    });\n\n    return savedSub;',
    `await this.memberRepo.update(memberId, {
      subscriptionId: new ObjectId(savedSub._id),
      planId: new ObjectId(planId),
      subscriptionStartDate: now,
      subscriptionEndDate: end
    });

    try {
      const { ReferralService } = await import("./referral.service");
      await new ReferralService().handleReferredUserSubscribed(memberId);
    } catch (refErr: any) {
      console.error("[SubscriptionService] Referral reward hook notice:", refErr.message);
    }

    return savedSub;`
  );
  fs.writeFileSync(subscriptionServicePath, subServiceContent, 'utf-8');
  console.log('Successfully updated subscription.service.ts with handleReferredUserSubscribed');
} else {
  console.log('Already updated');
}
