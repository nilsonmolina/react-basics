// const aux = (props) => props.children;

// export default aux;

/*
    The Code above has been replaced by a new feature introduced in React 16.2 called Fragments:

    If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment. It's actually not called Aux but you simply use <> - an empty JSX tag.

    So the following code
        <Aux>
            <h1>First Element</h1>
            <h1>Second Element</h1>
        </Aux>
    becomes
        <React.Fragment>
            <h1>First Element</h1>
            <h1>Second Element</h1>
        </React.Fragment>
    OR
     <>
        <h1>First Element</h1>
        <h1>Second Element</h1>
    </>

    Behind the scenes, it does the same our Aux  component did.
*/