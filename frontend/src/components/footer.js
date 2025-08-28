import React, { useState, useEffect } from "react";
import "./footer.css"; // we'll move the CSS there (see below)

import './LandingPage.css'; // CSS file import
// import visa from './Visa_Inc.-Logo.wine.png';
import { FaUserTie, FaUserSecret, FaUserNinja, FaUserAstronaut } from 'react-icons/fa'; // Added FaUserAstronaut icon

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveModal(null);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-links">
          <button
            className={`footer-link ${activeModal === "terms" ? "active" : ""}`}
            onClick={() => openModal("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className={`footer-link ${activeModal === "privacy" ? "active" : ""}`}
            onClick={() => openModal("privacy")}
          >
            Privacy Policy
          </button>
          <button
            className={`footer-link ${activeModal === "refund" ? "active" : ""}`}
            onClick={() => openModal("refund")}
          >
            Refund Policy
          </button>
          <button
            className={`footer-link ${activeModal === "security" ? "active" : ""}`}
            onClick={() => openModal("security")}
          >
            Security Policy
          </button>
          <button
            className={`footer-link ${activeModal === "delivery" ? "active" : ""}`}
            onClick={() => openModal("delivery")}
          >
            Delivery Policy
          </button>
        </div>
        <hr className="footer-divider" />
        <div className="copyright">
          © 2024 PaySignal. All rights reserved.
        </div>
        <div className="powerded_by">
            Powered by 
          <div className="logos">
            <img src="/Visa_Inc.-Logo.wine.png" alt="Logo 1" />
            <img src="/master_logo.png" alt="Logo 2" />
          </div>
        </div>
        <div className="country">
          <p>Country of merchant domicile</p>
          <div className="logos">
            <img src="/country.png" alt="Logo 1" />
          </div>
        </div>
      </footer>

      {/* Modal Overlays */}
      {activeModal && (
        <div
          className={`modal-overlay ${activeModal ? "active" : ""}`}
          onClick={closeModal}
        >
          <div
            className="policy-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-header">
              <h3>
                {activeModal === "terms" && "Terms & Conditions"}
                {activeModal === "privacy" && "Privacy Policy"}
                {activeModal === "refund" && "Refund Policy"}
                {activeModal === "security" && "Security Policy"}
                {activeModal === "delivery" && "Delivery Policy"}
              </h3>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>

            <div className="popup-content">
              {/* Replace with real text as needed */}
              {/* <p><strong>Last Updated:</strong> August 2025</p> */}
              {activeModal === "terms" && (
            <>
                <p><strong>Effective Date:</strong> August 2025</p>
                <p>
                Welcome to PaySignal. These Terms & Conditions (“Terms”) govern your access and 
                use of our remittance and currency conversion services. By using PaySignal, you 
                agree to these Terms.
                </p>

                <h4>1.1. Our Services</h4>
                <p>
                PaySignal enables users to send and receive money across borders and convert 
                currencies at competitive exchange rates.
                </p>
                <p>We act as a licensed payment services provider (not a bank).</p>

                <h4>1.2. Eligibility</h4>
                <p>You must be at least 18 years old and legally capable of entering into binding agreements.</p>
                <p>You agree to provide accurate and complete KYC information when requested.</p>

                <h4>1.3. Transactions</h4>
                <p>All transfers are subject to regulatory checks, anti-money laundering (AML), and fraud screening.</p>
                <p>We may delay, reject, or reverse transactions that violate laws or internal compliance rules.</p>
                <p>Exchange rates shown are real-time but may vary slightly until settlement.</p>

                <h4>1.4. Fees</h4>
                <p>
                PaySignal charges fees for remittance and currency conversion, disclosed before 
                confirming your transaction.
                </p>
                <p>Additional charges may apply if intermediary banks or mobile money providers deduct fees.</p>

                <h4>1.5. Liability</h4>
                <p>
                PaySignal is not responsible for delays caused by third-party banks, mobile operators, 
                or compliance checks.
                </p>
                <p>We are not liable for losses due to incorrect recipient details provided by you.</p>

                <h4>1.6. Account Suspension/Termination</h4>
                <p>
                We may suspend or terminate accounts that breach our Terms, involve fraud, 
                or fail regulatory checks.
                </p>

                <h4>1.7. Governing Law</h4>
                <p>
                These Terms are governed by the laws of <em>[Insert Country of Incorporation]</em>.
                </p>
            </>
            )}


              {activeModal === "privacy" && (
                <>
                  <p><strong>Effective Date:</strong> August 2025</p>
                    <p>
                    PaySignal respects your privacy. This Privacy Policy explains how we collect, 
                    use, and protect your data.
                    </p>

                    <h4>2.1. Data We Collect</h4>
                    <ul>
                    <li><strong>Personal information:</strong> Name, ID/passport, phone number, email, address.</li>
                    <li><strong>Financial information:</strong> Bank details, transaction history, card details (securely encrypted).</li>
                    <li><strong>Technical information:</strong> Device type, IP address, cookies.</li>
                    </ul>

                    <h4>2.2. How We Use Data</h4>
                    <ul>
                    <li>To process remittances and currency conversions.</li>
                    <li>To verify identity (KYC/AML compliance).</li>
                    <li>To improve our services and user experience.</li>
                    <li>To communicate important updates.</li>
                    </ul>

                    <h4>2.3. Sharing of Data</h4>
                    <ul>
                    <li>With regulators for compliance purposes.</li>
                    <li>With banks, payment processors, and mobile money operators to process transactions.</li>
                    <li>With fraud prevention agencies if required by law.</li>
                    </ul>

                    <h4>2.4. Data Security</h4>
                    <ul>
                    <li>We use bank-level encryption, tokenization, and secure storage of financial data.</li>
                    <li>Access is restricted to authorized personnel only.</li>
                    </ul>

                    <h4>2.5. Your Rights</h4>
                    <p>
                    You can request a copy of your data, correction of errors, or deletion 
                    (where legally allowed).
                    </p>
                </>
              )}

              {activeModal === "refund" && (
                <>
                  <p>Refunds are only possible if:</p>

                    <ul>
                    <li>The transaction has not yet been processed to the recipient.</li>
                    <li>There was an error on our side (duplicate charge, failed transfer).</li>
                    </ul>

                    <p>
                    Once funds are delivered to the recipient’s account or mobile wallet, 
                    refunds are not possible.
                    </p>

                    <p>
                    Refunds are processed within <strong>5–10 business days</strong> to the 
                    original payment method.
                    </p>

                    <p>
                    Fees and exchange rate differences may be deducted from refunds.
                    </p>
                </>
              )}

              {activeModal === "security" && (
                <>
                  <ul>
                    <li >All payments are processed over secure SSL connections.</li>
                    <li>PaySignal uses PCI DSS compliant systems for card transactions.</li>
                    <li>Two-factor authentication (2FA) is required for high-value transactions.</li>
                    <li>Continuous fraud monitoring and AML screening are in place.</li>
                    <li>Customer funds are safeguarded in regulated trust accounts.</li>
                  </ul>
                </>
              )}

              {activeModal === "delivery" && (
                <>
                  <ul>
                    <li>Domestic transfers: Typically within minutes to 24 hours.</li>
                    <li>
                        International transfers: 1–3 business days, depending on receiving country, 
                        currency, and partner banks.
                    </li>
                    <li>
                        Currency conversions: Instant at the displayed exchange rate upon 
                        transaction confirmation.
                    </li>
                    <li>
                        Delivery timelines may be affected by public holidays, bank cut-off times, 
                        or regulatory checks.
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
