import useWebSocket from 'react-use-websocket';

function App() {
  const { lastMessage } = useWebSocket("ws://localhost:8000/ws");
  const weather = lastMessage ? JSON.parse(lastMessage.data) : null;

  return (
    <div>
      <h1>{weather?.story || "Loading..."}</h1>
      <p>Temp: {weather?.temp}°C</p>
    </div>
  );
}