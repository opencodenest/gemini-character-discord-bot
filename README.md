# Gemini Character Discord Bot

This Discord bot uses the Gemini API to generate responses in the style of a specified character.  It's a fun way to interact with a virtual persona within your Discord server.

## Features

*   Generates text responses based on user input, mimicking a defined character.
*   Uses the Gemini 1.5 Flash API for fast and creative text generation.
*   Easy to configure character name and attitude via environment variables.
*   Handles API errors gracefully.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/opencodenest/gemini-character-discord-bot.git](https://www.google.com/search?q=https://github.com/opencodenest/gemini-character-discord-bot.git)
    cd gemini-character-discord-bot
    ```

2.  **Install dependencies:**

    ```bash
    npm install discord.js axios dotenv
    ```

3.  **Create a `.env` file:**  In the root of your project, create a file named `.env` and add the following environment variables:

    ```
    DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

    *   Replace `YOUR_DISCORD_BOT_TOKEN` with your actual Discord bot token.  You can obtain this from the Discord Developer Portal.
    *   Replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key. You'll need to enable the Gemini API and obtain credentials from the Google Cloud Console.

4.  **Configure character:**  In the `index.js` file, you can set the default character's name and attitude:

    ```javascript
    const CHARACTER_NAME='Elon Musk' // Example: Elon Musk
    const CHARACTER_ATTITUDE='Fun, hates OpenAI, occupy mars' // Example: Fun, hates OpenAI, occupy mars
    ```
    You can change these directly in the code, or create a mechanism to set them via Discord commands for more flexibility.

5.  **Run the bot:**

    ```bash
    node index.js
    ```

## Usage

Once the bot is running, invite it to your Discord server.  Then, use the following command in any text channel to trigger the character response: