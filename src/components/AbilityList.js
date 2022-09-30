
function AbilityList(props) { 
    // turns props into a array of objects
    const abilityObject = Object.values(props);
    
    const abilities = [] 

    for (let i=0; i<abilityObject.length; i++) {
        abilities.push(abilityObject[i].ability.name)
    }

    return (
        <>
            {abilities.map(skill => (
                <div key={skill}>{skill}</div>
            ))}
        </>
    )
};


export default AbilityList;