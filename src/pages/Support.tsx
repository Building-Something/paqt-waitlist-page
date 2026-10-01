import LegalLayout, { Section, P, Anchor } from './LegalLayout';
import { COMPANY } from '../lib/site';

const Support = () => {
  return (
    <LegalLayout title="Customer Support" updated="October 2, 2026">
      <Section title="Contact Us">
        <P>
          We are happy to help with any questions about Paqt, your waitlist registration, your
          account, subscriptions, billing, or anything else. Reach us using any of the methods
          below.
        </P>
      </Section>
      <Section title="Registered Company Details">
        <P>
          <strong className="text-white/80">{COMPANY.name}</strong>
        </P>
        <P>Registered Office:</P>
        <P className="pl-5">{COMPANY.address}</P>
      </Section>
      <Section title="Email and Website">
        <P>
          Support email: <Anchor to={`mailto:${COMPANY.email}`}>{COMPANY.email}</Anchor>
        </P>
        <P>
          Website: <Anchor to={COMPANY.website}>{COMPANY.website}</Anchor>
        </P>
      </Section>
      <Section title="Support Hours">
        <P>
          Our support team is available on business days, Monday to Friday, from 10:00 AM to 7:00
          PM IST. We aim to respond to all support requests within 24 to 48 hours.
        </P>
      </Section>
    </LegalLayout>
  );
};

export default Support;