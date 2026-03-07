let jobs = [
  {
    id: "JOB-1001",
    jobTitle: "Senior Software Engineer",
    companyName: "TechCorp Innovations",
    location: "San Francisco, CA (Hybrid)",
    status: "offered",
    salaryRange: "$140,000 - $160,000",
    notes: "Completed the coding assessment. Awaiting scheduling for the final onsite round.",
  },

  {
    id: "JOB-1002",
    jobTitle: "Product Manager",
    companyName: "Innovate Inc.",
    location: "Remote",
    status: "Applied",
    salaryRange: "$120,000 - $145,000",
    notes: "Found via LinkedIn. Need to follow up next week if I don't hear back.",
  },
  {
    id: "JOB-1003",
    jobTitle: "Data Analyst",
    companyName: "DataDriven LLC",
    location: "New York, NY (Onsite)",
    status: "applied",
    salaryRange: "$90,000 - $110,000",
    
    notes: "Received standard rejection email. They went with an internal candidate.",
  },
  {
    id: "JOB-1004",
    jobTitle: "Frontend Web Developer",
    companyName: "WebWorks Agency",
    location: "Austin, TX (Onsite)",
    status: "Offered",
    salaryRange: "$115,000",
    contactPerson: {
      "name": "Sarah Jenkins",
      "email": "sarah@webworks.example.com",
      "role": "Engineering Manager"
    },
    notes: "Received offer letter! Negotiating for a slight bump in equity before signing.",
    url: "https://webworks.example.com/jobs/frontend"
  },
  {
    id: "JOB-1005",
    jobTitle: "DevOps Engineer",
    companyName: "CloudScale Systems",
    location: "Remote",
    status: "Ghosted",
    salaryRange: "$130,000 - $150,000",
    contactPerson: {
      "name": "David Miller",
      "email": "dmiller@cloudscale.example.com",
      "role": "Recruiter"
    },
    notes: "Had a great phone screen, but they never responded to my 3 follow-up emails.",
    url: "https://cloudscale.example.com/careers/devops"
  },
  {
    id: "JOB-1006",
    jobTitle: "UX Designer",
    companyName: "PixelPerfect",
    location: "London, UK (Remote)",
    status: "appiled",
    salaryRange: "£60,000 - £75,000",
    contactPerson: null,
    notes: "Portfolio review scheduled for next Tuesday.",
    url: "https://pixelperfect.example.co.uk/jobs"
  },
  {
    id: "JOB-1007",
    jobTitle: "Backend Developer",
    companyName: "FinanceHub",
    location: "Chicago, IL (Hybrid)",
    status: "Applied",
    salaryRange: "$125,000 - $140,000",
    contactPerson: null,
    notes: "Applied directly through their company portal. Referral provided by former colleague.",
    url: "https://financehub.example.com/careers"
  },
  {
    id: "JOB-1008",
    jobTitle: "Full Stack Engineer",
    companyName: "StartupX",
    location: "San Francisco, CA (Onsite)",
    status: "offerd",
    salaryRange: "$150,000 + Equity",
    contactPerson: {
      "name": "Alex Rivera",
      "email": "arivera@startupx.example.com",
      "role": "CTO"
    },
    notes: "Failed the technical interview. Need to brush up on dynamic programming.",
    url: "https://startupx.example.com/join-us"
  },
  {
    id: "JOB-1009",
    jobTitle: "Security Analyst",
    companyName: "CyberShield",
    location: "Washington, DC (Hybrid)",
    status: "Accepted",
    salaryRange: "$118,000",
    contactPerson: {
      "name": "Robert Cole",
      "email": "rcole@cybershield.example.com",
      "role": "HR Director"
    },
    notes: "Signed the offer! Start date is set for March 15th.",
    url: "https://cybershield.example.com/careers"
  },
  {
    id: "JOB-1010",
    jobTitle: "Mobile Developer (iOS)",
    companyName: "AppMakers",
    location: "Seattle, WA (Onsite)",
    status: "accepted",
    salaryRange: "$135,000 - $155,000",
    contactPerson: {
      "name": "Emily Chen",
      "email": "echen@appmakers.example.com",
      "role": "Lead Mobile Engineer"
    },
    notes: "Passed the initial HR screen. Technical interview with the Lead Engineer is tomorrow.",
    url: "https://appmakers.example.com/jobs/ios"
  },
  {
    id: "JOB-1011",
    jobTitle: "QA Automation Engineer",
    companyName: "TestFlight Inc",
    location: "Remote",
    status: "Withdrawn",
    salaryRange: "$95,000 - $110,000",
    contactPerson: null,
    notes: "Withdrew application because the required tech stack wasn't a good fit for my career goals.",
    url: "https://testflight.example.com/careers"
  },
  {
    id: "JOB-1012",
    jobTitle: "Data Scientist",
    companyName: "AI Solutions",
    location: "Boston, MA (Hybrid)",
    status: "Applied",
    salaryRange: "$145,000 - $170,000",
    contactPerson: null,
    notes: "Used a tailored resume highlighting my machine learning projects.",
    url: "https://aisolutions.example.com/careers/data-science"
  },
  {
    id: "JOB-1013",
    jobTitle: "Systems Administrator",
    companyName: "LocalGov Tech Services",
    location: "Madison, GA (Onsite)",
    status: "Offered",
    salaryRange: "$75,000",
    contactPerson: {
      "name": "Thomas Wright",
      "email": "twright@localgov.example.gov",
      "role": "IT Director"
    },
    notes: "Great benefits package. I have until Friday to accept the offer.",
    url: "https://localgov.example.gov/jobs"
  },
  {
    id: "JOB-1014",
    jobTitle: "Cloud Architect",
    companyName: "EnterpriseTech",
    location: "Dallas, TX (Hybrid)",
    status: "awiting",
    salaryRange: "$160,000 - $190,000",
    contactPerson: {
      "name": "Laura Bates",
      "email": "lbates@enterprisetech.example.com",
      "role": "Recruiting Coordinator"
    },
    notes: "Preparing a system design presentation for the panel interview next week.",
    url: "https://enterprisetech.example.com/careers/cloud"
  },
  {
    id: "JOB-1015",
    jobTitle: "Technical Writer",
    companyName: "DocsRUs",
    location: "Remote",
    status: "Applied",
    salaryRange: "$80,000 - $100,000",
    contactPerson: null,
    notes: "Submitted application this morning. Included links to three recent API documentation samples.",
    url: "https://docsrus.example.com/jobs/tech-writer"
  }
];