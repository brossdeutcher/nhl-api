const API_URL = `https://statsapi.web.nhl.com/api/v1/teams`;
const container = document.querySelector(`#root`);

const App = () => {
  const [teamsList, setTeams] = React.useState([]);
  // console.log(`hello`);
  React.useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(API_URL);
      const result = await response.json();
      setTeams(result.teams);
    };
    getTeams();
  }, []);
  console.log(teamsList);
  return (
    <>
      <h1>National Hockey League</h1>
      <ul>
        {teamsList.map((team) => {
          return <li>
            {team.name}
            {/* <img alt={team.name} src="" /> */}
          </li>;
        })}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
