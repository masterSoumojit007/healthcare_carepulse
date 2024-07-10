export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Aadhaar Card",
  "Passport",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Ajaya Nand Jha",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Nandini Dey",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Suresh Joshi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Vikram Kalra",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Rina Mukherjee",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Hitesh Garg",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Jasmine Ghosh",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Shilpa Ghosh",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Aroop Mukherjee",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};