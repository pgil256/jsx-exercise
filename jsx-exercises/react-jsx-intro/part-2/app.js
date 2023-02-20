function app() {
    return (
        <div>
            <Tweet
                name = 'Kurt Vonnegut'
                username = 'vonnegutK'
                date = {new Date().toDateString()}
                message = 'Buy Slaughterhouse 5'
            />
            <Tweet
                name = 'Ernest Hemingway'
                username = 'hemingwayH'
                date = {new Date().toDateString()}
                message = 'But Old Man and the sea'
            />
            <Tweet
                name = 'Fyodor Dostoyevsky'
                username = 'dostoyevskyF'
                date = {new Date().toDateString()}
                message = 'Buy Crime and Punishment'
            />
        </div>
    );
}