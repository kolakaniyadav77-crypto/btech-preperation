#!/bin/bash
# Setup Script for ChatGPT & Code Compiler Integration
# Run this to quickly set up the environment

echo "======================================"
echo "ChatGPT & Code Compiler Setup"
echo "======================================"
echo ""

# Check if .env file exists
if [ -f .env ]; then
    echo "✅ .env file already exists"
    echo "   Skipping .env creation..."
else
    echo "📝 Creating .env file..."
    
    # Create .env template
    cat > .env << EOF
# OpenAI API Configuration (Required for ChatGPT)
# Get key from: https://platform.openai.com/account/api-keys
REACT_APP_OPENAI_API_KEY=

# Judge0 API Configuration (Required for Code Compiler)
# Get key from: https://rapidapi.com/judge0-official/api/judge0-ce
REACT_APP_JUDGE0_API_KEY=

# Optional: Other configurations
# REACT_APP_API_URL=http://localhost:3000
EOF
    
    echo "✅ .env file created"
    echo "   ⚠️  Please add your API keys to .env file"
    echo ""
fi

echo ""
echo "======================================"
echo "Next Steps:"
echo "======================================"
echo ""
echo "1️⃣  Open .env file and add your API keys:"
echo "    - OpenAI: https://platform.openai.com/account/api-keys"
echo "    - Judge0: https://rapidapi.com/judge0-official/api/judge0-ce"
echo ""
echo "2️⃣  Start the development server:"
echo "    npm run dev"
echo ""
echo "3️⃣  Test the features:"
echo "    - ChatGPT: Click 💬 AI Assistant button"
echo "    - Compiler: Go to DSA or Programming section"
echo ""
echo "======================================"
echo "Documentation:"
echo "======================================"
echo "- QUICK_START.md ......... 5-minute setup guide"
echo "- ENV_SETUP_GUIDE.md .... Detailed API setup"
echo "- INTEGRATION_GUIDE.md .. Technical details"
echo "======================================"
echo ""
echo "🚀 Setup complete! Happy coding!"
echo ""
