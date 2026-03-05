export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  quiz: { question: string; options: string[]; correct: number };
}

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Introduction to WhatsApp",
    description: "Learn how to use WhatsApp for business communication",
    icon: "💬",
    content: "WhatsApp is a free messaging app used by billions worldwide. For women entrepreneurs, WhatsApp Business lets you create a business profile, set up a product catalog, send automated replies, and communicate directly with customers. You can create broadcast lists to send updates to many customers at once and use WhatsApp Status to showcase your products daily.",
    quiz: { question: "What can WhatsApp Business help you do?", options: ["Play games", "Create a product catalog and talk to customers", "Edit photos", "Write documents"], correct: 1 },
  },
  {
    id: "2",
    title: "Introduction to PhonePe",
    description: "Learn digital payments with PhonePe UPI",
    icon: "📱",
    content: "PhonePe is a digital payment app based on UPI (Unified Payments Interface). It allows you to send and receive money instantly using just a mobile number or QR code. As a woman entrepreneur, you can accept payments from customers without needing a card machine. You can also pay suppliers, recharge mobile, pay bills, and even invest in mutual funds and gold — all from your phone.",
    quiz: { question: "What technology does PhonePe use for payments?", options: ["Credit cards only", "UPI (Unified Payments Interface)", "Cheque books", "Western Union"], correct: 1 },
  },
  {
    id: "3",
    title: "Introduction to Net Banking",
    description: "Manage your business finances online",
    icon: "🏦",
    content: "Net Banking (Internet Banking) lets you access your bank account from a computer or phone browser. You can check your balance, transfer money (NEFT, RTGS, IMPS), pay bills, download statements, and apply for loans — without visiting the bank. For women entrepreneurs, net banking saves time and helps you manage business finances efficiently from anywhere.",
    quiz: { question: "What can you do with Net Banking?", options: ["Only check balance", "Transfer money, pay bills, and manage finances online", "Only withdraw cash", "Only deposit money"], correct: 1 },
  },
  {
    id: "4",
    title: "Google Pay & Digital Wallets",
    description: "Accept and make payments digitally",
    icon: "💳",
    content: "Google Pay is another popular UPI-based payment app. Digital wallets like Paytm store money electronically for quick payments. As a woman entrepreneur, you can generate your own QR code for your shop or business, accept contactless payments, track all transactions digitally, and even get small business loans based on your payment history.",
    quiz: { question: "How can a QR code help your business?", options: ["It decorates your shop", "Customers can scan it to pay you instantly", "It replaces your signboard", "It stores your products"], correct: 1 },
  },
  {
    id: "5",
    title: "Social Media for Business",
    description: "Use Instagram & Facebook to grow your brand",
    icon: "📸",
    content: "Instagram and Facebook are powerful free tools for women entrepreneurs. You can create a business page, post product photos and reels, run affordable ads targeting your local area, and sell directly through Instagram Shop or Facebook Marketplace. Use hashtags to reach more people and engage with customers through comments and stories to build trust and loyalty.",
    quiz: { question: "Which feature helps you sell products on Instagram?", options: ["Instagram Timer", "Instagram Shop", "Instagram Alarm", "Instagram Calculator"], correct: 1 },
  },
  {
    id: "6",
    title: "Government Portals for Women Entrepreneurs",
    description: "Access schemes, loans, and support from the government",
    icon: "🏛️",
    content: "The Indian government offers several portals and schemes for women entrepreneurs. Udyam Registration portal lets you register your MSME for free. Mudra Yojana provides loans up to ₹10 lakh without collateral. Stand-Up India scheme offers loans from ₹10 lakh to ₹1 crore for women. The NSIC portal helps with raw materials and marketing support. These digital platforms make it easy to apply online from home.",
    quiz: { question: "What does Mudra Yojana provide?", options: ["Free products", "Loans up to ₹10 lakh without collateral", "Free mobile phones", "Social media accounts"], correct: 1 },
  },
];
