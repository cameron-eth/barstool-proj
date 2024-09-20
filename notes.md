The feed defines the hooks in order to program the functionality, the main functionality of the project is the fetch stories function which uses 4/6 hooks

it uses an async await call to fetch teh stories, as long as there are stories to retreieve we set stories in an array ordered from the initial stories we grabbed

we use effect and call that function every render.

#2 
Since we designed the individual story card in another component file, we create a feed component for all stories to exist, from there we map the stories defined in the hook (using the array map function)

We import the story component we defined, and use that to show the stories we fetched, defining the key, title, url, & author

Conditionally rendering the has more hook arg

STRUCTURE

Pages (Node) -> Stories (Branch) -> Feed (Root)