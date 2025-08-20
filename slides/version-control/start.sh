#!/bin/bash

# Git & Version Control Presentation Startup Script

echo " Starting Git & Version Control Interactive Presentation..."
echo "📍 Location: /Users/qratul/uvu/courses/swe_2/slides/02-version-control"
echo ""

# Navigate to presentation directory
cd /Users/qratul/uvu/courses/swe_2/slides/02-version-control

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🎭 Starting Slidev presentation server..."
echo ""
echo "📖 Presentation: Git & Version Control with GitHub"
echo " Features: Interactive learning, premium design, live coding"
echo ""
echo "🌐 URLs:"
echo "   • Development: http://localhost:3030"
echo "   • Presenter:   http://localhost:3030/presenter"
echo "   • Print:       http://localhost:3030/print"
echo ""
echo "🔧 Controls:"
echo "   • Space/Arrow: Navigate slides"
echo "   • D: Toggle dark mode"
echo "   • O: Toggle overview"
echo "   • F: Toggle fullscreen"
echo ""

# Start the development server
npm run dev
