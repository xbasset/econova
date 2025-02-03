# Econova

Econova is a mobile business simulation game focused on the energy transition and reducing CO₂ emissions. Players collect funds, invest in green projects, and transform the economy towards sustainability.

## Features

- Tap to collect donations and fund projects.
- Invest in initiatives that reduce carbon emissions.
- Develop clean energy and waste management solutions.
- Manage resources to balance economic growth and environmental impact.

## Tech Stack

- **React Native** (Expo) – Cross-platform mobile development.
- **NativeWind** – TailwindCSS for styling in React Native.
- **JavaScript/TypeScript** – Core programming languages.

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/econova.git
   cd econova
   ```
2. Initialize Expo inside the existing directory:
   ```sh
   npx create-expo-app@latest .
   ```
3. Install dependencies:
   ```sh
   npm install nativewind tailwindcss
   ```
4. Configure Tailwind:
   ```sh
   npx tailwindcss init
   ```
   Update `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
5. Enable NativeWind in `app.json`:
   ```json
   "plugins": ["nativewind/babel"]
   ```

## Running the Project

Start the Expo development server:

```sh
npx expo start
```

Scan the QR code with the Expo Go app on your mobile to test the game.

## Roadmap

-

## Contributing

Feel free to submit issues, feature requests, or contribute via pull requests!

## License

MIT License. See `LICENSE` for details.

