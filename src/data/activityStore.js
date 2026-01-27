// src/data/activityStore.js

// Existing user progress
const userProgress = {
  dsa: 40,
  jobPrep: 35,
  companyPrep: 20,
  certifications: 50,
  entranceExams: 15,
  resume: 80,
};

export default userProgress;

// ---------------------------
// Add placement data for colleges, companies, and rounds
export const placementData = [
  {
    college: "Anurag University",
    companies: [
      {
        name: "TCS",
        rounds: [
          {
            roundName: "Aptitude Test",
            type: "Technical",
            resource: "https://www.tcs.com/aptitude-prep",
            questions: [
              "What is the time complexity of binary search?",
              "Solve 5+3*2?"
            ]
          },
          {
            roundName: "HR Interview",
            type: "HR",
            resource: "https://www.hrexamples.com/tcs",
            questions: ["Tell me about yourself", "Why TCS?"]
          }
        ]
      },
      {
        name: "Infosys",
        rounds: [
          {
            roundName: "Coding Round",
            type: "Technical",
            resource: "https://www.infosys.com/coding-prep",
            questions: ["Reverse a linked list", "Find missing number in array"]
          },
          {
            roundName: "HR Interview",
            type: "HR",
            resource: "https://www.hrexamples.com/infosys",
            questions: ["Describe a challenge you faced", "Why Infosys?"]
          }
        ]
      }
    ]
  },
  {
    college: "VIT",
    companies: [
      {
        name: "Amazon",
        rounds: [
          {
            roundName: "Coding Round",
            type: "Technical",
            resource: "https://www.amazon.jobs/coding-prep",
            questions: ["Two Sum problem", "Palindrome check"]
          }
        ]
      }
    ]
  }
];
