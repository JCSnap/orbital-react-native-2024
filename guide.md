# Intro to React Native

Adapted from [Orbital Workshop 2023](https://github.com/yadunut/orbital-react-native-2023/blob/main/slides/part1.md)

Additional information can be found in the [NUS Hackers React Native wiki](https://wiki.nushackers.org/orbital/react-native)

## About Me

- Justin Cheah Yun Fei
- Y2 NUS CS + BBA
- NUS Hackers coreteam member
- Used React Native for my Orbital 2023 project - [SoulScribe](https://tinyurl.com/soulscribeai)
- Created Minimum Viable Products (MVPs) for a few startups using React Native
<p align="center">
  <img src="./images/5856.png" width="300" alt="Picture">
</p>

## Overview

### Part 1

- A bit about React Native
- Setting up React Native + simulator
- Intro to JSX
- Intro to React Native Components
- Styling UI with React Native
- State management with React Native
- Let's build an app!

### Part 2

- Create multiple screens (Routing)
- When and how to use libraries

## Setting expectations

- This workshop will focus on concepts rather than processes
- This course will assume that you are a beginner, though I will make reference to other concepts like `React` or `CSS` without delving too deep into them
- There will (unfortunately) be some unfamiliar jargons and processes, especially when setting up. Don't think too much about them. They are easily google-able and even I have to google them every time despite having set up multiple projects.
- Goal of this workshop:
  > I know about this concept and what it does. I might not know how to do it yet, but I know roughly which direction to go to learn more about it.

## Format

- I will be going through some concepts with some real life demo

## What we will be building
![nextbus](./images/nextbus.jpg)

## Why React Native?

- It is cross platform (Android and iOS phones can use my app)
- It is very similar to React (React is arguably the most popular framework for web development right now, skills can be easily transferrable between them)

## Setting up React Native (Expo)
> Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

In other words, Expo abstracts away a lot of the nitty gritty details of dealing with React Native. You can focus on building the app instead of spending time on configurations.

### Setting up Expo Go

Follow the instructions [here](https://reactnative.dev/docs/environment-setup).

### Setting up Android emulator

Follow the instructions [here](https://docs.expo.dev/workflow/android-studio-emulator/).

## Getting started
1. Open the project in the IDE of your choice
2. Open a new terminal window
3. Run `npm run android` or `npm run ios` (note that only Mac users can use this command)
4. Try editing some text and see the changes in real time!

## Intro to JSX
### Rules
- Any javascript in JSX must be enclosed by `{}`
- Components names MUST start with Capital Letter
```JSX
function App() {
    const name = "app";
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
}
```
### These two are equivalent
#### Using const syntax for javascript
```javascript
const logHelloWorld = () => {
    console.log("Hello World");
}
```
#### Using function syntax for javascript
```javascript
function logHelloWorld() {
    console.log("Hello World");
}
```

### These two are equivalent
#### Using const syntax for JSX
```JSX
const App = () => {
    return (
        <View>
            <Text>This is an app</Text>
        </View>
    );
}
```
#### Using function syntax for JSX
```JSX
function App() {
    return (
        <View>
            <Text>This is an app</Text>
        </View>
    );
}
```

### These two are equivalent
#### Closing tag for components that do not encapsulate anything
```JSX
function App() {
    return (
        <Button title="Press Me"></Button>
    );
}
```
#### Self-closing tag for components that do not encapsulate anything
```JSX
function App() {
    return (
        <Button title="Press Me" />
    );
}
```

### These three are equivalent
#### Nesting components together
```JSX
const MainComponent = () => {
    return (
        <View>
            <View>
                <Text>Subcomponent one</Text>
            </View>
            <View>
                <Text>Subcomponent two</Text>
            </View>
        </View>
    );
}
```
#### Extracting the components into their own components within the same page
```JSX
const MainComponent = () => {
    return (
        <View>
            <SubComponentOne />
            <SubComponentTwo />
        </View>
    );
}

const SubComponentOne = () => {
    return (
        <View>
            <Text>Subcomponent one</Text>
        </View>
    );
}

const SubComponentTwo = () => {
    return (
        <View>
            <Text>Subcomponent two</Text>
        </View>
    );
}
```
#### Extracting the components into their own components into other files, export them and importing them for use
```JSX
// index.jsx
import SubComponentOne from "./component-one.jsx"
import SubComponentTwo from "./component-two.jsx"

const MainComponent = () => {
    return (
        <View>
            <SubComponentOne />
            <SubComponentTwo />
        </View>
    );
}

// component-one.jsx
const SubComponentOne = () => {
    return (
        <View>
            <Text>Subcomponent one</Text>
        </View>
    );
}
export default SubComponentOne;

// component-two.jsx
const SubComponentTwo = () => {
    return (
        <View>
            <Text>Subcomponent two</Text>
        </View>
    );
}
export default SubComponentTwo;
```

## Creating UI with React Native

Think of it as a tool that allows you to to create stuff with logic and UI. Since CS1101S (or any of the CS1010 variants) focuses mainly on logic, this might be the first time you are dealing with UI.

Normally, UI on the web is rendered with HTML. Likewise, we can create UI with HTML-like syntax.

### Common React Native Components
These components are enough to solve 90% of your needs.
- `View`: A container like `div`
- `ScrollView`: Like `View` but Scrollable
- `Text`: Displays texts
- `Button`: Supports touches
- `TouchableOpacity`: Like `Button` but can encapsulate Button
- `TextInput`: Supports inputting texts
- `Image`: Display images

You can read up on other components [here](https://reactnative.dev/docs/components-and-apis).

### Organizing Components
Components can be organized using [flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Understanding the 4 concepts below can meet 90% of your needs. Later on we will try to create the mockup for NUS NextBUS using these concepts alone.

#### Flex direction
![flex direction](./images/flex-direction.png)
- `row`: organize components horizontally
- `column`: organize components vertically

#### Justify content
![justify content](./images/justify.png)
- `space-between`: Spread out components evenly. First component at the left end, last component at the end.
- `center`: Components are centered.

## Props
Props is how react components communcate with each other. Every parent component can pass information to its child components by giving them props.

We've already seen props (short for properties) before, like how we pass in `onPress` is passed to the `Button` component, or how the `styles` is passed to the `View` component. Just like how functions can take in arguments, components can take in properties.

### Tips
- To visualise the container, change the background colour

## State Management
Lets build an app with 3 simple things.

1. A `Text` showing the counter value, initial value of counter = 0
2. A `Button` to increment the counter
3. Another `Button` to decrement the counter

### Takeaways
- React Native does not know when to re-render the component
using `let counter = 0` and updating it breaks the rules for props stated above, it is mutating the value
- Thus, react provides us this hook useState for us to let react know when state has been updated

```JSX
function Component() {
    const [counter, setCounter] = useState(0);
    ...
    // DONT DO THIS, mutating counter doesn't tell react to rerender
    <Button onPress={() => counter += 1}>
    // No mutation. The counter value is updated in the next render
    <Button onPress={() => setCounter(counter + 1)}>
}
```

### States are used everywhere
#### TextInput
In the text input, every time the user types something, the text changes. We use `useState` to track and update the text every time it changes.
```JSX
function Component() {
    const [text, setText] = useState('');
    // Both methods below are equivalent
    return (<View><TextInput value={text} onChange={t => setText(t)}/></Text>
    return (<View><TextInput value={text} onChange={setText}/></Text>
}
```
#### Conditional Rendering
```JSX
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <View>
            <Button title="Toggle Modal" onPress={toggleModal} />
            {isModalOpen && <ModalComponent />}
        </View>
    );
}
```

## Let's build the NUS NextBUS App!
![Nextbus](./images/nextbus.jpg)

## Part 2
