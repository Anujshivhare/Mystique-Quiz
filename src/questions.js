const QUESTIONS = [
  {
    text: "What is React?",
    choices: [
      "A JavaScript library",
      "A programming language",
      "A database",
      "A testing library",
    ],
    correctAnswer: "A JavaScript library",
  },
  {
    text: "Which company developed React?",
    choices: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: "Facebook",
  },
  {
    text: "What is JSX in React?",
    choices: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript Extension",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    text: "What is the virtual DOM in React?",
    choices: [
      "A real-time database",
      "An in-memory representation of the actual DOM elements",
      "A server-side rendering technique",
      "A routing mechanism",
    ],
    correctAnswer: "An in-memory representation of the actual DOM elements",
  },
  {
    text: "What is a React component?",
    choices: [
      "A function or class that outputs React elements",
      "A styling library",
      "A state management tool",
      "A server-side script",
    ],
    correctAnswer: "A function or class that outputs React elements",
  },
  {
    text: "What is the purpose of state in React?",
    choices: [
      "To store and manage data within a component",
      "To control the styling of components",
      "To handle routing in a React application",
      "To manage the lifecycle of a component",
    ],
    correctAnswer: "To store and manage data within a component",
  },
  {
    text: "What is the significance of props in React?",
    choices: [
      "They are used for styling components",
      "They are used for handling state changes",
      "They are used to pass data between components",
      "They are used for routing in React applications",
    ],
    correctAnswer: "They are used to pass data between components",
  },
  {
    text: "What is the purpose of componentDidMount() lifecycle method in React?",
    choices: [
      "To update the component's state",
      "To fetch data from an API",
      "To clean up resources before a component is unmounted",
      "To render JSX elements",
    ],
    correctAnswer: "To fetch data from an API",
  },
  {
    text: "What is React Router used for?",
    choices: [
      "Styling React components",
      "Managing state in React applications",
      "Creating a virtual DOM",
      "Handling navigation in a React application",
    ],
    correctAnswer: "Handling navigation in a React application",
  },
  {
    text: "What is Redux in React?",
    choices: [
      "A built-in state management solution in React",
      "A database system",
      "A popular styling library",
      "A third-party state management library",
    ],
    correctAnswer: "A third-party state management library",
  },
  {
    text: "What is the purpose of the useEffect hook in React?",
    choices: [
      "To declare variables in a functional component",
      "To handle events in a class component",
      "To perform side effects in functional components",
      "To update the component's state",
    ],
    correctAnswer: "To perform side effects in functional components",
  },
  {
    text: "What is the role of the key prop in React lists?",
    choices: [
      "To apply styles to list items",
      "To identify unique elements in a list and optimize re-rendering",
      "To define the position of elements in a list",
      "To remove elements from a list",
    ],
    correctAnswer:
      "To identify unique elements in a list and optimize re-rendering",
  },
  {
    text: "What is the purpose of the useContext hook in React?",
    choices: [
      "To fetch data from an API",
      "To manage state in a functional component",
      "To handle events in a class component",
      "To access the value of a context in a functional component",
    ],
    correctAnswer: "To access the value of a context in a functional component",
  },
  {
    text: "What is a Higher Order Component (HOC) in React?",
    choices: [
      "A component that renders other components",
      "A component that manages state globally",
      "A function that takes a component and returns a new component",
      "A component used for handling navigation in React applications",
    ],
    correctAnswer:
      "A function that takes a component and returns a new component",
  },
  {
    text: "What is the purpose of the useRef hook in React?",
    choices: [
      "To create references to DOM elements in functional components",
      "To fetch data from an API",
      "To manage state in a functional component",
      "To perform side effects in class components",
    ],
    correctAnswer:
      "To create references to DOM elements in functional components",
  },
  {
    text: "What is the role of the shouldComponentUpdate method in React class components?",
    choices: [
      "To update the component's state",
      "To determine if a component should re-render",
      "To handle events in a class component",
      "To clean up resources before a component is unmounted",
    ],
    correctAnswer: "To determine if a component should re-render",
  },
  {
    text: "What are React Hooks?",
    choices: [
      "Functions that let you use state and other React features in functional components",
      "Built-in event handlers in React",
      "A form of routing in React applications",
      "Styling conventions in React",
    ],
    correctAnswer:
      "Functions that let you use state and other React features in functional components",
  },
  {
    text: "What is the purpose of the useMemo hook in React?",
    choices: [
      "To create memoized functions in functional components",
      "To manage state in a functional component",
      "To handle events in a class component",
      "To perform side effects in functional components",
    ],
    correctAnswer: "To create memoized functions in functional components",
  },
];

export default QUESTIONS;
