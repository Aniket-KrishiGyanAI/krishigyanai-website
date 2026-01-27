import React from "react";

function PrivacyPage() {
  return (
    <div className="max-w-screen-2xl lg:w-3/4 w-full mx-auto mt-28 mb-20 px-4 lg:px-10 text-textColor">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how KrishiGyan AI ("we," "us," or "our")
        collects, uses, protects, and discloses your Personal Information when
        you register for, subscribe to, or use our agricultural advisory
        platform and services (the "Service").
      </p>

      <p className="mb-8">
        By using our Service, you agree to the collection and use of your
        information in accordance with this policy.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect information necessary to personalize the advice provided by
        our AI models and manage your service subscription.
      </p>

      <h3 className="text-xl font-medium mb-2">
        A. Personal Information You Provide (Subscription & Account Data)
      </h3>
      <p className="mb-4">
        We collect PII when you register, subscribe, or contact us:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Identity & Contact Data:</strong> Your name, email address,
          phone number, and physical mailing address.
        </li>
        <li>
          <strong>Account Credentials:</strong> Username and encrypted password.
        </li>
        <li>
          <strong>Payment Data:</strong> Details required to process
          subscription fees. Sensitive financial data is handled by third-party
          gateways and not stored by us.
        </li>
      </ul>

      <h3 className="text-xl font-medium mb-2">
        B. Agricultural and Technical Data (Core Service Data)
      </h3>
      <p className="mb-4">
        To provide the AI advisory service, we collect specific, non-public data
        related to your operations:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Farm Data:</strong> Geolocation, land size, soil conditions,
          crop types, planting dates, irrigation methods, and historical yield
          data.
        </li>
        <li>
          <strong>Input Data:</strong> Fertilizers, pesticides, and other
          parameters you enter into our AI tools.
        </li>
        <li>
          <strong>Usage Data:</strong> Your platform interactions, reports
          generated, and tools used.
        </li>
      </ul>

      <h3 className="text-xl font-medium mb-2">
        C. Usage Data and Tracking Technologies
      </h3>
      <p className="mb-4">
        When you access the Service, we automatically collect data related to
        your visit:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Log Data:</strong> IP address, device type, browser info, and
          in-app activity.
        </li>
        <li>
          <strong>Cookies:</strong> Used to keep you logged in and improve
          platform performance.
        </li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. How We Use Your Information
      </h2>

      <p className="mb-4">We use the collected information to:</p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Service Delivery:</strong> Feed Farm Data into AI models to
          generate tailored advice, reports, and predictions.
        </li>
        <li>
          <strong>Account Management:</strong> Authenticate identity, manage
          subscriptions, and process billing.
        </li>
        <li>
          <strong>Platform Improvement & Research:</strong> Use anonymized and
          aggregated data to train AI models and improve accuracy.
        </li>
        <li>
          <strong>Communication:</strong> Send service updates, support
          notifications, and (with consent) marketing messages.
        </li>
        <li>
          <strong>Security and Compliance:</strong> Prevent fraud, maintain
          service stability, and comply with legal obligations.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Confidentiality and Sharing of Data
      </h2>

      <p className="mb-4">
        We treat the data you provide about your farm and operations as highly
        confidential.
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Anonymized Data Sharing:</strong> We may share aggregated and
          anonymized statistics for research or partnerships, without
          identifying you or your farm.
        </li>

        <li>
          <strong>Service Providers:</strong> Trusted third parties may access
          necessary data to perform essential functions (e.g., cloud hosting),
          under strict confidentiality agreements.
        </li>

        <li>
          <strong>Legal Compliance:</strong> Information may be disclosed if
          required by law, court order, or government authorities.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Data Security and Retention
      </h2>

      <h3 className="text-xl font-medium mb-2">Security</h3>
      <p className="mb-4">
        We implement administrative, technical, and physical safeguards to
        protect the sensitive agricultural and operational data we collect.
      </p>

      <h3 className="text-xl font-medium mb-2">Retention</h3>
      <p className="mb-4">
        We retain your account and farm data for as long as your subscription is
        active or required to deliver the Service and maintain historical
        reports. Data may also be retained to comply with legal obligations.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contact Us</h2>

      <p className="mb-10">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us:
        <br />
        <strong>Email:</strong> contact@krishigyanai.com
      </p>
    </div>
  );
}

export default PrivacyPage;
