function StatList(props) {
  const abilityArray = Object.values(props);
	
  return (
    <ul>
      {abilityArray.map((stats) => (
        <li key={stats.stat.name}>{stats.stat.name}</li>
      ))}
    </ul>
  );
}

export default StatList;
