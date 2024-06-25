// Get references to HTML elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to append a message to the chat
function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Function to send user input to the chatbot
async function sendMessageToChatbot() {
    const userMessage = userInput.value;
    appendMessage(userMessage, 'user');

    // Send the user message to the GPT-3.5 model using your API key
    const apiKey = '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'; // Replace with your OpenAI API key
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a chatbot' },
                { role: 'user', content: userMessage }
            ]
        })
    });

    const responseData = await response.json();
    const chatbotResponse = responseData.choices[0].message.content;

    appendMessage(chatbotResponse, 'chatbot');
    userInput.value = ''; // Clear the input field
}

// Event listeners for the send button and Enter key
sendButton.addEventListener('click', sendMessageToChatbot);

userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessageToChatbot();
    }
});
