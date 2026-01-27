// ChatGPT Integration Service
// Connects to OpenAI API for intelligent responses

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// System prompts for different contexts
const systemPrompts = {
  dsa: `You are an expert Data Structures and Algorithms tutor. Help users understand DSA concepts, explain algorithms, and provide solutions to coding problems. Be clear, concise, and provide code examples when helpful. Focus on time complexity, space complexity, and best practices.`,
  
  programming: `You are an expert programming language instructor. Help users learn programming concepts, syntax, best practices, and solve programming problems. Provide clear explanations and code examples. Cover fundamentals, intermediate, and advanced topics.`,
  
  interview: `You are an expert interview coach for software engineering positions. Help users prepare for technical interviews, explain concepts, practice questions, and provide interview strategies. Focus on clarity and confidence building.`,
  
  placement: `You are a career guidance counselor specializing in tech placements. Help students with resume preparation, company knowledge, salary negotiations, and interview strategies. Provide actionable advice based on industry standards.`,
  
  general: `You are a helpful AI assistant for a software engineering learning platform. Help users with questions about programming, data structures, web development, databases, and career guidance. Be encouraging and provide practical solutions.`,
};

/**
 * Send message to ChatGPT API
 * @param {string} userMessage - User's message
 * @param {string} context - Context type (dsa, programming, interview, placement, general)
 * @param {Array} conversationHistory - Previous messages for context
 * @returns {Promise<string>} - ChatGPT response
 */
export const chatWithChatGPT = async (userMessage, context = 'general', conversationHistory = []) => {
  try {
    if (!OPENAI_API_KEY) {
      // Return mock response when API key is not configured
      return `I'm currently in demo mode. To enable ChatGPT integration, please add your REACT_APP_OPENAI_API_KEY environment variable. For now, I can provide general guidance: The topic you're asking about is important for your preparation!`;
    }

    // Prepare messages for API
    const messages = [
      {
        role: 'system',
        content: systemPrompts[context] || systemPrompts.general,
      },
      // Add conversation history
      ...conversationHistory,
      // Add current user message
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      if (response.status === 401) {
        throw new Error('Invalid OpenAI API key. Please check your configuration.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment before trying again.');
      } else if (response.status === 500) {
        throw new Error('OpenAI service is temporarily unavailable. Please try again later.');
      }
      throw new Error(error.error?.message || 'Failed to get response from ChatGPT');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from ChatGPT');
    }

    return assistantMessage;
  } catch (error) {
    console.error('ChatGPT Error:', error);
    throw error;
  }
};

/**
 * Get code explanation from ChatGPT
 * @param {string} code - Code to explain
 * @param {string} language - Programming language
 * @returns {Promise<string>} - Code explanation
 */
export const explainCode = async (code, language = 'JavaScript') => {
  const prompt = `Please explain the following ${language} code. Break down what it does, explain key concepts, and highlight any important patterns or best practices:\n\n${code}`;
  return chatWithChatGPT(prompt, 'programming', []);
};

/**
 * Get optimized code solution
 * @param {string} code - Code to optimize
 * @param {string} language - Programming language
 * @returns {Promise<string>} - Optimized code and explanation
 */
export const optimizeCode = async (code, language = 'JavaScript') => {
  const prompt = `Please review and optimize the following ${language} code. Suggest improvements for performance, readability, and best practices. Provide the optimized code and explain the changes:\n\n${code}`;
  return chatWithChatGPT(prompt, 'programming', []);
};

/**
 * Get help with DSA problem
 * @param {string} problemStatement - Problem description
 * @param {Array} hints - Optional hints about approach
 * @returns {Promise<string>} - Solution strategy and code
 */
export const solveDSAProblem = async (problemStatement, hints = []) => {
  let prompt = `Help me solve this DSA problem:\n\n${problemStatement}\n\n`;
  if (hints.length > 0) {
    prompt += `Consider these hints:\n${hints.map((h, i) => `${i + 1}. ${h}`).join('\n')}\n\n`;
  }
  prompt += 'Provide a clear solution strategy, explain the approach, and provide pseudocode or actual code.';
  
  return chatWithChatGPT(prompt, 'dsa', []);
};

/**
 * Get interview preparation tips
 * @param {string} company - Company name
 * @param {string} role - Job role
 * @returns {Promise<string>} - Interview tips and strategies
 */
export const getInterviewTips = async (company, role) => {
  const prompt = `I'm preparing for an interview at ${company} for the ${role} position. Please provide:
1. Key technical topics I should focus on
2. Common interview questions for this role
3. Tips for the interview process
4. Salary negotiation advice
5. Company-specific insights`;
  
  return chatWithChatGPT(prompt, 'interview', []);
};

export default {
  chatWithChatGPT,
  explainCode,
  optimizeCode,
  solveDSAProblem,
  getInterviewTips,
};
