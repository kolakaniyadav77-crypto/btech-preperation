# Quick Start Guide - ChatGPT & Code Compiler

## 🚀 5-Minute Setup

### 1. Get API Keys (5 minutes)

#### OpenAI API Key:
1. Visit: https://platform.openai.com/account/api-keys
2. Create new secret key → Copy it
3. Paste into `.env` file as `REACT_APP_OPENAI_API_KEY`

#### Judge0 API Key:
1. Visit: https://rapidapi.com/judge0-official/api/judge0-ce
2. Subscribe to Free Tier
3. Get X-RapidAPI-Key from dashboard
4. Paste into `.env` file as `REACT_APP_JUDGE0_API_KEY`

### 2. Create `.env` File

In project root, create `.env`:

```env
REACT_APP_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
REACT_APP_JUDGE0_API_KEY=xxxxxxxxxxxxx
```

### 3. Restart Development Server

```bash
npm run dev
```

Done! 🎉

---

## 🧪 Test the Features

### Test ChatGPT:
1. Click **💬 AI Assistant** button (bottom-right)
2. Ask: "Explain binary search"
3. Get ChatGPT response!

### Test Code Compiler:

#### Option 1: DSA Section
1. Go to **DSA Practice**
2. Click **▶ Expand** on any topic
3. Click **🔗 Platforms** on a problem
4. Click **▶ Open Code Editor**
5. Write code → Click **▶ Execute**
6. See output!

#### Option 2: Programming Languages
1. Go to **Programming Languages**
2. Select a language
3. Select a level (Beginner, Intermediate, Advanced)
4. Click **▶ Open Code Editor**
5. Write code → Click **▶ Execute**
6. See output!

---

## 📝 Example Code to Test

### Python
```python
# Find sum of first n numbers
n = 10
total = sum(range(1, n+1))
print(f"Sum: {total}")
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}
```

### JavaScript
```javascript
const n = 10;
const sum = Array.from({length: n}, (_, i) => i + 1)
  .reduce((a, b) => a + b, 0);
console.log(`Sum: ${sum}`);
```

### C++
```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 10;
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    cout << "Sum: " << sum << endl;
    return 0;
}
```

---

## 💡 AI Assistant Contexts

The chatbot adapts to where you ask questions:

- **DSA Problems** → Get algorithm explanations, approach help
- **Programming Section** → Learn language syntax, best practices
- **Interview Prep** → Get company insights, preparation tips
- **General** → Ask anything about tech and learning

Just click **💬 AI Assistant** and ask!

---

## ⚡ Features Available

### ChatGPT Powered:
- ✅ Explain any concept
- ✅ Code review and optimization
- ✅ Problem-solving guidance
- ✅ Interview preparation
- ✅ Career advice
- ✅ Multi-turn conversations

### Code Compiler:
- ✅ Execute code in 50+ languages
- ✅ Real-time output
- ✅ Error reporting
- ✅ Execution time tracking
- ✅ Standard input support
- ✅ Copy code button

---

## 🔧 Supported Languages

Python, Java, JavaScript, C++, C, C#, Go, Rust, TypeScript, PHP, Ruby, Kotlin, Swift, and 40+ more!

---

## ⚠️ Common Issues & Fixes

### "API Key Error"
- [ ] Check `.env` file exists in project root
- [ ] Verify keys are correct at respective dashboards
- [ ] **Restart dev server** after adding `.env`
- [ ] Clear browser cache

### "No Output from Compiler"
- [ ] Check code has no infinite loops
- [ ] Verify language selection
- [ ] Check standard input format
- [ ] See browser console for errors

### "ChatGPT Not Responding"
- [ ] Verify API key in `.env`
- [ ] Check API credits at OpenAI dashboard
- [ ] Try knowledge base fallback
- [ ] Clear browser cache and retry

---

## 📚 Documentation Files

- **ENV_SETUP_GUIDE.md** - Detailed API setup
- **INTEGRATION_GUIDE.md** - Technical details and architecture
- **This file** - Quick start guide

---

## 🎓 Learning Path with New Features

1. **Learn Concept** → Ask ChatGPT AI Assistant
2. **Write Code** → Use Code Editor
3. **Test Code** → Click Execute button
4. **Optimize Code** → Ask ChatGPT for improvements
5. **Practice More** → Repeat with different problems

---

## 💰 Cost Information

### OpenAI (ChatGPT):
- Free trial: $5 credits
- Pay-as-you-go: ~$0.001 per 1000 tokens
- Budget limits: Set in account settings

### Judge0 (Code Compiler):
- Free tier: 100 requests/day
- Paid: Various plans available
- Monitor at: RapidAPI Dashboard

---

## 🆘 Help & Support

1. **Check browser console** → Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)
2. **Read error messages** → They're usually helpful!
3. **Restart dev server** → Fixes 80% of issues
4. **Clear cache** → Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
5. **Check API dashboards** → Verify keys and limits

---

## ✨ Next Steps

1. ✅ Setup API keys (.env file)
2. ✅ Restart dev server
3. ✅ Test both features
4. ✅ Start learning with AI + Compiler!

**Happy Learning! 🚀**

---

**Quick Reference:**
- AI Assistant: **💬** button (always visible)
- Code Editor: **▶ Open Code Editor** button
- Supported Languages: 50+
- Average Response Time: <2 seconds
- Execution Time: Usually <1 second per code run
