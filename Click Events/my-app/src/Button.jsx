function Button() {
    const handleClick = () => console.log('Clicked.');
    const handleClick2 = (e, name) =>
        console.log(
            ` Event : ${e.type} OOHHHHH........ ${name} Stop Clicking Me!\n Stop Naaaaaaaaaa........`
        );
    return <button onDoubleClick={(e) => handleClick2(e, 'Tamanna')}>Click Me</button>;
}

export default Button;
