import CommonHero from "../components/CommonHero";
import Pricing from '../components/Pricing';
import MembershipPlanGuide from "../components/MembershipPlanGuide";
import MembershipUpgrade from "../components/MembershipUpgrade";
import MembershipFAQ from "../components/MembershipFAQ";

export default function MembershipPlans() {
    return (
        <main>
            <CommonHero />
            <Pricing />
            {/* <MembershipPlanGuide />
            <MembershipUpgrade /> */}
            <MembershipFAQ />
        </main>
    );
}