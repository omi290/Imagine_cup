// Mock service for PDF Tutor
export const generateQuiz = (pdfContent) => {
  // Mock quiz generation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        questions: [
          {
            id: 1,
            question: "What is the main topic of the uploaded PDF?",
            options: ["Topic A", "Topic B", "Topic C", "Topic D"],
            correctAnswer: "Topic A"
          },
          {
            id: 2,
            question: "Which concept is explained in detail?",
            options: ["Concept 1", "Concept 2", "Concept 3", "Concept 4"],
            correctAnswer: "Concept 2"
          }
        ]
      });
    }, 1000);
  });
};

export const submitAnswers = (answers) => {
  // Mock feedback generation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        score: 0.75,
        feedback: [
          "Good understanding of the main topic.",
          "Review the detailed concept for better comprehension.",
          "Consider reading the PDF again for deeper insights."
        ]
      });
    }, 1000);
  });
};
