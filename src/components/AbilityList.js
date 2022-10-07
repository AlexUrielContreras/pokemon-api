function AbilityList(props) {
  // turns props into a array of objects
  const abilityObject = Object.values(props);

  return (
    <ul>
      {abilityObject.map((skill) => (
        <li key={skill.ability.name}>{skill.ability.name}</li>
      ))}
    </ul>
  );
}

export default AbilityList;
