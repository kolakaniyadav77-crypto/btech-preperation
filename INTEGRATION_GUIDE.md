# ChatGPT & Code Compiler Integration Guide

## 🎯 Overview

This guide explains the integration of:
1. **ChatGPT API** - For intelligent AI Assistant
2. **Judge0 Code Compiler** - For executing code in multiple languages

## 📚 What Was Integrated

### 1. ChatGPT Integration (`src/services/chatGptService.js`)

**Features:**
- Direct API connection to OpenAI's GPT-3.5-turbo
- Context-aware responses based on page section (DSA, Programming, Interview, Placement)
- Conversation history support for multi-turn dialogs
- Specialized prompts for different learning contexts
- Error handling with fallback to knowledge base
- Code explanation and optimization helpers
- DSA problem solving assistance
- Interview preparation guidance

**Key Functions:**
```javascript
// Main chat function
chatWithChatGPT(userMessage, context, conversationHistory)

// Specialized helpers
explainCode(code, language)
optimizeCode(code, language)
solveDSAProblem(problemStatement, hints)
getInterviewTips(company, role)
```

### 2. Code Compiler Integration (`src/services/codeCompilerService.js`)

**Features:**
- Uses Judge0 API for code execution
- Supports 50+ programming languages
- Real-time execution with output capture
- Error handling and timeout management
- Memory and execution time tracking
- Base64 encoding for safe transmission

**Supported Languages:**
- Python, Java, JavaScript, C++, C, Go, Rust
- C#, PHP, Ruby, TypeScript, and 40+ more

**Key Functions:**
```javascript
executeCode(code, language, input)
getSupportedLanguages()
formatExecutionResult(result)
```

### 3. Code Editor Component (`src/components/CodeEditor.jsx`)

**Features:**
- Full-featured code editor with syntax highlighting
- Language selector dropdown
- Standard input/output support
- Real-time code execution
- Copy code button
- Clear code button
- Execution time and memory display
- Error reporting

**Props:**
```javascript
<CodeEditor
  initialCode=""           // Starting code
  language="Python"        // Default language
  onCodeChange={callback}  // When code changes
  showCompiler={true}      // Enable/disable execution
/>
```

### 4. Updated AIChatbot (`src/components/AIChatbot.jsx`)

**Enhancements:**
- Automatic ChatGPT integration when API key available
- Fallback to knowledge base if ChatGPT unavailable
- Conversation history for context awareness
- Smart error handling
- Clear error messages to users
- Support for DSA, programming, interview contexts

### 5. Integration Points

#### DSAPractice Component:
- Code editor button in problem modal
- Execute solutions inline
- Test with sample inputs
- Track execution time

#### ProgrammingLanguages Component:
- Code editor in "Try It Out" section
- Practice problems with compiler
- Real-time code testing
- Language-specific execution

## 🔧 Implementation Details

### File Structure

```
src/
├── services/
│   ├── chatGptService.js          (NEW - ChatGPT integration)
│   ├── codeCompilerService.js     (NEW - Code execution)
│   ├── aiChatbotService.js        (EXISTING - Knowledge base)
│   └── supabaseClient.js          (EXISTING)
├── components/
│   ├── CodeEditor.jsx             (NEW - Code editor UI)
│   ├── AIChatbot.jsx              (UPDATED - ChatGPT support)
│   ├── DSAPractice.jsx            (UPDATED - Code editor integration)
│   ├── ProgrammingLanguages.jsx   (UPDATED - Code editor integration)
│   └── ...
└── styles/
    ├── CodeEditor.css             (NEW - Editor styling)
    ├── DSAPractice.css            (UPDATED - Added editor styles)
    └── ProgrammingLanguages.css   (UPDATED - Added editor styles)
```

## 🚀 Getting Started

### Step 1: Set Up Environment Variables

Create `.env` file in project root:

```env
REACT_APP_OPENAI_API_KEY=sk-proj-your-key-here
REACT_APP_JUDGE0_API_KEY=your-rapidapi-key-here
```

### Step 2: Install Dependencies (if needed)

The code uses built-in browser APIs and existing dependencies:
- No additional npm packages required
- Uses fetch API for HTTP requests
- Base64 encoding (native JavaScript)

### Step 3: Start Development Server

```bash
npm run dev
```

**Important:** Restart the server after adding `.env` file variables.

### Step 4: Test Features

#### Test ChatGPT:
1. Click the AI Assistant button (bottom right)
2. Ask a question about DSA or programming
3. Check browser console for any errors

#### Test Code Compiler:
1. Go to DSA Practice or Programming Languages
2. Click "Open Code Editor" button
3. Select language
4. Write code
5. Click "Execute" button
6. See output and execution time

## 🔗 API Integration Details

### ChatGPT API

**Endpoint:** `https://api.openai.com/v1/chat/completions`

**Request Format:**
```javascript
{
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful AI...' },
    { role: 'user', content: 'User message' },
    { role: 'assistant', content: 'Previous response' }
  ],
  temperature: 0.7,
  max_tokens: 1500,
  top_p: 0.9
}
```

**System Prompts Available:**
- `dsa` - DSA expert tutor
- `programming` - Programming language instructor
- `interview` - Interview coach
- `placement` - Career guidance counselor
- `general` - General AI assistant

### Judge0 API

**Endpoint:** `https://judge0-ce.p.rapidapi.com/submissions`

**Request Format (Base64 Encoded):**
```javascript
{
  language_id: 71,           // Python: 71, Java: 62, JavaScript: 63, etc.
  source_code: 'base64...',  // Code encoded in base64
  stdin: 'base64...',        // Input encoded in base64
  wait: false                // Async execution
}
```

**Response Status Codes:**
- 1 = In Queue
- 2 = Processing
- 3 = Accepted (Success)
- 4+ = Various error states

## 💾 Data Flow

### ChatGPT Flow:
```
User Input → AIChatbot Component
    ↓
Check if ChatGPT key available
    ↓ (YES)
chatWithChatGPT() with context
    ↓
OpenAI API
    ↓
Response → Display to user
    ↓ (NO or ERROR)
chatWithAI() - Knowledge base fallback
    ↓
Response → Display to user
```

### Code Compilation Flow:
```
User Writes Code → Click Execute
    ↓
executeCode(code, language, input)
    ↓
Encode code/input to Base64
    ↓
Send to Judge0 API
    ↓
Poll for result (1 second intervals)
    ↓
Decode output
    ↓
Display execution result with time/memory
```

## 🛡️ Error Handling

### ChatGPT Errors:
- Invalid API key → Clear error message
- Rate limit exceeded → Suggest waiting
- Service unavailable → Fallback to knowledge base
- Network error → Retry with exponential backoff

### Code Compiler Errors:
- Unsupported language → List available languages
- Compilation error → Show error message
- Runtime error → Display stderr output
- Timeout → Show execution timeout message

## ⚙️ Configuration

### Temperature Settings:
- ChatGPT `temperature: 0.7` - Balanced creativity and consistency
- Can adjust in `chatGptService.js` for different behavior

### Timeout Settings:
- Code execution timeout: 30 seconds
- Poll interval: 1 second
- Adjustable in `codeCompilerService.js`

### Token Limits:
- Max tokens for ChatGPT response: 1500
- Adjustable based on needs

## 📊 Performance Considerations

### Optimization Tips:
1. **Cache frequently asked questions** in knowledge base
2. **Rate limit API calls** with debouncing
3. **Lazy load code editor** for faster page load
4. **Batch API requests** when possible
5. **Monitor API usage** for cost management

### Monitoring:
- Check ChatGPT API usage: https://platform.openai.com/account/usage/overview
- Check Judge0 usage: RapidAPI Dashboard
- Browser DevTools Network tab for request details
- Console for error messages and debugging

## 🎯 Use Cases

### DSA Section:
1. **Understand Problem** → ChatGPT explains approach
2. **Write Solution** → Code Editor for syntax
3. **Test Solution** → Compiler executes code
4. **Optimize** → ChatGPT suggests improvements

### Programming Section:
1. **Learn Concept** → ChatGPT explains topic
2. **Practice Code** → Code Editor for examples
3. **Try MCQs** → Test knowledge
4. **Compile & Test** → Verify code works

### Interview Prep:
1. **Get Tips** → ChatGPT interview guidance
2. **Practice Questions** → Write solutions
3. **Test Code** → Compiler for verification
4. **Receive Feedback** → ChatGPT code review

## 🐛 Troubleshooting

### ChatGPT Not Working:
```
Check:
1. API key in .env file
2. Environment variable loaded (restart dev server)
3. API key validity at https://platform.openai.com/account/api-keys
4. Have remaining API credits
5. Browser console for specific errors
6. Network tab for failed requests
```

### Code Compiler Not Working:
```
Check:
1. API key in .env file
2. Environment variable loaded (restart dev server)
3. Selected language is supported
4. Code doesn't have infinite loops
5. Input format is correct
6. RapidAPI key is active and hasn't exceeded limits
```

### Environment Variables Not Loading:
```
Solution:
1. Verify .env file is in project root
2. Restart development server: npm run dev
3. Clear browser cache
4. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
5. Check node_modules/.cache and clear if needed
```

## 📈 Future Enhancements

Possible improvements:
- [ ] Code snippet sharing
- [ ] Leaderboard for code performance
- [ ] Code formatting with Prettier integration
- [ ] Git integration for saving solutions
- [ ] Collaborative coding sessions
- [ ] Advanced debugging features
- [ ] AI-powered code review system
- [ ] Performance analysis and optimization suggestions

## 📞 Support

- **OpenAI Support:** https://help.openai.com
- **Judge0 Documentation:** https://api.judge0.com
- **RapidAPI Support:** https://rapidapi.com/support
- **GitHub Issues:** Report bugs in your repository

## ✅ Checklist for Deployment

- [ ] Set environment variables in production
- [ ] Test ChatGPT with real API key
- [ ] Test Code Compiler with multiple languages
- [ ] Verify error handling works
- [ ] Monitor API costs
- [ ] Set up rate limiting if needed
- [ ] Document API usage for team
- [ ] Test on different browsers
- [ ] Test on mobile devices
- [ ] Set up monitoring/logging

---

**Last Updated:** January 25, 2026
**Version:** 1.0
