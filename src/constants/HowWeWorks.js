import FreeConsultingImage from "../assets/How We Work images/free consult.svg";
import DocumentCollectionImage from "../assets/How We Work images/document collection.svg";
import ApplicationSubImage from "../assets/How We Work images/application sub.svg";
import VisaApprovalImage from "../assets/How We Work images/approval.svg";
export const howWeWorkSteps = [
  {
    step: "Step-1",
    title: "Free Consultation",
    description:
      "Begin with a free consultation to understand your goals and discuss your best visa options.",
    vectorIcon: FreeConsultingImage, // Replace with the appropriate vector/icon name
    actionButton: "Book a Consultation",
  },
  {
    step: "Step-2",
    title: "Document Collection & Review",
    description:
      "We assist in gathering the required documents and ensure everything is in order for your application.",
    vectorIcon: DocumentCollectionImage, // Replace with the appropriate vector/icon name
    actionButton: "Submit Your Documents",
  },
  {
    step: "Step-3",
    title: "Application Submission",
    description:
      "Our team completes your application forms and submits them to the appropriate authorities on your behalf.",
    vectorIcon: ApplicationSubImage, // Replace with the appropriate vector/icon name
    actionButton: "Start Your Application",
  },
  {
    step: "Step-4",
    title: "Visa Approval & Post-Visa Support",
    description:
      "Once approved, we provide post-visa support, helping with travel arrangements, accommodation, and settling in.",
    vectorIcon: VisaApprovalImage, // Replace with the appropriate vector/icon name
    actionButton: "Get Support",
  },
];
