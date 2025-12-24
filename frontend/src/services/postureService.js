// Mock service for posture analysis
export const analyzePosture = (imageFile) => {
  // Mock posture analysis
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        score: Math.random() * 0.5 + 0.5, // Random score between 0.5 and 1.0
        feedback: [
          "Keep your spine straight",
          "Raise your right arm slightly",
          "Maintain proper balance"
        ],
        injuryRisk: Math.random() > 0.5 ? "Low" : "Medium"
      });
    }, 2000);
  });
};
