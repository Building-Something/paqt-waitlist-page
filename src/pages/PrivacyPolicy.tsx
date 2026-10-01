import LegalLayout, { Section, Sub, P, List, Anchor } from './LegalLayout';
import { COMPANY } from '../lib/site';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" updated="October 2, 2026">
      <P className="text-white/60">
        This Privacy Policy describes how {COMPANY.name} (&ldquo;Paqt,&rdquo; &ldquo;we,&rdquo;
        &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, discloses, and secures your
        information when you visit our website and use our waitlist and subscription service
        (collectively, the &ldquo;Service&rdquo;). By using the Service, you consent to the
        practices described in this policy.
      </P>

      <Section title="1. Information We Collect">
        <Sub title="Information you provide">
          <P>
            When you join our waitlist, we collect your email address. When you create an account
            or subscribe to paid features, we collect your name, email address, billing details,
            and any content you submit through the Service (such as contracts and project
            information).
          </P>
        </Sub>
        <Sub title="Information collected automatically">
          <P>
            We collect certain information automatically, including your IP address, browser type
            and version, device information, pages visited, referring URLs, and timestamps. This is
            collected through cookies and similar technologies, including Google Analytics and
            Vercel Web Analytics.
          </P>
        </Sub>
        <Sub title="Payment information">
          <P>
            We do not store credit or debit card numbers. Payment information is collected and
            processed directly by our payment gateway provider.
          </P>
        </Sub>
      </Section>

      <Section title="2. How We Use Your Information">
        <P>We use the information we collect to:</P>
        <List
          items={[
            'Provide, operate, maintain, and improve the Service;',
            'Manage waitlist registrations, accounts, subscriptions, billing, and payments;',
            'Respond to your inquiries and provide customer support;',
            'Send you service updates, product announcements, and promotional communications (you may opt out at any time);',
            'Analyze usage trends to improve features and performance;',
            'Detect, prevent, and address fraud, security, or technical issues; and',
            'Comply with legal obligations.',
          ]}
        />
      </Section>

      <Section title="3. Sharing and Disclosure">
        <P>
          We do not sell your personal information. We may share your information only in the
          following circumstances:
        </P>
        <List
          items={[
            'With service providers who process data on our behalf, including Vercel (hosting and analytics), MongoDB Atlas (database), Google Analytics (usage analytics), and payment gateway providers (payment processing);',
            'When required by law, regulation, legal process, or governmental request;',
            'To protect the rights, property, or safety of Paqt, our users, or the public; or',
            'In connection with a merger, acquisition, or sale of assets, subject to continued confidentiality protections.',
          ]}
        />
        <P>
          The method of disclosure to third-party processors is limited to what is strictly
          necessary to provide the Service, and we require those processors to protect your data in
          accordance with applicable law.
        </P>
      </Section>

      <Section title="4. Cookies and Analytics">
        <P>
          We use cookies and similar technologies, as well as Google Analytics and Vercel Web
          Analytics, to understand how visitors use the Service and to improve it. You can control
          cookies through your browser settings. Please note that disabling cookies may affect
          certain features of the Service.
        </P>
      </Section>

      <Section title="5. Data Security">
        <P>
          We implement reasonable technical and organizational measures to safeguard your
          information, including data transmitted over a secure (HTTPS/TLS) connection,
          encryption of sensitive data at rest, restricted access controls for our team, and
          periodic review of our security practices in line with industry standards. While no
          method of transmission over the internet is completely secure, we work to protect your
          data to a reasonable and commercially acceptable standard.
        </P>
      </Section>

      <Section title="6. Data Retention">
        <P>
          We retain your personal information only for as long as necessary to provide the Service,
          comply with legal obligations, resolve disputes, and enforce our agreements. Waitlist
          data is retained until you request deletion or the waitlist is retired. Where you request
          deletion of your account, we delete or de-identify your information, subject to legal
          retention requirements.
        </P>
      </Section>

      <Section title="7. Your Rights">
        <P>
          Subject to applicable law, including the Digital Personal Data Protection Act, 2023 of
          India and other applicable data protection laws, you have the right to access, correct,
          update, or delete your personal information, and to withdraw consent to processing where
          processing is based on consent. To exercise these rights, contact us at{' '}
          <Anchor to={`mailto:${COMPANY.email}`}>{COMPANY.email}</Anchor>.
        </P>
      </Section>

      <Section title="8. International Transfer">
        <P>
          Your information may be processed and stored in India and in other jurisdictions where
          our service providers operate. By using the Service, you consent to such transfers
          subject to measures required under applicable law.
        </P>
      </Section>

      <Section title="9. Children&rsquo;s Privacy">
        <P>
          The Service is not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children. If you believe a child has provided us their
          information, please contact us so we can delete it.
        </P>
      </Section>

      <Section title="10. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. Material changes will be notified by
          posting the revised policy on this page with an updated &ldquo;Last updated&rdquo; date.
          Your continued use of the Service after changes take effect constitutes acceptance of the
          revised policy.
        </P>
      </Section>

      <Section title="11. Contact Us">
        <P>
          If you have questions about this Privacy Policy or our data practices, contact us at{' '}
          <Anchor to={`mailto:${COMPANY.email}`}>{COMPANY.email}</Anchor>, at{' '}
          {COMPANY.phoneIndia}, or at our registered office: {COMPANY.address}.
        </P>
      </Section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;