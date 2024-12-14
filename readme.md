<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">ASK ME ANYTHING (Front-End React)</h1></p>

<p align="center">
	<img src="https://img.shields.io/github/last-commit/maycon8609/ask-me-anything-front-react?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/maycon8609/ask-me-anything-front-react?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/maycon8609/ask-me-anything-front-react?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>

<br>

## Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Project Structure](#project-structure)
  - [ Project Index](#project-index)
- [ Getting Started](#getting-started)
  - [ Prerequisites](#prerequisites)
  - [ Installation](#installation)
  - [ Usage](#usage)
  - [ Testing](#testing)
- [ Contributing](#contributing)

---

## Overview

**Ask Me Anything** is an open-source project that simplifies the creation of interactive chat rooms for community engagement. With features like real-time messaging, message reactions, and room creation, it empowers users to effortlessly foster meaningful conversations. Ideal for community platforms looking to enhance user interaction and collaboration.

---

## Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                                              |
| :-- | :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Configured with **TypeScript** for type safety and enhanced developer experience.</li><li>Utilizes **React** for building interactive user interfaces.</li><li>Integrates **React Router** for managing navigation within the application.</li></ul>                                                         |
| 🔩  | **Code Quality**  | <ul><li>Configured with **ESLint** for static code analysis and enforcing coding standards.</li><li>Includes **TypeScript** for type checking and improved code maintainability.</li><li>Utilizes **React Refresh plugin** for fast component reloading during development.</li></ul>                                |
| 📄  | **Documentation** | <ul><li>Primary language is **TypeScript** with a mix of JSON, JS, HTML, and TSX files.</li><li>Comprehensive documentation provided in `package.json`, `tsconfig.json`, and other configuration files.</li><li>Install and usage commands detailed for **npm** package manager.</li></ul>                           |
| 🔌  | **Integrations**  | <ul><li>Integrates **@tanstack/react-query** for managing data fetching and caching.</li><li>Utilizes **React Router** for seamless navigation between different pages.</li><li>Includes **Lucide-React** icons for enhancing visual elements within the application.</li></ul>                                      |
| 🧩  |  **Modularity**   | <ul><li>Organized codebase with modular components like `create-message-form.tsx` and `messages.tsx`.</li><li>Utilizes **React hooks** for reusable logic and component composition.</li><li>Separates concerns with HTTP modules like `create-message.ts` and `get-room-messages.ts`.</li></ul>                     |
| 🧪  |    **Testing**    | <ul><li>Testing commands provided for **npm** package manager.</li><li>Includes unit tests for components, hooks, and HTTP modules.</li><li>Ensures code reliability and functionality with comprehensive test coverage.</li></ul>                                                                                   |
| ⚡️ |  **Performance**  | <ul><li>Optimized performance with **Vite** bundler for fast development and production builds.</li><li>Utilizes **SWC compiler plugin** for efficient React support in Vite configuration.</li><li>Enhances user experience with real-time updates using **WebSocket connections**.</li></ul>                       |
| 🛡️  |   **Security**    | <ul><li>Follows secure coding practices with **TypeScript** for type safety and prevention of common vulnerabilities.</li><li>Ensures data integrity and user privacy with secure HTTP requests and responses.</li><li>Implements proper authentication and authorization mechanisms for protected routes.</li></ul> |

---

## Project Structure

```sh
└── ask-me-anything-front-react/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── icon.png
    ├── src
    │   ├── app.tsx
    │   ├── assets
    │   ├── components
    │   ├── hooks
    │   ├── http
    │   ├── index.css
    │   ├── lib
    │   ├── main.tsx
    │   ├── pages
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

### Project Index

<details open>
	<summary><b><code>ASK-ME-ANYTHING-FRONT-REACT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>- Configures TypeScript compiler options for the project, targeting ES2020 with strict settings for linting<br>- Enables bundler mode, JSX for React, and isolated modules<br>- Skips emitting files and enforces no unused variables or fallthrough cases.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Configures Tailwind CSS to apply styles to specific files in the project, such as TypeScript and HTML files<br>- Extends the default theme and includes any necessary plugins.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Defines project structure and references TypeScript configuration files for app and Node.js environments.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/package.json'>package.json</a></b></td>
				<td>- Manages project dependencies and scripts for building, linting, and previewing the React front-end application<br>- Key dependencies include React, React Router, and Lucide-React icons<br>- Scripts for development, building, linting, and previewing are configured for efficient development workflows.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>- Defines ESLint configuration for TypeScript and React projects, extending recommended rules and plugins<br>- Specifies file types, ignores 'dist' directory, sets language options, and includes rules for React hooks and React Refresh plugin.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/index.html'>index.html</a></b></td>
				<td>- Serves as the entry point for the web application, defining the structure and initial content of the HTML page<br>- It sets up the necessary metadata, links to essential resources, and includes the main script file for the application<br>- This file plays a crucial role in initializing the user interface and launching the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>- Defines TypeScript compiler options for ES2022 target with strict linting rules and bundler mode<br>- Includes Vite configuration file for module resolution.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td>Enables React support in Vite configuration using SWC compiler plugin.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- SUMMARY:
------------------------
The `package-lock.json` file in the project contains dependency information for the "ask-me-anything-front-react" application<br>- It specifies the versions of various dependencies like "@tanstack/react-query", "lucide-react", "react", and "react-dom" required for the project<br>- This file ensures that the project uses specific versions of these dependencies to maintain consistency and stability in the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>- Configures PostCSS plugins Tailwind CSS and Autoprefixer for the project's build process, ensuring consistent styling and browser compatibility<br>- This file plays a crucial role in defining the CSS processing pipeline within the project structure.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/app.tsx'>app.tsx</a></b></td>
				<td>- Defines the main application structure by integrating routing, state management, and UI components<br>- It orchestrates the creation of routes and providers for managing queries and displaying toasts<br>- This file serves as the entry point for rendering the application with the necessary configurations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td>Defines Vite client types for the project, enhancing development experience by providing accurate type information for Vite-specific client-side code.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/main.tsx'>main.tsx</a></b></td>
				<td>- Enables rendering the main application component within a strict mode using React and ReactDOM<br>- Integrates the application with the root HTML element, ensuring a robust rendering environment for the entire codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Improve project styling by leveraging Tailwind CSS utility classes for base, components, and utilities<br>- This enhances the overall design consistency and efficiency within the codebase architecture.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/components/messages.tsx'>messages.tsx</a></b></td>
						<td>- Generates a sorted list of messages for a specific room, displaying message details and reactions<br>- Utilizes React hooks for routing, data fetching, and WebSocket connections<br>- Ensures proper usage within the room page context.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/components/create-message-form.tsx'>create-message-form.tsx</a></b></td>
						<td>- Enables users to create messages within a specific room by submitting a form<br>- Validates and sends the message to the server, displaying an error message if unsuccessful<br>- Utilizes React Router, Lucide icons, and Sonner for a seamless user experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/components/message.tsx'>message.tsx</a></b></td>
						<td>- Enables rendering and interaction with individual messages within a room, including reacting to messages with a like<br>- Handles message reactions by toggling between liking and unliking a message, updating the UI accordingly<br>- Displays message text, reactions count, and provides a button for users to like or unlike a message.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/lib/react-query.ts'>react-query.ts</a></b></td>
						<td>Initialize a global QueryClient instance from "@tanstack/react-query" in src/lib/react-query.ts to manage data fetching and caching across the codebase architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>http</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/http/remove-message-reaction.ts'>remove-message-reaction.ts</a></b></td>
						<td>- Enables removing reactions from messages in the project's HTTP module<br>- The code facilitates sending a DELETE request to the API endpoint responsible for managing reactions on specific messages within chat rooms<br>- This functionality enhances user interaction by allowing them to modify their reactions to messages dynamically.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/http/create-message-reaction.ts'>create-message-reaction.ts</a></b></td>
						<td>- Enables creating reactions on messages within specific chat rooms by sending a PATCH request to the API endpoint<br>- This functionality enhances user engagement and interaction within the chat application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/http/create-room.ts'>create-room.ts</a></b></td>
						<td>- Handles the creation of a room by sending a POST request to the API with the specified theme<br>- Parses the response to extract the room ID and returns it<br>- This function plays a crucial role in the project's architecture by facilitating the creation of rooms through the API.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/http/create-message.ts'>create-message.ts</a></b></td>
						<td>- Handles creating a new message in a chat room by sending a POST request to the API endpoint<br>- The function takes the room ID and message content as input, sends the request, and returns the ID of the newly created message<br>- This functionality is crucial for enabling users to interact and communicate within the chat application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/http/get-room-messages.ts'>get-room-messages.ts</a></b></td>
						<td>- Enables fetching room messages from the API based on the provided room ID<br>- Transforms the API response data into a structured format for displaying messages, including message ID, text, reactions count, and answered status<br>- This function serves as a crucial component for retrieving and formatting messages within the project's architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/pages/room.tsx'>room.tsx</a></b></td>
						<td>- Implements a React component for displaying a chat room interface with message creation and sharing functionality<br>- Handles room URL sharing via navigator API or clipboard<br>- Renders room details, message input form, and message display components<br>- Enhances user experience with loading fallback for messages.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/pages/create-room.tsx'>create-room.tsx</a></b></td>
						<td>- Enables users to create public AMA rooms, prioritize community questions, and seamlessly navigate to the newly created room<br>- The code leverages Lucide-React icons, Sonner notifications, and React Router for a smooth user experience.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/ask-me-anything-front-react/blob/master/src/hooks/use-messages-web-sockets.ts'>use-messages-web-sockets.ts</a></b></td>
						<td>- Enables real-time message updates in the application by establishing a WebSocket connection to receive and process various message events<br>- Updates the message data in the cache based on different message events like creation, answering, and reaction changes, ensuring the UI reflects the latest state seamlessly.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with ask-me-anything-front-react, ensure your runtime environment meets the following requirements:

- **Package Manager:** Npm

### Installation

Install ask-me-anything-front-react using one of the following methods:

**Build from source:**

1. Clone the ask-me-anything-front-react repository:

```sh
❯ git clone git@github.com:maycon8609/ask-me-anything-front-react.git
```

2. Navigate to the project directory:

```sh
❯ cd ask-me-anything-front-react
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Usage

Run ask-me-anything-front-react using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/maycon8609/ask-me-anything-front-react/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/maycon8609/ask-me-anything-front-react/issues)**: Submit bugs found or log feature requests for the `ask-me-anything-front-react` project.
- **💡 [Submit Pull Requests](https://github.com/maycon8609/ask-me-anything-front-react/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone git@github.com:maycon8609/ask-me-anything-front-react.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/maycon8609/ask-me-anything-front-react/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=maycon8609/ask-me-anything-front-react">
   </a>
</p>
</details>

---
