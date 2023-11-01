export const reactQA = [
  {
    id: 1,
    question: "What is React and why is it used?",
    answer: "React is an open-source JavaScript library used for building user interfaces (UIs). It is maintained by Facebook and a community of developers. React is popular because it allows developers to create dynamic and interactive UIs easily. It uses a virtual DOM for efficient rendering, making it well-suited for single-page applications."
  },
  {
    id: 2,
    question: "What is JSX in React?",
    answer: "JSX stands for JavaScript XML. It's a syntax extension used in React for defining the structure of user interfaces. JSX allows developers to write HTML-like code within JavaScript. React components render JSX elements to create the UI. Babel is commonly used to transpile JSX into JavaScript."
  },
  {
    id: 3,
    question: "What is a React component?",
    answer: "In React, a component is a reusable and self-contained piece of code that defines a part of the user interface. Components can be simple (functional) or complex (class-based) and are used to encapsulate UI elements and their behavior. Composing components allows for building complex UIs."
  },
  {
    id: 4,
    question: "What is the difference between state and props in React?",
    answer: "State and props are two fundamental concepts in React. Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and help in communication between components. State, on the other hand, is used to manage data that can change over time within a component. State is mutable and can be changed using setState()."
  },
  {
    id: 5,
    question: "How do you handle events in React?",
    answer: "In React, events are handled using event handlers. You can attach event handlers to elements, and when the event occurs, the associated function is executed. For example, you can use the onClick event to handle a click event on a button. Event handlers are defined as methods within the component class or as arrow functions in functional components."
  },
  {
    id: 6,
    question: "What is the role of the virtual DOM in React?",
    answer: "The virtual DOM (VDOM) is a key concept in React. It is a lightweight copy of the actual DOM. React uses the virtual DOM to improve performance by minimizing direct interaction with the real DOM. When changes occur in the UI, React updates the virtual DOM first, calculates the difference (diffing) between the virtual DOM and the actual DOM, and then applies the minimum number of changes to the real DOM, reducing the overall workload and increasing performance."
  },
  {
    id: 7,
    question: "What are React Hooks?",
    answer: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to help manage state and side effects in functional components without needing to write class components. Common hooks include useState for managing component state and useEffect for handling side effects like data fetching or subscriptions."
  },
  {
    id: 8,
    question: "What is component lifecycle in React?",
    answer: "The component lifecycle in React refers to the phases a component goes through, from initialization to unmounting. Key lifecycle methods include componentDidMount (called after the component is inserted into the DOM), componentDidUpdate (called after the component's state or props change), and componentWillUnmount (called before the component is removed from the DOM). These methods are used to perform actions at specific points in a component's life."
  },
  {
    id: 9,
    question: "What is React Router, and why is it used?",
    answer: "React Router is a popular library for adding routing functionality to React applications. It allows you to create single-page applications with multiple views or pages. React Router helps in defining routes and rendering components based on the current URL, enabling navigation between different parts of your app without full page reloads."
  },
  {
    id: 10,
    question: "What is the purpose of keys in React lists?",
    answer: "Keys are special attributes used in React when rendering lists of elements. They help React identify which items have changed, been added, or been removed. Keys improve the efficiency of list updates and help React maintain component state when reordering elements in a list. Keys should be unique among siblings but don't necessarily need to be globally unique."
  }
];
