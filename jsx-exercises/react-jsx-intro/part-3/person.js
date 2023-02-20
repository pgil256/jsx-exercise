const MAX_NAME_LENGTH_TO_SHOW = 6;

function person({age, hobbies, name}) {
    const voteOrStudy = age >= 18
        ? 'Go vote'
        : 'Go study';

    const hobbiesListItems = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Here some info about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age} </li>
                <ul>
                    Hobbies:
                    {hobbiesListItems}
                </ul> 
            </ul>
            <h3>{voteOrStudy}</h3>
        </div>
    );
}
