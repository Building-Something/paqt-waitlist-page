import LegalLayout, { Section, P, List, Anchor } from './LegalLayout';
import { COMPANY } from '../lib/site';

const CancellationPolicy = () => {
  return (
    <LegalLayout title="Cancellation & Refund Policy" updated="October 2, 2026">
      <P className="text-white/60">
        This Cancellation &amp; Refund Policy explains how subscription cancellations, renewals,
        and refunds work for {COMPANY.name} (&ldquo;Paqt,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
      </P>

      <Section title="1. Subscription and Auto-Payment">
        <P>
          Paid features of the Service are offered on a recurring subscription basis. When you
          subscribe, your selected payment method is charged automatically on each billing cycle
          (for example, monthly) until you cancel.
        </P>
      </Section>

      <Section title="2. How to Cancel">
        <P>
          You can cancel your subscription at any time from your account settings, or by contacting
          our support team at <Anchor to={`mailto:${COMPANY.email}`}>{COMPANY.email}</Anchor>.
          Cancellation takes effect at the end of your current billing period; you will not be
          charged again after your cancellation, and your subscription will not renew.
        </P>
      </Section>

      <Section title="3. What Happens When You Cancel">
        <List
          items={[
            'Your subscription remains active until the end of the billing period you have already paid for (for example, if you cancel a monthly plan mid-month, you retain full access until the end of that month);',
            'No further automatic payments will be charged to your payment method;',
            'At the end of your paid tenure, your access to the paid features ends; and',
            'You will not be charged unless you explicitly purchase a new subscription.',
          ]}
        />
        <P>
          In short, like a video-streaming subscription: when you cancel, you keep your access for
          the period already paid for, and your automatic renewal is stopped from the following
          billing cycle.
        </P>
      </Section>

      <Section title="4. Renewal Requires a New Purchase">
        <P>
          Because the Service does not auto-renew after cancellation, if you wish to continue using
          the Service after your current tenure ends, you must purchase a new subscription. Re-subscribing
          will start a new subscription and a new billing cycle.
        </P>
      </Section>

      <Section title="5. Refund Policy">
        <List
          items={[
            'Fees for the current billing period are generally non-refundable, since we do not provide prorated refunds for partially used periods;',
            'If you cancel, you are not charged again for future periods, so the only amount paid is for the access you have already received;',
            'Refunds are provided where required by applicable law, including the Indian Consumer Protection Act, 2019;',
            'If the Service fails to function as described due to a fault attributable to us, we will provide a refund or credit of the affected period upon verification.',
          ]}
        />
      </Section>

      <Section title="6. Failed Payments">
        <P>
          If a payment fails, we will notify you and retry the payment. If the payment cannot be
          completed within a reasonable period, access to paid features may be suspended or
          terminated until the outstanding amount is settled.
        </P>
      </Section>

      <Section title="7. Price Changes">
        <P>
          We may revise subscription fees from time to time. If your plan&rsquo;s price changes,
          we will notify you in advance and give you the opportunity to cancel before the change
          takes effect.
        </P>
      </Section>

      <Section title="8. Contact Us">
        <P>
          Questions about cancellation or refunds? Contact our support team at{' '}
          <Anchor to={`mailto:${COMPANY.email}`}>{COMPANY.email}</Anchor>.
        </P>
        <P>
          Please also review our <Anchor to="/terms-of-service">Terms of Service</Anchor> and{' '}
          <Anchor to="/privacy-policy">Privacy Policy</Anchor>.
        </P>
      </Section>
    </LegalLayout>
  );
};

export default CancellationPolicy;