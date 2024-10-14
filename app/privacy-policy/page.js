"use client";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/app/privacy-policy/privacy.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrivacyPolicySeo from "./PrivacyPolicySeo";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageWrapper>
        <PrivacyPolicySeo />
        <section className={styles.section1}>
          <Container>
            <p>
              At LML Homes, located in Chennai, we are committed to protecting
              the privacy and security of our clients, website visitors, and
              service users. This Privacy Policy outlines the types of personal
              information we collect, how we use it, and the steps we take to
              ensure its protection.
            </p>
            <div>
              <h3>1. Information Collection and Use</h3>
              <p>
                We collect information through our website, during client
                interactions, and in connection with our apartment construction
                services. This may include:
              </p>
              <p>
                Personal identification information (Name, email address, phone
                number, etc.)
                <br />
                Demographic information (age, gender, occupation, etc.)
                <br />
                Property preferences and requirements
                <br />
                Financial information for transaction purposes
                <br />
                We use this information to:
                <br />
              </p>
              <p>
                Provide our construction services
                <br />
                Process transactions and maintain client accounts
                <br />
                Communicate with clients regarding their projects
                <br />
                Improve our services and offerings
                <br />
                Comply with legal requirements
                <br /><br />
<b>When you voluntarily send us an email or fill out a form, we will keep a record of this information in order to respond to you. We only collect information from you when you register on our site or complete a form. When filling out a form on our site, you may be asked to provide your name, email address, or phone number. However, you may visit our site anonymously. If you submit your personal information and contact details, we reserve the right to call, SMS, email, or message you via WhatsApp about our products and offers, even if your number has DND (Do Not Disturb) activated.</b>
              </p>
            </div>
            <div>
              <h3>2. Data Sharing and Disclosure</h3>
              <p>
                We do not sell, trade, or rent personal identification
                information to others. We may share generic aggregated
                demographic information not linked to any personal
                identification information with our business partners, trusted
                affiliates, and advertisers.
              </p>
              <p>
                We may use third-party service providers to help us operate our
                business and the website or administer activities on our behalf,
                such as sending out newsletters or surveys. We may share your
                information with these third parties for those limited purposes,
                provided you have given us your permission.
              </p>
            </div>
            <div>
              <h3>3. Security of Your Personal Information</h3>
              <p>
                We adopt appropriate data collection, storage, and processing
                practices and security measures to protect against unauthorized
                access, alteration, disclosure, or destruction of your personal
                information.
              </p>
            </div>
            <div>
              <h3>4. Web Browser Cookies</h3>
              <p>
                Our website may use "cookies" to enhance the user experience.
                Users may choose to set their web browser to refuse cookies or
                to alert them when cookies are being sent.
              </p>
            </div>
            <div>
              <h3>5. Your Acceptance of These Terms</h3>
              <p>
                By using our website and services, you signify your acceptance
                of this policy. If you do not agree to this policy, please do
                not use our services.
              </p>
            </div>
            <div>
              <h3>6. Changes to This Privacy Policy</h3>
              <p>
                LML Homes has the discretion to update this privacy policy at
                any time. We will notify users of any changes by posting the new
                Privacy Policy on our website.
              </p>
            </div>
            <div>
              <h3>7. Contacting Us</h3>
              <p>
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with LML Homes, please
                contact us at:
              </p>
              <h4>LML Homes</h4>
              <p>
                No.271 (Old No. 182) Mc Nichols Road, <br />
                Poonamalle High Road, Kilpauk, Chennai - 600 010.
                <br />
                India
                <br />
                enquiry@lmlhomes.in
                <br />
                +918760088999
                <br />
              </p>
            </div>
          </Container>
        </section>
      </PageWrapper>
    </>
  );
}
