/**
 * PIXL Privacy Policy (from the app's generated legal documents).
 */
/**
 * One rendered block inside a section: paragraph, emphasised paragraph,
 * italic paragraph, sub-heading, bulleted list or numbered list. Inline
 * `**bold**` inside text is rendered bold.
 */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string }
  | { type: "sub"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ol"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  /** Omitted for guides that carry no dates (e.g. the Safety Guide) */
  lastUpdated?: string;
  effectiveDate?: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  "title": "PIXL Privacy Policy",
  "lastUpdated": "November 1, 2026",
  "effectiveDate": "November 1, 2026",
  "intro": [
    {
      "type": "p",
      "text": "PIXL (\"PIXL,\" \"we,\" \"us,\" or \"our\") provides a marketplace and technology platform that connects people seeking photography and media services with independent freelance photographers (\"PIXL Pros\")."
    },
    {
      "type": "p",
      "text": "This Privacy Policy explains how PIXL collects, uses, shares, stores, and protects personal information when you use the PIXL mobile application, website, and related services (collectively, the \"Services\")."
    },
    {
      "type": "p",
      "text": "This Privacy Policy applies to both people who request photography services (\"Users\" or \"Models\") and photographers who provide services through PIXL (\"PIXL Pros\")."
    }
  ],
  "sections": [
    {
      "heading": "1. Information We Collect",
      "blocks": [
        {
          "type": "p",
          "text": "The information we collect depends on how you use PIXL."
        },
        {
          "type": "sub",
          "text": "1.1 Account Information"
        },
        {
          "type": "p",
          "text": "When you create or maintain a PIXL account, we may collect:"
        },
        {
          "type": "list",
          "items": [
            "Full name",
            "Username",
            "Email address",
            "Phone number",
            "Password or authentication information",
            "Date of birth or age information",
            "Profile photograph",
            "Pronouns, if voluntarily provided",
            "Biography",
            "Website or social-media links",
            "Location or service area",
            "Account preferences",
            "Account type and role"
          ]
        },
        {
          "type": "p",
          "text": "PIXL may allow you to create a User/Model account, PIXL Pro account, or both."
        }
      ]
    },
    {
      "heading": "2. Photography and Media",
      "blocks": [
        {
          "type": "p",
          "text": "Photography and media are central to the PIXL Services."
        },
        {
          "type": "p",
          "text": "We may collect, process, transmit, and store:"
        },
        {
          "type": "list",
          "items": [
            "Photographs",
            "Videos",
            "Audio recordings",
            "Profile photographs",
            "Portfolio content",
            "Images uploaded by Users",
            "Images uploaded by PIXL Pros",
            "Images captured during PIXL bookings",
            "Media exchanged through PIXL",
            "Metadata associated with photographs or videos, where applicable"
          ]
        },
        {
          "type": "sub",
          "text": "2.1 Ownership of Photographs of Users/Models"
        },
        {
          "type": "p",
          "text": "PIXL is designed around the principle that the User/Model depicted in a photograph owns the photographs created of them through a PIXL booking, subject to applicable law and the specific terms of the applicable booking agreement."
        },
        {
          "type": "p",
          "text": "A PIXL Pro does not obtain ownership of a photograph solely because they took the photograph."
        },
        {
          "type": "p",
          "text": "Where applicable, PIXL Pros agree through their PIXL Pro Agreement to assign their copyright and other transferable intellectual-property rights in photographs created specifically for the User/Model to that User/Model after the applicable booking requirements have been satisfied."
        },
        {
          "type": "p",
          "text": "PIXL does not claim ownership of photographs merely because those photographs are uploaded to, transmitted through, or stored on PIXL."
        },
        {
          "type": "sub",
          "text": "2.2 PIXL Pro Portfolio and Pre-Existing Content"
        },
        {
          "type": "p",
          "text": "A PIXL Pro retains ownership of photographs, videos, logos, graphics, and other intellectual property that they created before using PIXL or independently of a PIXL booking."
        },
        {
          "type": "p",
          "text": "Uploading pre-existing work to a PIXL portfolio does not transfer ownership of that work to PIXL."
        },
        {
          "type": "sub",
          "text": "2.3 Use of Photographs for Portfolios and Promotion"
        },
        {
          "type": "p",
          "text": "A PIXL Pro may not publicly display, publish, sell, license, distribute, or use photographs depicting a User/Model for advertising, portfolio, promotional, or commercial purposes unless the User/Model has provided the applicable permission or another lawful basis exists."
        },
        {
          "type": "p",
          "text": "PIXL may provide Users/Models with controls allowing them to decide whether photographs from a booking may be used by the PIXL Pro for portfolio or promotional purposes."
        },
        {
          "type": "p",
          "text": "A User/Model's decision not to grant promotional permission will not prevent them from using ordinary PIXL photography services."
        }
      ]
    },
    {
      "heading": "3. Location Information",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may collect location information when you enable location services."
        },
        {
          "type": "p",
          "text": "Location information may be used to:"
        },
        {
          "type": "list",
          "items": [
            "Find PIXL Pros near you",
            "Determine a PIXL Pro's service area",
            "Match Users with available PIXL Pros",
            "Estimate travel distance",
            "Facilitate bookings",
            "Provide location-based features",
            "Improve the Services",
            "Protect the safety and security of Users and PIXL Pros"
          ]
        },
        {
          "type": "p",
          "text": "You may disable location permissions through your device settings."
        },
        {
          "type": "p",
          "text": "Certain PIXL features may not work correctly if location permissions are disabled."
        },
        {
          "type": "p",
          "text": "PIXL may also receive location information associated with a booking when necessary to provide the requested service."
        }
      ]
    },
    {
      "heading": "4. Transaction and Payment Information",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL collects information necessary to facilitate transactions between Users and PIXL Pros."
        },
        {
          "type": "p",
          "text": "This may include:"
        },
        {
          "type": "list",
          "items": [
            "Booking amount",
            "Service fees",
            "PIXL fees",
            "Refunds",
            "Payment status",
            "Payout status",
            "Transaction dates",
            "Transaction identifiers",
            "Billing information"
          ]
        },
        {
          "type": "p",
          "text": "Payments and photographer payouts may be processed by third parties such as Stripe and, if enabled, Venmo, Cash App Pay, or Klarna. Each provider may independently collect and use information for payment processing, identity verification, fraud prevention, compliance, and other purposes under its own privacy notices. Only payment methods actually offered in PIXL are applicable."
        },
        {
          "type": "p",
          "text": "When a payment processor collects payment-card information directly, PIXL generally receives payment identifiers, status, and limited payment-method details rather than the complete card number or security code. The processor may retain payment credentials to support saved payment methods where enabled and authorized."
        },
        {
          "type": "p",
          "text": "PIXL Pros may be required to provide additional information to establish a payout account and satisfy financial, identity-verification, tax, or legal requirements."
        }
      ]
    },
    {
      "heading": "5. PIXL Pro Verification Information",
      "blocks": [
        {
          "type": "p",
          "text": "To help maintain the safety and integrity of the PIXL marketplace, PIXL may collect information from PIXL Pros necessary to verify their identity or eligibility to provide services."
        },
        {
          "type": "p",
          "text": "Depending on the requirements of PIXL, our payment providers, or applicable law, this may include:"
        },
        {
          "type": "list",
          "items": [
            "Legal name",
            "Date of birth",
            "Government-issued identification information",
            "Tax information",
            "Business information",
            "Payment/payout information",
            "Identity-verification results",
            "Other information reasonably necessary to verify a PIXL Pro"
          ]
        },
        {
          "type": "p",
          "text": "Where verification or background-check services are provided by third parties, those providers may collect and process information under their own privacy policies."
        }
      ]
    },
    {
      "heading": "6. Communications",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may facilitate communications between Users and PIXL Pros."
        },
        {
          "type": "p",
          "text": "We may collect and process:"
        },
        {
          "type": "list",
          "items": [
            "Messages",
            "Booking communications",
            "Customer-service communications",
            "Reviews",
            "Reports",
            "Support requests",
            "Other communications sent through PIXL"
          ]
        },
        {
          "type": "p",
          "text": "PIXL may monitor or retain communications when reasonably necessary for:"
        },
        {
          "type": "list",
          "items": [
            "Providing customer support",
            "Resolving disputes",
            "Preventing fraud",
            "Investigating safety concerns",
            "Enforcing our Terms of Service",
            "Protecting Users, PIXL Pros, and PIXL",
            "Complying with applicable law"
          ]
        }
      ]
    },
    {
      "heading": "7. Device and Usage Information",
      "blocks": [
        {
          "type": "p",
          "text": "When you use PIXL, we may automatically collect information about your device and interaction with the Services."
        },
        {
          "type": "p",
          "text": "This may include:"
        },
        {
          "type": "list",
          "items": [
            "IP address",
            "Device type",
            "Device model",
            "Operating system",
            "App version",
            "Unique device identifiers",
            "Network information",
            "Crash reports",
            "Diagnostic information",
            "Browser information",
            "Features used",
            "Pages or screens viewed",
            "Interaction with the Services",
            "Approximate location derived from technical information"
          ]
        },
        {
          "type": "p",
          "text": "We use this information to operate, secure, troubleshoot, analyze, and improve PIXL."
        }
      ]
    },
    {
      "heading": "8. How PIXL Uses Information",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may use personal information to:"
        },
        {
          "type": "sub",
          "text": "Provide PIXL Services"
        },
        {
          "type": "list",
          "items": [
            "Create and manage accounts",
            "Connect Users with PIXL Pros",
            "Facilitate photography bookings",
            "Facilitate communications",
            "Process payments",
            "Process PIXL Pro payouts",
            "Deliver photographs and other media",
            "Provide customer support"
          ]
        },
        {
          "type": "sub",
          "text": "Improve PIXL"
        },
        {
          "type": "list",
          "items": [
            "Understand how Users and PIXL Pros use the application",
            "Improve application functionality",
            "Develop new features",
            "Diagnose technical problems",
            "Personalize certain aspects of the Services"
          ]
        },
        {
          "type": "sub",
          "text": "Safety and Security"
        },
        {
          "type": "list",
          "items": [
            "Prevent fraud",
            "Detect suspicious activity",
            "Investigate abuse",
            "Protect accounts",
            "Resolve disputes",
            "Protect Users and PIXL Pros",
            "Enforce PIXL policies"
          ]
        },
        {
          "type": "sub",
          "text": "Legal and Compliance Purposes"
        },
        {
          "type": "list",
          "items": [
            "Comply with applicable laws",
            "Respond to valid legal requests",
            "Maintain financial records",
            "Resolve disputes",
            "Enforce contracts and agreements"
          ]
        }
      ]
    },
    {
      "heading": "9. Automated Matching and Recommendations",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may use automated systems to help match Users with PIXL Pros."
        },
        {
          "type": "p",
          "text": "These systems may consider information such as:"
        },
        {
          "type": "list",
          "items": [
            "Location",
            "Availability",
            "Service type",
            "Photography specialties",
            "Booking requirements",
            "Ratings and reviews",
            "Previous booking information",
            "User preferences"
          ]
        },
        {
          "type": "p",
          "text": "These systems are intended to improve the marketplace experience and may be changed or improved over time."
        }
      ]
    },
    {
      "heading": "10. Information We Share",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may share information with the following categories of recipients."
        },
        {
          "type": "sub",
          "text": "10.1 Users and PIXL Pros"
        },
        {
          "type": "p",
          "text": "We may share information between Users and PIXL Pros when necessary to facilitate a requested service."
        },
        {
          "type": "p",
          "text": "For example, a PIXL Pro may receive information necessary to complete a booking, such as:"
        },
        {
          "type": "list",
          "items": [
            "User name",
            "Booking details",
            "Meeting/service location",
            "Relevant communications",
            "Information necessary to complete the requested photography service"
          ]
        },
        {
          "type": "p",
          "text": "Likewise, Users may receive information about a PIXL Pro, including:"
        },
        {
          "type": "list",
          "items": [
            "Name",
            "Profile",
            "Portfolio",
            "Photography specialties",
            "Ratings and reviews",
            "Service area",
            "Availability",
            "Other information the PIXL Pro chooses to make available through their profile"
          ]
        },
        {
          "type": "p",
          "text": "PIXL limits information shared between parties to information reasonably necessary to provide the Services or information intentionally made public through a user's profile."
        }
      ]
    },
    {
      "heading": "11. Service Providers",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may share information with companies that provide services necessary to operate PIXL."
        },
        {
          "type": "p",
          "text": "These may include providers of:"
        },
        {
          "type": "list",
          "items": [
            "Cloud hosting",
            "Database services",
            "Authentication",
            "Payment processing",
            "Identity verification",
            "Fraud prevention",
            "Photography/media storage",
            "Video and audio communications",
            "Streaming services",
            "Analytics",
            "Customer support",
            "Notifications",
            "Security services"
          ]
        },
        {
          "type": "p",
          "text": "These providers may process information on PIXL's behalf and subject to applicable contractual and legal requirements."
        }
      ]
    },
    {
      "heading": "12. Legal and Safety Disclosures",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may disclose information when we reasonably believe disclosure is necessary to:"
        },
        {
          "type": "list",
          "items": [
            "Comply with applicable law",
            "Respond to valid legal process",
            "Respond to governmental requests",
            "Protect the rights, property, or safety of PIXL",
            "Protect Users or PIXL Pros",
            "Investigate suspected fraud",
            "Investigate abuse or security incidents",
            "Enforce our agreements",
            "Prevent harm or illegal activity"
          ]
        }
      ]
    },
    {
      "heading": "13. Business Transfers",
      "blocks": [
        {
          "type": "p",
          "text": "If PIXL is involved in a merger, acquisition, financing, restructuring, bankruptcy, sale of assets, or similar transaction, personal information may be transferred as part of that transaction."
        },
        {
          "type": "p",
          "text": "Where required by applicable law, PIXL will provide appropriate notice regarding such changes."
        }
      ]
    },
    {
      "heading": "14. Cookies and Similar Technologies",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL's website and certain Services may use cookies, software development kits (SDKs), pixels, local storage, and similar technologies."
        },
        {
          "type": "p",
          "text": "These technologies may be used for:"
        },
        {
          "type": "list",
          "items": [
            "Authentication",
            "Account security",
            "Application functionality",
            "Preferences",
            "Analytics",
            "Performance monitoring",
            "Fraud prevention",
            "Improving the Services",
            "Advertising, where permitted by applicable law"
          ]
        },
        {
          "type": "p",
          "text": "Mobile applications may use technologies that perform functions similar to cookies."
        }
      ]
    },
    {
      "heading": "15. Data Retention",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL retains personal information for as long as reasonably necessary to:"
        },
        {
          "type": "list",
          "items": [
            "Provide the Services",
            "Maintain accounts",
            "Complete transactions",
            "Process payments and payouts",
            "Resolve disputes",
            "Prevent fraud",
            "Maintain security",
            "Comply with legal requirements",
            "Maintain legitimate business records",
            "Enforce our agreements"
          ]
        },
        {
          "type": "p",
          "text": "Retention periods may vary depending on the type of information and the reason it was collected."
        },
        {
          "type": "p",
          "text": "When information is no longer reasonably necessary, PIXL may delete, anonymize, or securely dispose of it, subject to applicable legal requirements."
        }
      ]
    },
    {
      "heading": "16. Account Deletion",
      "blocks": [
        {
          "type": "p",
          "text": "You may request deletion of your PIXL account and certain associated personal information."
        },
        {
          "type": "p",
          "text": "Where account creation is supported in the app, PIXL will provide an in-app method to initiate account deletion as required by applicable app-store rules. You may also contact support@onepixlatatime.com to request deletion. We may verify your request and retain limited information for legal, security, transaction, and dispute purposes as described below."
        },
        {
          "type": "p",
          "text": "Some information may need to be retained after account deletion when reasonably necessary for:"
        },
        {
          "type": "list",
          "items": [
            "Legal compliance",
            "Financial reporting",
            "Fraud prevention",
            "Security",
            "Dispute resolution",
            "Tax requirements",
            "Enforcement of agreements"
          ]
        },
        {
          "type": "p",
          "text": "Deleting your PIXL account does not necessarily delete information that another user has independently and lawfully obtained."
        }
      ]
    },
    {
      "heading": "17. Privacy and Photographs After Account Deletion",
      "blocks": [
        {
          "type": "p",
          "text": "Because PIXL is a marketplace where Users and PIXL Pros interact, deleting an account may not automatically remove photographs or other information that another party has already lawfully downloaded or received."
        },
        {
          "type": "p",
          "text": "PIXL will handle photographs and personal information remaining within PIXL's systems according to this Privacy Policy and applicable law."
        },
        {
          "type": "p",
          "text": "Nothing in this section changes ownership rights established by the applicable PIXL booking agreement."
        }
      ]
    },
    {
      "heading": "18. Security",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL uses reasonable technical and organizational safeguards designed to protect personal information."
        },
        {
          "type": "p",
          "text": "These safeguards may include:"
        },
        {
          "type": "list",
          "items": [
            "Encryption in transit",
            "Access controls",
            "Authentication controls",
            "Security monitoring",
            "Limited employee or contractor access",
            "Secure cloud infrastructure",
            "Measures designed to prevent unauthorized access"
          ]
        },
        {
          "type": "p",
          "text": "However, no method of transmission or electronic storage is completely secure."
        },
        {
          "type": "p",
          "text": "PIXL cannot guarantee that personal information will never be accessed, disclosed, altered, or destroyed through a security incident."
        }
      ]
    },
    {
      "heading": "19. Children's Privacy",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL accounts are intended for adults age 18 or older unless PIXL expressly permits a different age under its Terms and applicable law. Photos or videos from a booking may depict minors, including where an adult parent or guardian arranges the service. We do not knowingly permit children under 13 to create accounts or directly provide their personal information without legally required parental consent."
        },
        {
          "type": "p",
          "text": "PIXL does not knowingly collect personal information from children in violation of applicable privacy laws."
        },
        {
          "type": "p",
          "text": "If you believe a child has created an account or provided personal information contrary to these requirements, contact support@onepixlatatime.com. We will review the report and take appropriate steps, including deletion when required."
        }
      ]
    },
    {
      "heading": "20. Third-Party Services",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may integrate with third-party services, websites, applications, and platforms."
        },
        {
          "type": "p",
          "text": "Examples may include:"
        },
        {
          "type": "list",
          "items": [
            "Payment processors",
            "Cloud providers",
            "Authentication providers",
            "Video/audio providers",
            "Social-media platforms",
            "Analytics providers",
            "Identity-verification providers"
          ]
        },
        {
          "type": "p",
          "text": "Third-party services may collect and process information according to their own privacy policies."
        },
        {
          "type": "p",
          "text": "PIXL does not control the privacy practices of third parties that operate independently from PIXL."
        }
      ]
    },
    {
      "heading": "21. International Data Transfers",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL and its service providers may process or store information in countries other than the country where you live."
        },
        {
          "type": "p",
          "text": "When information is transferred internationally, PIXL will take reasonable steps to comply with applicable privacy laws and requirements governing international transfers."
        }
      ]
    },
    {
      "heading": "22. Your Privacy Choices and Rights",
      "blocks": [
        {
          "type": "p",
          "text": "Depending on where you live and applicable law, you may have rights concerning your personal information."
        },
        {
          "type": "p",
          "text": "These may include the right to:"
        },
        {
          "type": "list",
          "items": [
            "Access personal information",
            "Correct inaccurate information",
            "Request deletion",
            "Request information about how personal information is used",
            "Obtain a copy of certain information",
            "Withdraw certain consents",
            "Opt out of certain marketing communications",
            "Object to certain processing",
            "Exercise other rights provided by applicable law"
          ]
        },
        {
          "type": "p",
          "text": "PIXL may need to verify your identity before completing certain requests."
        }
      ]
    },
    {
      "heading": "23. Marketing Communications",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may send service-related communications necessary to operate your account."
        },
        {
          "type": "p",
          "text": "Examples include:"
        },
        {
          "type": "list",
          "items": [
            "Booking confirmations",
            "Payment notifications",
            "Security notifications",
            "Account notifications",
            "Important changes to the Services"
          ]
        },
        {
          "type": "p",
          "text": "Where permitted by law, PIXL may also send promotional communications."
        },
        {
          "type": "p",
          "text": "You may opt out of promotional communications using the unsubscribe mechanism included in the communication or through available account settings."
        },
        {
          "type": "p",
          "text": "You will continue to receive important transactional or security-related communications when necessary."
        }
      ]
    },
    {
      "heading": "24. Additional Disclosures for Identity and Payout Verification",
      "blocks": [
        {
          "type": "p",
          "text": "For PIXL Pros, a payment or verification provider may request government-issued ID images, a selfie or live image, legal name, date of birth, address, tax identifiers, business details, and bank-account details to verify identity, prevent fraud, satisfy financial regulations, and enable payouts. Some providers may analyze facial geometry or other biometric identifiers where legally permitted and appropriately disclosed or consented to. Whether such processing occurs depends on the verification flow actually used."
        },
        {
          "type": "p",
          "text": "Where a third-party provider collects identity documents directly, that provider generally controls its collection, security, and retention practices. PIXL may receive verification status, account eligibility, limited identity details, and compliance notices. PIXL should not be understood to retain copies of government IDs or biometric templates unless its implemented systems actually do so. The provider, its privacy notice, and any applicable biometric retention schedule or consent notice should be identified in the verification experience."
        },
        {
          "type": "p",
          "text": "Identity and financial records may be retained as necessary for verification, anti-fraud, financial reporting, tax, legal obligations, and disputes. The precise periods depend on the provider, applicable law, and the records involved. Contact us to ask about the information PIXL holds; requests concerning information held independently by a verification provider may also need to be directed to that provider."
        }
      ]
    },
    {
      "heading": "25. Booking Details, Media Access, and Content Visibility",
      "blocks": [
        {
          "type": "p",
          "text": "Booking information may include requested dates and times, session duration, service location, booking instructions, prices, booking status, and communications between participants. We disclose relevant booking information to the parties involved and service providers that help fulfill the booking."
        },
        {
          "type": "p",
          "text": "Public profile and portfolio media may be visible to other PIXL users or visitors where the relevant feature is enabled. Private messages and booking media are intended for authorized participants and service providers supporting delivery, security, and support, subject to applicable access controls. PIXL personnel or authorized contractors may access content when reasonably necessary for support, moderation, safety, legal compliance, or dispute resolution."
        },
        {
          "type": "p",
          "text": "If the Services permit users to download, export, or share media, copies outside PIXL may remain with recipients after deletion from PIXL. Uploaded photos and videos may contain metadata, including time or location information, depending on the file and processing performed. Users should avoid uploading sensitive information they do not wish to share."
        }
      ]
    },
    {
      "heading": "26. Notifications, Communications, and Permissions",
      "blocks": [
        {
          "type": "p",
          "text": "With the relevant device permissions, PIXL may send push notifications concerning bookings, messages, payments, security, and, where permitted, promotions. Notification providers may process device push tokens, delivery status, and limited message metadata. You can manage push-notification permissions in your device settings; essential service notices may still be sent by email or other available channels."
        },
        {
          "type": "p",
          "text": "PIXL may request camera, microphone, photo-library, and location permissions to support profile creation, media capture and upload, communications, or location-based bookings. Access depends on the features used and permissions granted. You can manage device permissions in operating-system settings, although some features may not function without them."
        }
      ]
    },
    {
      "heading": "27. Privacy Requests, State Rights, and Appeals",
      "blocks": [
        {
          "type": "p",
          "text": "Depending on applicable law and your location, you may have rights to confirm whether PIXL processes your personal data, access or correct it, obtain a portable copy, delete it, or opt out of certain targeted advertising, sales of personal data, profiling, or other covered processing. Certain requests may be subject to legal exceptions and identity verification."
        },
        {
          "type": "p",
          "text": "To submit a request, contact support@onepixlatatime.com and describe the right you wish to exercise. You may use an authorized agent where applicable law permits. We will respond within the timeframe required by applicable law, explain any denial where required, and provide an appeal process where required. If an appeal is available, you may submit it by replying to our response with “Privacy Appeal.”"
        },
        {
          "type": "p",
          "text": "PIXL does not state in this Policy that it sells personal data or uses cross-context behavioral advertising. If PIXL implements advertising or analytics practices that qualify as a sale, sharing, or targeted advertising under applicable law, PIXL must update this notice and provide any legally required opt-out mechanisms before or when those practices begin. Global Privacy Control signals will be honored where legally required and technically applicable."
        }
      ]
    },
    {
      "heading": "28. Retention, Backups, and Deletion Requests",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL retains account, booking, communication, media, transaction, and security records only as long as reasonably necessary for the purposes described in this Policy, subject to legal obligations and legitimate operational needs. Transaction, tax, fraud, and dispute records may be retained after an account is closed. Backups may persist for a limited period before routine overwrite or deletion."
        },
        {
          "type": "p",
          "text": "When a valid deletion request is completed, PIXL will remove or deidentify eligible personal information in active systems and instruct applicable processors as required by law. Information that must be retained will be restricted to the permitted purpose. Copies already downloaded by other users, or held by independent payment providers, may not be removable by PIXL."
        }
      ]
    },
    {
      "heading": "29. International Visitors and Legal Bases",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may process personal information in the United States and other countries where its service providers operate. If privacy laws requiring a lawful basis apply, the basis may include performing a contract (for bookings and accounts), complying with legal obligations (for tax and financial records), legitimate interests (for security and service improvement where permitted), or consent (for optional permissions and marketing where required)."
        },
        {
          "type": "p",
          "text": "Where required for international transfers, PIXL will use an applicable lawful transfer mechanism and provide any additional disclosures required for the affected jurisdiction. Users in jurisdictions with additional rights may contact support@onepixlatatime.com."
        }
      ]
    },
    {
      "heading": "30. External Links and Third-Party Privacy Notices",
      "blocks": [
        {
          "type": "p",
          "text": "Third-party services used by PIXL may include Supabase for backend and authentication infrastructure, and Stripe for payment processing and connected-account payouts. Other providers may support notifications, real-time communications, hosting, analytics, and media storage. These examples should be read as conditional on the providers actually deployed in PIXL."
        },
        {
          "type": "p",
          "text": "For independently controlled processing, review the applicable provider privacy notice, including Stripe at https://stripe.com/privacy and Supabase at https://supabase.com/privacy. PIXL is responsible for its own processing and does not control all independent third-party practices."
        }
      ]
    },
    {
      "heading": "31. Changes to This Privacy Policy",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL may update this Privacy Policy from time to time."
        },
        {
          "type": "p",
          "text": "When we make material changes, we may provide notice through:"
        },
        {
          "type": "list",
          "items": [
            "The PIXL application",
            "Our website",
            "Email",
            "Other reasonable communication methods"
          ]
        },
        {
          "type": "p",
          "text": "The \"Last Updated\" date at the beginning of this Privacy Policy indicates when the policy was most recently revised."
        }
      ]
    },
    {
      "heading": "32. Contact Us",
      "blocks": [
        {
          "type": "p",
          "text": "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, contact PIXL at:"
        },
        {
          "type": "sub",
          "text": "PIXL"
        },
        {
          "type": "p",
          "text": "Privacy Email: support@onepixlatatime.com"
        },
        {
          "type": "p",
          "text": "Website: OnePixlAtATime.com"
        }
      ]
    },
    {
      "heading": "33. Important Notice Regarding Photography Rights",
      "blocks": [
        {
          "type": "p",
          "text": "PIXL is designed to give Users/Models ownership of photographs created specifically for them through PIXL bookings, subject to applicable law and the applicable booking agreement."
        },
        {
          "type": "p",
          "text": "PIXL itself does not claim ownership of photographs simply because those photographs are captured, uploaded, transmitted, or stored through the Services."
        },
        {
          "type": "p",
          "text": "The rights and obligations concerning copyright ownership, licenses, portfolio use, commercial use, and other intellectual-property rights are further established in PIXL's Terms of Service and PIXL Pro Agreement."
        },
        {
          "type": "p",
          "text": "In the event of a conflict between this Privacy Policy and a separate written agreement concerning ownership of photographs, the applicable agreement will govern the ownership, and intellectual-property rights to the extent permitted by law."
        }
      ]
    }
  ]
};
