# Environment Configuration Guide

This guide explains how to set up the required environment variables for ChatGPT integration and code compiler features.

## 📋 Required Environment Variables

Create a `.env` file in the root of your project (same level as `package.json`) with the following variables:

### 1. OpenAI API (For ChatGPT Integration)

```
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

**How to get your OpenAI API Key:**
1. Go to https://platform.openai.com/account/api-keys
2. Sign up or log in with your OpenAI account
3. Click "Create new secret key"
4. Copy the key and paste it into your `.env` file
5. **Important:** Never share this key or commit it to version control

**Pricing:** OpenAI uses a pay-as-you-go model. Check https://openai.com/pricing for current rates.

### 2. Judge0 API (For Code Compilation)

```
REACT_APP_JUDGE0_API_KEY=your_judge0_api_key_here
```

**How to get your Judge0 API Key:**
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Sign up or log in to RapidAPI
3. Click "Subscribe to Test"
4. Find your X-RapidAPI-Key in the dashboard
5. Copy the key and paste it into your `.env` file

**Features:**
- Free tier: Limited requests per month
- Supports 50+ programming languages
- Fast code execution and feedback

## 📝 Complete .env Template

```env
# OpenAI Configuration
REACT_APP_OPENAI_API_KEY=sk-proj-...

# Judge0 Code Compiler Configuration
REACT_APP_JUDGE0_API_KEY=...

# Optional: Other configurations
REACT_APP_API_URL=http://localhost:3000
```

## ⚙️ Features Enabled with These Keys

### With OpenAI API Key:
- ✅ ChatGPT-powered AI Assistant
- ✅ Code explanation and optimization
- ✅ DSA problem solving with context-aware hints
- ✅ Interview preparation tips
- ✅ Conversation history and context awareness

### With Judge0 API Key:
- ✅ Code compilation and execution
- ✅ Support for 50+ programming languages
- ✅ Real-time code execution in DSA section
- ✅ Real-time code execution in Programming Languages section
- ✅ Instant feedback and error reporting

## 🚀 Getting Started

1. **Create `.env` file in project root**
   ```bash
   touch .env
   ```

2. **Add your API keys**
   ```
   REACT_APP_OPENAI_API_KEY=your_key_here
   REACT_APP_JUDGE0_API_KEY=your_key_here
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Restart the dev server** if it's already running (environment variables are loaded on startup)

## ⚠️ Important Security Notes

1. **Never commit `.env` file** - It's in `.gitignore` by default
2. **Never share your API keys** - Treat them like passwords
3. **Regenerate keys if leaked** - Visit the respective dashboards to revoke old keys
4. **Use environment variables only** - Don't hardcode API keys in source files
5. **Monitor API usage** - Keep track of your API costs

## 🔍 Debugging

### If ChatGPT isn't working:
- Check if `REACT_APP_OPENAI_API_KEY` is properly set in `.env`
- Verify the key is correct at https://platform.openai.com/account/api-keys
- Check browser console for error messages
- Ensure you have API credits remaining

### If Code Compilation isn't working:
- Check if `REACT_APP_JUDGE0_API_KEY` is properly set in `.env`
- Verify the key is correct in your RapidAPI dashboard
- Check if you've exceeded the free tier limits
- Ensure the programming language is supported

### General Troubleshooting:
- Make sure to **restart the development server** after adding environment variables
- Clear your browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check the browser console for specific error messages
- Verify internet connection

## 📞 Support & Documentation

- **OpenAI Docs:** https://platform.openai.com/docs
- **Judge0 Docs:** https://api.judge0.com
- **RapidAPI:** https://rapidapi.com/judge0-official/api/judge0-ce

## 💡 Features Available

### AI Chatbot Features:
- 📚 DSA guidance and concept explanation
- 💻 Programming language learning support
- 🎯 Interview preparation assistance
- 💼 Placement and career advice
- 🔄 Context-aware multi-turn conversations

### Code Editor Features:
- 🎨 Syntax highlighting (multiple languages)
- ⚡ Real-time code execution
- 📊 Execution time and memory display
- 📝 Standard input/output support
- 🧪 Instant testing and debugging

## 🎯 Best Practices

1. **Cache API responses** when possible to reduce costs
2. **Set reasonable timeouts** for code execution (max 10-30 seconds)
3. **Validate user input** before sending to APIs
4. **Handle errors gracefully** with helpful user messages
5. **Monitor API costs** regularly to avoid surprises
6. **Use free trials** to test before committing to paid plans

Happy coding! 🚀
