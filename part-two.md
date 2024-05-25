# Introduction to React Native (Part 2)

## What we will be doing

-   Coding in a maintainable, scalable way
-   Configure multiple screens with router
-   Integrate 3rd party libraries
-   Using RESTful APIs

## Coding in a maintainable, scalable way

### Break components down into smaller components

Look at the difference between this [bad example](./workshop/blank/app/bad-example.tsx) and this [refactored version](./workshop/blank/app/screens/home/index.tsx).  
Both of them are basically the same code, yet one is more readable than the other.

### Folder structure

```
.
└── app/
    ├── assets
    ├── screens/
    │   ├── home/
    │   │   ├── components/
    │   │   └── index.tsx
    │   ├── profile/
    │   │   ├── components/
    │   │   └── index.tsx
    │   └── another-screen/
    │       ├── components/
    │       └── index.tsx
    ├── components
    ├── utils
    └── types
```

-   `assets` - contain images, fonts, audio etc.
-   `screens` - this is where the bulk of you code is, segmented further by subfolders for each screen. Eg. For a TikTok app some potential screens would be "Home", "Shop", "Inbox" and "Profile". For the NextBUS app, it could be "Bus Stops", "Bus Services", "Directions", "Favourites" and "Messages". Within each screen folder, the components folder store the components broken down. Eg. for our [NextBUS app](./workshop/blank/app/screens/home/components/), the `components` folder for the first screen stores "Header", "Filter", "BusStops" and "MapIcon".
-   `components` - unlike the previous `components` under a screen folder, this one generally contain components that are **reusable** across the whole app. Eg. custom made `Buttons` and `NavigationTab` belongs here since they are not restricted to one specific screen.
-   `utils` - utility/helper functions that can be reused across the code base. Eg. functions to manage database related operations, functions to parse items etc.
-   `types` - for those that uses Typescript, this will contain app wide types

### Abstract away reusable components

Without doing so, it will likely lead to any of the two issues, or both:

1. You get inconsistent UI
2. You violate the Don't Repeat Yourself (DRY) SWE principle. There will be unecessary code duplications, and changing anything requires you to change everything.

For instance, here is an example of a reusable button component:

```JSX
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    type: "primary" | "secondary" | "danger";
    size: "sm" | "md" | "lg";
};
const Button = ({ type, title, onPress, size }: ButtonProps) => {
    const backgroundColour = type === "primary" ? "bg-blue-500" : type === "secondary" ? "bg-gray-500" : "bg-red-500";
    const width = size === "sm" ? "w-1/4" : size === "md" ? "w-1/2" : "w-full";
    const height = size === "sm" ? "h-8" : size === "md" ? "h-12" : "h-16";
    const textSize = size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-lg";
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`rounded-xl ${backgroundColour} ${width} ${height} p-2 flex justify-center items-center`}
        >
            <Text className={`text-white ${textSize}`}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
```

Other parts of the code can just import this Button and use it. To them, they do not have to know the implementation details of the `Button`, they just have to pass in the necessary properties.

```JSX
import Button from "@/components/button";

// other code
<Button type="danger" title="Logout" onPress={() => console.log("Delete Account")} size="sm" />
<Button type="primary" title="Do Something" onPress={() => console.log("Do something")} size="lg" />
```

Instead of having to write the same 5 lines of code for every with slight differences in size/colours etc. You can now achieve the same thing with 1 line of code, passing in the necessary properties.

Furthermore, it ensures that the UI is consistent. If you happen to want to change the style of the Button, the changes will apply to all other places in your app. You will start to notice the benefits when your project starts to scale in size.

This is especially useful when you are working as a group. Your orbital partner does not need to create and style a new button every time a button is needed. Instead, he/she can treat the reusable button as a black box and just in the necessary properties.

Of course, this example allows users to create different types of button by passing in `types` and `sizes`. You can choose to implement your reusable components however you want. It is up to you to make it more restrictive or more customizable.

### Use types

Though Typescript can have a slight learning curve as compared to Javascript. It is worth using Orbital to learn it. It reduces the likelihood of bugs and runtime errors. As your project gets larger and more complex, you will start to appreciate it more.

## Configure multiple screens with routers

There are multiple ways to set up routers. Just stick to one and follow the setup guide. For React Native Expo, one way to do it is to follow the official documentation [here](https://docs.expo.dev/router/introduction/).

Once you have installed the necessary dependencies, you can create new screens by creating new files under the `app` directory. For instance, you can create a `home.tsx` and `profile.tsx` under `app`.

You can then navigate to these screens using `Link`.

```JSX
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/home">Home</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
```

## Integrate 3rd party libraries

### How to install 3rd party libraries

There will be times where you need specific functionalities that might be too time consuming to create on your own. Fortunately, other people in other parts of the world have done it for you, and you just need to install them to use it. For instance, if I want to implement toast messages in my app, I could download the library by following the instructions on their [github page](https://github.com/calintamas/react-native-toast-message).

Note that React Native can only use libraries created in React Native. It **WILL NOT** work with React libraries. Remember to add the keywords `React Native` when googling for libraries.

For instance, `React Native toast`, `React Native maps`, `React Native carousel`...

Since these libraries are created by other people, you can treat them as a black box, and use it based on the interfaces defined in their documentation. You trust that the people who worked on them have made them usable, which might not always be the case.

### What to look out for when choosing libraries

There could be many libraries that solve the same problem. When deciding which libraries to use, take note of the following:

1. Documentation: Since the implementation details are black boxed away, you mainly rely on the documentation to interact with the components. Make sure that the have proper documentation and their functionalities are what you are looking for.
2. Compatibility: If you use external libraries like tailwind, you cannot apply tailwind styling to components that do not support that. Of course, you can still use these libraries, you just have to style them in whatever way that is supported.
3. Popularity: A general rule of thumb is that between multiple library options, go for the one with the most GitHub stars. Though not always the case, a popular library is probably more maintained, less buggy and better.

### How to manage dependencies

The `package.json` file in your root directory keeps track of the dependencies (or libraries) that you have installed. So every time you installed a new library, commit your `package.json` to GitHub.

When you pull changes from GitHub, you might run into errors when trying to start the app. One common reason is because your partner has probably introduced new dependencies which you have not downloaded.

Make sure to run `npm install` on your terminal to install any new dependencies. You will be surprised by how many errors can be solved by just running this command.

The `node_modules` folder is where all the code for the dependencies are stored. You do not have to care about it, just note that you should not commit it to GitHub since `node_modules` can be derived from `package.json` by running `npm install`.

### Downsides of 3rd party libraries

Using libraries allow you to focus on the business logic of your application, but do not over rely on them.

1. Lack of control: You are at the mercy of whatever interface is provided by the library. What if in the future, you want a new functionality that is not provided by the library?
2. Maintainance: You cannot be certain that the libraries will continue to be maintained. What if there is a bug for your use case and the it is not being addressed? What if they contain other dependencies that are being deprecated?

## Using RESTful APIs

### Getting NTU Bus Details

Refer to this [video](https://www.youtube.com/watch?v=-mN3VyJuCjM) for an overview of RESTful API.

In simple terms, it is an interface that allows computer to exchange information with one another.

In order to do so, you need to know the URL of the computer (or server) that you want to talk to.

For our example, since the NUS bus API is not public, we will be using the [NTU Bus Api](https://github.com/yeukfei02/ntu-shuttle-bus-api).

In this example, the URL is `https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod`, and this [documentation](https://documenter.getpostman.com/view/3827865/UVsHV8qv) tells us the interfaces.

By looking at the documentation, we konw that we need to send a `GET` request to the `/bus-stop-details` endpoint to get the bus stop details. We can then create a function as such:

```JSX
const getBusStopDetails = async () => {
        try {
            const response = await fetch("https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod/bus-stop-details");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
```

Notice the use of `async` and `await`. Since we are sending information over the internet, it takes time for the response to come. The `async` makes the function return a `Promise` (you can read up more about this if you want), and the `await` pauses the executation of the function until the Promise is resolved.

You would then get a json response containing the data:

```json
[
    { "busStopId": "378225", "name": "NIE, Opp. LWN Library" },
    { "busStopId": "382999", "name": "Opp. Hall 3 & 16" },
    { "busStopId": "378203", "name": "Opp. Hall 14 & 15" },
    { "busStopId": "383048", "name": "Opp. Saraca Hall" },
    { "busStopId": "378222", "name": "Opposite Hall 11, bus stop" },
    { "busStopId": "383003", "name": "Nanyang Height, Opposite Hall 8 bus stop" },
    { "busStopId": "378234", "name": "Hall 6, Opp. Hall 2" },
    { "busStopId": "383004", "name": "Opp. Hall 4" },
    { "busStopId": "383006", "name": "Opp. Yunnan Gardens" },
    { "busStopId": "383009", "name": "Opp. SPMS" },
    { "busStopId": "383010", "name": "Opp. WKWSCI" },
    { "busStopId": "378226", "name": "Opp. CEE" },
    { "busStopId": "378224", "name": "LWN Library, Opp. NIE" },
    { "busStopId": "382995", "name": "SBS" },
    { "busStopId": "378227", "name": "WKWSCI" },
    { "busStopId": "378228", "name": "Hall 7" },
    { "busStopId": "378229", "name": "Yunnan Gardens" },
    { "busStopId": "378230", "name": "Hall 4" },
    { "busStopId": "378233", "name": "Hall 1 (Blk 18)" },
    { "busStopId": "378237", "name": "Canteen 2" },
    { "busStopId": "382998", "name": "Nanyang Height, Opposite Hall 8 bus stop" },
    { "busStopId": "383049", "name": "Opposite Hall 11, bus stop" },
    { "busStopId": "378202", "name": "Grad Hall 1 & 2" },
    { "busStopId": "383050", "name": "Saraca Hall" },
    { "busStopId": "378204", "name": "Hall 12 &13" },
    { "busStopId": "383091", "name": "Campus Clubhouse, NEC" },
    { "busStopId": "383090", "name": "Blk 96, Staircase 3" },
    { "busStopId": "383093", "name": "Child Care Centre" },
    { "busStopId": "378222", "name": "Opposite Hall 11, bus stop" },
    { "busStopId": "383003", "name": "Nanyang Height, Opposite Hall 8 bus stop" },
    { "busStopId": "383011", "name": "University Health Services(SSC bus stop)" },
    { "busStopId": "383013", "name": "Opposite Administration Building" },
    { "busStopId": "377906", "name": "Pioneer MRT Station Exit B at Blk 649A" },
    { "busStopId": "378233", "name": "Hall 1 (Blk 18)" },
    { "busStopId": "378237", "name": "Canteen 2" },
    { "busStopId": "383011", "name": "University Health Services(SSC bus stop)" },
    { "busStopId": "383013", "name": "Opposite Administration Building" },
    { "busStopId": "383014", "name": "Opposite Food court 2" },
    { "busStopId": "377906", "name": "Pioneer MRT Station Exit B at Blk 649A" },
    { "busStopId": "378233", "name": "Hall 1 (Blk 18)" },
    { "busStopId": "378237", "name": "Canteen 2" },
    { "busStopId": "383011", "name": "University Health Services(SSC bus stop)" },
    { "busStopId": "383013", "name": "Opposite Administration Building" },
    { "busStopId": "378207", "name": "ADM, Hall 8" },
    { "busStopId": "378224", "name": "LWN Library, Opp. NIE" },
    { "busStopId": "383015", "name": "School of CEE" },
    { "busStopId": "382995", "name": "SBS" },
    { "busStopId": "378227", "name": "WKWSCI" },
    { "busStopId": "378228", "name": "Hall 7" },
    { "busStopId": "378229", "name": "Yunnan Gardens" },
    { "busStopId": "378230", "name": "Hall 4" },
    { "busStopId": "383018", "name": "Hall 5" }
]
```

### RESTful APIs with API keys

In some cases, the API provider might require you to use an API key, either to track your usage or for other reasons. One such example is when you are using [OpenAI's API](https://openai.com/index/openai-api/).

An API key is needed for you to make a request. This adds one more layer of complexity (literally). You cannot (more like should not) attach your API key directly in your application code, and these are frontend code that will be accessed by the users.

To use OpenAI's API, you have to setup your own backend server (which stores the APIs key). Instead of making a request to OpenAI directly from your React Native application, you will now make a request to your backend server, your backend server will then attach the API key and make a request to OpenAI. Once your backend server gets a response, it will then return it to the application.

However, this requires you to host your own backend server. One alternative is to use cloud functions like the one provided by [Firebase](https://firebase.google.com/docs/functions).

### Free public API resources

You can get a list of [free public APIs](https://github.com/public-apis/public-apis) here.

## Error handling

It is important for you to handle errors to prevent crashes and improve user experiences. When you are dealing with sending requests over the internet (using RESTful APIs, or database etc.), errors are prone to happen. The users internet might be cut off, your requests might be invalid, the server might be down etc.

Apart from using the try catch block to catch errors, you can display the appropriate error messages using a toast. You can create it on your own or download a [3rd party library](https://www.npmjs.com/package/react-native-toast-message) for it.

## Useful resources

-   Refactoring guru (clean and maintainable code)
-   Free public APIs (https://github.com/public-apis/public-apis)
-   Dribbble, Behance, Pinterest (UI inspirations)
