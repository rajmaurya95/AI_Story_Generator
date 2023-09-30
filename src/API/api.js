// Function to call the OpenAI API
async function generateStory(prompt) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 1200,
            n: 1,
            stop: null,
            temperature: 1.0,
        }),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
        return data.choices[0].text;
    } else {
        // Return a default message or an error message to the user
        return 'An error occurred while generating the story. Please try again.';
    }
}