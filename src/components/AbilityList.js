
function AbilityList(props) { 
    // turns props into a array of objects
    const abilityObject = Object.values(props);
    
    const abilities = [] 

    for (let i=0; i<abilityObject.length; i++) {
        abilities.push(abilityObject[i].ability.name)
    }

    return (
        <ul>
            {abilities.map(skill => (
                <li key={skill}>{skill}</li>    
            ))}
        </ul>
    )
};


export default AbilityList;