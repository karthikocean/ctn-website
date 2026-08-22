import fs from 'fs';

const subscriptionServicePath = 'c:\\Users\\HP\\Documents\\github\\ctn-backend\\src\\services\\subscription.service.ts';
let subServiceContent = fs.readFileSync(subscriptionServicePath, 'utf-8');

const target = `    await this.memberRepo.update(memberId, {
      subscriptionId: new ObjectId(savedSub._id),
      planId: new ObjectId(planId),
      subscriptionStartDate: now,
      subscriptionEndDate: end
    });`;

const replacement = `    await this.memberRepo.update(memberId, {
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
    }`;

// Normalize line endings for replacement
const normalizedTarget = target.replace(/\r\n/g, '\n');
const normalizedContent = subServiceContent.replace(/\r\n/g, '\n');

if (normalizedContent.includes(normalizedTarget)) {
  const updated = normalizedContent.replace(normalizedTarget, replacement.replace(/\r\n/g, '\n'));
  fs.writeFileSync(subscriptionServicePath, updated, 'utf-8');
  console.log('Successfully inserted handleReferredUserSubscribed hook into activateSubscription');
} else {
  console.error('Target block not found');
}
